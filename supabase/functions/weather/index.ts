// Server-side weather + AQI proxy. Keys never reach the client.
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const url = new URL(req.url);
    const lat = parseFloat(url.searchParams.get("lat") ?? "");
    const lng = parseFloat(url.searchParams.get("lng") ?? "");
    if (!isFinite(lat) || !isFinite(lng)) {
      return new Response(JSON.stringify({ error: "lat & lng required" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    const OW = Deno.env.get("OPENWEATHER_API_KEY");
    const WAQI = Deno.env.get("WAQI_TOKEN");
    const result: Record<string, unknown> = { mock: false };

    // Weather (current + 5-day/3h forecast on free tier)
    if (OW) {
      const [curR, fcR] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${OW}`),
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&appid=${OW}&cnt=8`),
      ]);
      const cur = await curR.json();
      const fc = await fcR.json();
      if (!curR.ok) {
        console.error("OpenWeather error", curR.status, cur);
        result.weather_error = cur?.message ?? `HTTP ${curR.status}`;
        result.mock = true;
        result.weather = { temp: 22, feels_like: 21, humidity: 65, wind: 3.2, condition: "Clouds", description: "scattered clouds (sample)", icon: "03d", city: "—" };
        result.forecast = [];
      } else {
        result.weather = {
          temp: cur?.main?.temp, feels_like: cur?.main?.feels_like, humidity: cur?.main?.humidity,
          wind: cur?.wind?.speed, condition: cur?.weather?.[0]?.main, description: cur?.weather?.[0]?.description,
          icon: cur?.weather?.[0]?.icon, city: cur?.name,
        };
        result.forecast = (fc?.list ?? []).slice(0, 8).map((f: any) => ({
          time: f.dt_txt, temp: f.main?.temp, condition: f.weather?.[0]?.main, icon: f.weather?.[0]?.icon,
        }));
      }
    } else {
      result.mock = true;
      result.weather = { temp: 22, feels_like: 21, humidity: 65, wind: 3.2, condition: "Clouds", description: "scattered clouds (mock)", icon: "03d", city: "—" };
      result.forecast = [];
    }

    // AQI via WAQI
    if (WAQI) {
      const a = await fetch(`https://api.waqi.info/feed/geo:${lat};${lng}/?token=${WAQI}`).then(r => r.json());
      if (a?.status === "ok") {
        result.aqi = { value: a.data?.aqi, dominant: a.data?.dominentpol, station: a.data?.city?.name, time: a.data?.time?.iso };
      } else {
        result.aqi = { error: a?.data ?? "unavailable" };
      }
    } else {
      (result as any).aqi = { value: 58, dominant: "pm25", station: "Mock station", mock: true };
    }

    return new Response(JSON.stringify(result), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (e) {
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
