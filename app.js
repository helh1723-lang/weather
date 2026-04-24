const WEATHER_CODE = {
  0: ["晴", "sunny.png"],
  1: ["晴间多云", "partly-cloudy-day.png"],
  2: ["多云", "mostly-cloudy.png"],
  3: ["阴", "cloudy.png"],
  45: ["雾", "fog.png"],
  48: ["雾凇", "fog.png"],
  51: ["小毛毛雨", "light-rain.png"],
  53: ["毛毛雨", "rain.png"],
  55: ["大毛毛雨", "heavy-rain.png"],
  56: ["冻毛毛雨", "sleet.png"],
  57: ["强冻毛毛雨", "wintry-mix.png"],
  61: ["小雨", "light-rain.png"],
  63: ["中雨", "rain.png"],
  65: ["大雨", "heavy-rain.png"],
  66: ["冻雨", "sleet.png"],
  67: ["强冻雨", "wintry-mix.png"],
  71: ["小雪", "snow.png"],
  73: ["中雪", "snow.png"],
  75: ["大雪", "snow.png"],
  77: ["雪粒", "hail.png"],
  80: ["阵雨", "rainbow-rain.png"],
  81: ["强阵雨", "heavy-rain.png"],
  82: ["暴雨", "heavy-rain.png"],
  85: ["阵雪", "snow.png"],
  86: ["强阵雪", "snow.png"],
  95: ["雷阵雨", "thunderstorm.png"],
  96: ["雷阵雨伴冰雹", "hail.png"],
  99: ["强雷阵雨伴冰雹", "hail.png"],
};

const CITY_FALLBACKS = {
  "长春": { name: "长春市", latitude: 43.8171, longitude: 125.3235, country: "中国" },
  "长春市": { name: "长春市", latitude: 43.8171, longitude: 125.3235, country: "中国" },
  "北京": { name: "北京市", latitude: 39.9042, longitude: 116.4074, country: "中国" },
  "北京市": { name: "北京市", latitude: 39.9042, longitude: 116.4074, country: "中国" },
  "上海": { name: "上海市", latitude: 31.2304, longitude: 121.4737, country: "中国" },
  "上海市": { name: "上海市", latitude: 31.2304, longitude: 121.4737, country: "中国" },
  "广州": { name: "广州市", latitude: 23.1291, longitude: 113.2644, country: "中国" },
  "广州市": { name: "广州市", latitude: 23.1291, longitude: 113.2644, country: "中国" },
  "深圳": { name: "深圳市", latitude: 22.5431, longitude: 114.0579, country: "中国" },
  "深圳市": { name: "深圳市", latitude: 22.5431, longitude: 114.0579, country: "中国" },
  "成都": { name: "成都市", latitude: 30.5728, longitude: 104.0668, country: "中国" },
  "成都市": { name: "成都市", latitude: 30.5728, longitude: 104.0668, country: "中国" },
  "杭州": { name: "杭州市", latitude: 30.2741, longitude: 120.1551, country: "中国" },
  "杭州市": { name: "杭州市", latitude: 30.2741, longitude: 120.1551, country: "中国" },
  "南京": { name: "南京市", latitude: 32.0603, longitude: 118.7969, country: "中国" },
  "南京市": { name: "南京市", latitude: 32.0603, longitude: 118.7969, country: "中国" },
  "武汉": { name: "武汉市", latitude: 30.5928, longitude: 114.3055, country: "中国" },
  "武汉市": { name: "武汉市", latitude: 30.5928, longitude: 114.3055, country: "中国" },
  "西安": { name: "西安市", latitude: 34.3416, longitude: 108.9398, country: "中国" },
  "西安市": { name: "西安市", latitude: 34.3416, longitude: 108.9398, country: "中国" },
};

const EXTRA_CITY_SEEDS = [
  ["天津市", 39.3434, 117.3616, ["天津"]],
  ["重庆市", 29.563, 106.5516, ["重庆"]],
  ["哈尔滨市", 45.8038, 126.5349, ["哈尔滨"]],
  ["沈阳市", 41.8057, 123.4315, ["沈阳"]],
  ["大连市", 38.914, 121.6147, ["大连"]],
  ["吉林市", 43.8378, 126.5494, ["吉林"]],
  ["齐齐哈尔市", 47.3543, 123.9182, ["齐齐哈尔"]],
  ["呼和浩特市", 40.8426, 111.7492, ["呼和浩特"]],
  ["包头市", 40.6574, 109.8404, ["包头"]],
  ["石家庄市", 38.0428, 114.5149, ["石家庄"]],
  ["唐山市", 39.6309, 118.1802, ["唐山"]],
  ["秦皇岛市", 39.9354, 119.5996, ["秦皇岛"]],
  ["太原市", 37.8706, 112.5489, ["太原"]],
  ["大同市", 40.0768, 113.3001, ["大同"]],
  ["济南市", 36.6512, 117.1201, ["济南"]],
  ["青岛市", 36.0671, 120.3826, ["青岛"]],
  ["烟台市", 37.4638, 121.4479, ["烟台"]],
  ["威海市", 37.5131, 122.1204, ["威海"]],
  ["潍坊市", 36.7069, 119.1618, ["潍坊"]],
  ["临沂市", 35.1047, 118.3564, ["临沂"]],
  ["郑州市", 34.7466, 113.6254, ["郑州"]],
  ["洛阳市", 34.6197, 112.454, ["洛阳"]],
  ["开封市", 34.7973, 114.3076, ["开封"]],
  ["长沙市", 28.2282, 112.9388, ["长沙"]],
  ["株洲市", 27.8274, 113.1338, ["株洲"]],
  ["湘潭市", 27.8298, 112.9441, ["湘潭"]],
  ["南昌市", 28.682, 115.8579, ["南昌"]],
  ["九江市", 29.7051, 116.0019, ["九江"]],
  ["合肥市", 31.8206, 117.2272, ["合肥"]],
  ["芜湖市", 31.3525, 118.4331, ["芜湖"]],
  ["苏州市", 31.2989, 120.5853, ["苏州"]],
  ["无锡市", 31.4912, 120.3119, ["无锡"]],
  ["常州市", 31.8122, 119.9741, ["常州"]],
  ["扬州市", 32.3942, 119.4129, ["扬州"]],
  ["南通市", 31.9802, 120.8943, ["南通"]],
  ["徐州市", 34.2044, 117.2858, ["徐州"]],
  ["宁波市", 29.8683, 121.544, ["宁波"]],
  ["温州市", 27.9938, 120.6994, ["温州"]],
  ["绍兴市", 30.0303, 120.5802, ["绍兴"]],
  ["嘉兴市", 30.7461, 120.7555, ["嘉兴"]],
  ["金华市", 29.0791, 119.6474, ["金华"]],
  ["台州市", 28.6564, 121.4208, ["台州"]],
  ["福州市", 26.0745, 119.2965, ["福州"]],
  ["厦门市", 24.4798, 118.0894, ["厦门"]],
  ["泉州市", 24.8741, 118.6757, ["泉州"]],
  ["漳州市", 24.5135, 117.6471, ["漳州"]],
  ["佛山市", 23.0218, 113.1219, ["佛山"]],
  ["东莞市", 23.0207, 113.7518, ["东莞"]],
  ["珠海市", 22.2711, 113.5767, ["珠海"]],
  ["中山市", 22.5176, 113.3926, ["中山"]],
  ["惠州市", 23.1115, 114.4152, ["惠州"]],
  ["汕头市", 23.3541, 116.6819, ["汕头"]],
  ["南宁市", 22.817, 108.3669, ["南宁"]],
  ["桂林市", 25.2342, 110.1799, ["桂林"]],
  ["柳州市", 24.3264, 109.4281, ["柳州"]],
  ["海口市", 20.044, 110.1999, ["海口"]],
  ["三亚市", 18.2525, 109.5121, ["三亚"]],
  ["贵阳市", 26.647, 106.6302, ["贵阳"]],
  ["遵义市", 27.7254, 106.9274, ["遵义"]],
  ["昆明市", 24.8801, 102.8329, ["昆明"]],
  ["大理市", 25.6065, 100.2676, ["大理"]],
  ["丽江市", 26.8565, 100.2271, ["丽江"]],
  ["拉萨市", 29.652, 91.1721, ["拉萨"]],
  ["西宁市", 36.6171, 101.7782, ["西宁"]],
  ["银川市", 38.4872, 106.2309, ["银川"]],
  ["兰州市", 36.0611, 103.8343, ["兰州"]],
  ["天水市", 34.5809, 105.7249, ["天水"]],
  ["乌鲁木齐市", 43.8256, 87.6168, ["乌鲁木齐", "乌市"]],
  ["喀什市", 39.4704, 75.9898, ["喀什"]],
  ["香港", 22.3193, 114.1694, ["香港特别行政区"]],
  ["澳门", 22.1987, 113.5439, ["澳门特别行政区"]],
  ["台北市", 25.033, 121.5654, ["台北"]],
  ["高雄市", 22.6273, 120.3014, ["高雄"]],
];

EXTRA_CITY_SEEDS.forEach(([name, latitude, longitude, aliases = []]) => {
  registerCityFallback(name, latitude, longitude, aliases);
});

const DEFAULT_PRESENTER = "weather-host.png";
const DEFAULT_BACKGROUND = "ChatGPT Image 2026年4月24日 10_13_00.png";
const PRESENTER_BY_CONDITION = {
  cloudy: "presenter-cloudy.png",
  foggy: "presenter-foggy.png",
  partlyCloudy: "presenter-partly-cloudy.png",
  rainy: "presenter-rainy.png",
  snowy: "presenter-snowy.png",
  thunderstorm: "presenter-thunderstorm.png",
  windy: "presenter-windy.png",
};

const BACKGROUND_BY_CONDITION = {
  sunny: "ChatGPT Image 2026年4月24日 11_09_56 (1).png",
  partlyCloudy: "ChatGPT Image 2026年4月24日 11_09_57 (2).png",
  cloudy: "ChatGPT Image 2026年4月24日 11_09_58 (3).png",
  rainy: "ChatGPT Image 2026年4月24日 11_09_58 (4).png",
  thunderstorm: "ChatGPT Image 2026年4月24日 11_09_59 (5).png",
  snowy: "ChatGPT Image 2026年4月24日 11_10_00 (6).png",
  foggy: "ChatGPT Image 2026年4月24日 11_10_01 (7).png",
  rainbow: "ChatGPT Image 2026年4月24日 11_10_02 (8).png",
};

const DEMO = {
  city: CITY_FALLBACKS["长春"],
  current: {
    temperature_2m: 24,
    apparent_temperature: 23,
    relative_humidity_2m: 42,
    wind_speed_10m: 11,
    wind_direction_10m: 135,
    weather_code: 0,
  },
  daily: {
    time: ["2026-05-24", "2026-05-25", "2026-05-26", "2026-05-27", "2026-05-28", "2026-05-29", "2026-05-30"],
    weather_code: [0, 2, 1, 61, 2, 0, 1],
    temperature_2m_max: [24, 25, 26, 22, 21, 23, 24],
    temperature_2m_min: [12, 13, 15, 14, 12, 13, 14],
    sunrise: ["2026-05-24T04:36:00"],
    sunset: ["2026-05-24T19:12:00"],
    precipitation_probability_max: [10, 20, 15, 70, 30, 10, 18],
  },
  hourly: {
    time: Array.from({ length: 24 }, (_, i) => `2026-05-24T${String(i).padStart(2, "0")}:00`),
    temperature_2m: [17, 16, 15, 15, 15, 16, 18, 20, 22, 24, 25, 27, 28, 28, 29, 29, 28, 27, 26, 25, 24, 22, 20, 17],
    apparent_temperature: [14, 14, 13, 13, 13, 14, 16, 18, 20, 22, 23, 24, 25, 25, 26, 26, 25, 24, 24, 23, 22, 20, 18, 15],
    relative_humidity_2m: [48, 49, 51, 52, 54, 53, 50, 47, 45, 43, 41, 39, 38, 37, 38, 39, 40, 41, 42, 44, 46, 47, 48, 50],
    precipitation_probability: [8, 8, 6, 5, 6, 8, 10, 11, 12, 10, 9, 8, 10, 10, 8, 6, 5, 4, 5, 7, 8, 9, 10, 12],
    visibility: Array(24).fill(24000),
    uv_index: [0, 0, 0, 0, 0, 1, 2, 4, 5, 6, 7, 7, 7, 6, 5, 3, 2, 1, 0, 0, 0, 0, 0, 0],
  },
  air: {
    hourly: {
      time: Array.from({ length: 24 }, (_, i) => `2026-05-24T${String(i).padStart(2, "0")}:00`),
      pm10: [28],
      pm2_5: [18],
      nitrogen_dioxide: [12],
      ozone: [68],
      sulphur_dioxide: [6],
      carbon_monoxide: [0.4],
      us_aqi: [35],
      uv_index: [7],
    },
  },
};

const els = {};
let toastTimer = 0;

document.addEventListener("DOMContentLoaded", () => {
  [
    "cityChip", "chipCity", "searchForm", "cityInput", "locateBtn", "todayTitle", "dateLine",
    "currentTemp", "currentIcon", "weatherText", "windText", "humidityText", "feelsText",
    "sunriseText", "sunsetText", "reportText", "uvText", "rainChanceText", "metricHumidityText",
    "visibilityText", "forecastList", "chartWrap", "airStatusText", "aqiRing", "aqiText",
    "aqiLevelText", "pollutants", "airNote", "dressIndex", "dressText", "sportIndex",
    "sportText", "carIndex", "carText", "coldIndex", "coldText", "fishIndex", "fishText",
    "travelIndex", "travelText", "toast", "weatherHost", "hostAvatar", "weatherBgCurrent", "weatherBgNext",
  ].forEach((id) => {
    els[id] = document.getElementById(id);
  });

  els.searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = els.cityInput.value.trim();
    if (value) {
      loadCity(value);
    }
  });

  els.locateBtn.addEventListener("click", () => {
    els.cityInput.value = "";
    loadCity("长春市");
  });

  renderWeather(normalizePayload(DEMO.city, DEMO, DEMO.air), true);
  loadCity("长春市");
});

async function loadCity(query) {
  const searchText = query.trim();
  showToast(`正在为你查询「${searchText}」的天气...`);

  try {
    const city = await resolveCity(searchText);
    const weather = await fetchWeather(city);
    let air = DEMO.air;
    let usedFallbackAir = false;
    try {
      air = await fetchAir(city);
    } catch (airError) {
      console.warn("空气质量接口暂时不可用", airError);
      usedFallbackAir = true;
    }
    renderWeather(normalizePayload(city, weather, air), false);
    showToast(usedFallbackAir ? `${city.name}天气已更新，空气质量暂用演示数据` : `${city.name}天气已更新`);
  } catch (error) {
    console.warn(error);
    if (error?.message === "CITY_NOT_FOUND") {
      showToast(`没有找到「${searchText}」，请换一个城市名或输入更完整的名称`);
      return;
    }
    showToast(`「${searchText}」天气暂时查询失败，已保留当前城市`);
  }
}

async function resolveCity(query) {
  const fallback = findFallbackCity(query);
  if (fallback) {
    return fallback;
  }

  const candidates = cityQueryCandidates(query);
  for (const candidate of candidates) {
    const found = await geocodeCity(candidate);
    if (found) {
      return found;
    }
  }

  throw new Error("CITY_NOT_FOUND");
}

async function geocodeCity(query) {
  const url = new URL("https://geocoding-api.open-meteo.com/v1/search");
  url.searchParams.set("name", query);
  url.searchParams.set("count", "10");
  url.searchParams.set("language", "zh");
  url.searchParams.set("format", "json");
  if (/[\u4e00-\u9fa5]/.test(query)) {
    url.searchParams.set("countryCode", "CN");
  }

  const data = await fetchJson(url);
  const results = data.results || [];
  if (!results.length) return null;

  const normalizedQuery = normalizeCityQuery(query);
  const result = results.find((item) => {
    const itemName = normalizeCityQuery(item.name || "");
    const admin1 = normalizeCityQuery(item.admin1 || "");
    const admin2 = normalizeCityQuery(item.admin2 || "");
    return itemName === normalizedQuery || itemName.includes(normalizedQuery) || admin1.includes(normalizedQuery) || admin2.includes(normalizedQuery);
  }) || results.find((item) => item.country_code === "CN" || item.country === "中国") || results[0];

  const isChineseCity = result.country_code === "CN" || result.country === "中国";
  return {
    name: isChineseCity && !result.name.endsWith("市") ? `${result.name}市` : result.name,
    latitude: result.latitude,
    longitude: result.longitude,
    country: result.country,
  };
}

function registerCityFallback(name, latitude, longitude, aliases = []) {
  const city = { name, latitude, longitude, country: "中国" };
  const keys = new Set([name, normalizeCityQuery(name), ...aliases, ...aliases.map(normalizeCityQuery)]);
  keys.forEach((key) => {
    if (key) CITY_FALLBACKS[key] = city;
  });
}

function findFallbackCity(query) {
  for (const candidate of cityQueryCandidates(query)) {
    if (CITY_FALLBACKS[candidate]) return CITY_FALLBACKS[candidate];
  }
  return null;
}

function cityQueryCandidates(query) {
  const normalized = normalizeCityQuery(query);
  const withoutSuffix = normalized.replace(/(特别行政区|自治州|地区|盟|市辖区|市|县|区)$/u, "");
  const withoutProvinceWords = withoutSuffix
    .replace(/^(中国|中华人民共和国)/u, "")
    .replace(/(省|自治区|壮族自治区|回族自治区|维吾尔自治区)$/u, "");
  return [...new Set([query.trim(), normalized, withoutSuffix, withoutProvinceWords].filter(Boolean))];
}

function normalizeCityQuery(input) {
  return String(input || "")
    .trim()
    .replace(/\s+/g, "")
    .replace(/[，,。.!！?？、]/g, "")
    .replace(/天气预报|天气|市天气|今日|今天|明天/g, "")
    .replace(/^(中国|中华人民共和国)/u, "");
}

async function fetchWeather(city) {
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", city.latitude);
  url.searchParams.set("longitude", city.longitude);
  url.searchParams.set("timezone", "auto");
  url.searchParams.set("forecast_days", "7");
  url.searchParams.set("current", [
    "temperature_2m",
    "relative_humidity_2m",
    "apparent_temperature",
    "weather_code",
    "wind_speed_10m",
    "wind_direction_10m",
  ].join(","));
  url.searchParams.set("hourly", [
    "temperature_2m",
    "apparent_temperature",
    "relative_humidity_2m",
    "precipitation_probability",
    "visibility",
    "uv_index",
  ].join(","));
  url.searchParams.set("daily", [
    "weather_code",
    "temperature_2m_max",
    "temperature_2m_min",
    "sunrise",
    "sunset",
    "precipitation_probability_max",
  ].join(","));

  return fetchJson(url);
}

async function fetchAir(city) {
  const url = new URL("https://air-quality-api.open-meteo.com/v1/air-quality");
  url.searchParams.set("latitude", city.latitude);
  url.searchParams.set("longitude", city.longitude);
  url.searchParams.set("timezone", "auto");
  url.searchParams.set("forecast_days", "1");
  url.searchParams.set("hourly", [
    "pm10",
    "pm2_5",
    "nitrogen_dioxide",
    "ozone",
    "sulphur_dioxide",
    "carbon_monoxide",
    "us_aqi",
    "uv_index",
  ].join(","));

  return fetchJson(url);
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`请求失败：${response.status}`);
  }
  const json = await response.json();
  if (json.error) {
    throw new Error(json.reason || "接口返回错误");
  }
  return json;
}

function normalizePayload(city, weather, air) {
  const now = weather.current || DEMO.current;
  const hourly = weather.hourly || DEMO.hourly;
  const daily = weather.daily || DEMO.daily;
  const nearestWeatherIndex = findNearestIndex(hourly.time, weather.current?.time);
  const airHourly = air?.hourly || DEMO.air.hourly;
  const nearestAirIndex = findNearestIndex(airHourly.time, weather.current?.time);

  return {
    city,
    current: {
      temp: round(now.temperature_2m ?? DEMO.current.temperature_2m),
      feels: round(now.apparent_temperature ?? DEMO.current.apparent_temperature),
      humidity: round(now.relative_humidity_2m ?? hourly.relative_humidity_2m?.[nearestWeatherIndex] ?? 42),
      windSpeed: round(now.wind_speed_10m ?? 0),
      windDirection: now.wind_direction_10m ?? 0,
      weatherCode: now.weather_code ?? 0,
      rainChance: round(hourly.precipitation_probability?.[nearestWeatherIndex] ?? daily.precipitation_probability_max?.[0] ?? 0),
      visibility: round((hourly.visibility?.[nearestWeatherIndex] ?? 24000) / 1000),
      uv: round(hourly.uv_index?.[nearestWeatherIndex] ?? airHourly.uv_index?.[nearestAirIndex] ?? 0),
      sunrise: daily.sunrise?.[0],
      sunset: daily.sunset?.[0],
    },
    hourly: takeNext24(hourly, nearestWeatherIndex),
    daily,
    air: {
      aqi: round(airHourly.us_aqi?.[nearestAirIndex] ?? DEMO.air.hourly.us_aqi[0]),
      pm25: round(airHourly.pm2_5?.[nearestAirIndex] ?? DEMO.air.hourly.pm2_5[0], 1),
      pm10: round(airHourly.pm10?.[nearestAirIndex] ?? DEMO.air.hourly.pm10[0], 1),
      no2: round(airHourly.nitrogen_dioxide?.[nearestAirIndex] ?? DEMO.air.hourly.nitrogen_dioxide[0], 1),
      o3: round(airHourly.ozone?.[nearestAirIndex] ?? DEMO.air.hourly.ozone[0], 1),
      so2: round(airHourly.sulphur_dioxide?.[nearestAirIndex] ?? DEMO.air.hourly.sulphur_dioxide[0], 1),
      co: round(airHourly.carbon_monoxide?.[nearestAirIndex] ?? DEMO.air.hourly.carbon_monoxide[0], 1),
    },
  };
}

function takeNext24(hourly, startIndex) {
  const start = Math.max(0, startIndex);
  const sourceLength = hourly.time?.length || 0;
  const result = {
    time: [],
    temperature_2m: [],
    apparent_temperature: [],
  };

  for (let i = 0; i < 24; i += 1) {
    const index = Math.min(start + i, sourceLength - 1);
    result.time.push(hourly.time?.[index] || DEMO.hourly.time[i]);
    result.temperature_2m.push(round(hourly.temperature_2m?.[index] ?? DEMO.hourly.temperature_2m[i]));
    result.apparent_temperature.push(round(hourly.apparent_temperature?.[index] ?? DEMO.hourly.apparent_temperature[i]));
  }

  return result;
}

function renderWeather(data, isDemo) {
  const weatherMeta = weatherInfo(data.current.weatherCode);
  const date = new Date();
  const airLevel = getAirLevel(data.air.aqi);

  els.todayTitle.textContent = data.city.name;
  els.chipCity.textContent = data.city.name;
  els.dateLine.textContent = `${formatFullDate(date)}  ${isDemo ? "演示数据" : "实时更新"}`;
  els.currentTemp.textContent = data.current.temp;
  els.currentIcon.src = `weather-icons/${weatherMeta.icon}`;
  els.currentIcon.alt = weatherMeta.text;
  els.weatherText.textContent = weatherMeta.text;
  els.windText.textContent = `${windDirectionText(data.current.windDirection)} ${windLevel(data.current.windSpeed)}级`;
  els.humidityText.textContent = `湿度 ${data.current.humidity}%`;
  els.feelsText.textContent = `体感 ${data.current.feels}°C`;
  els.sunriseText.textContent = `日出 ${formatTime(data.current.sunrise)}`;
  els.sunsetText.textContent = `日落 ${formatTime(data.current.sunset)}`;
  els.uvText.textContent = `UV ${data.current.uv}`;
  els.rainChanceText.textContent = `${data.current.rainChance}%`;
  els.metricHumidityText.textContent = `${data.current.humidity}%`;
  els.visibilityText.textContent = `${data.current.visibility} km`;
  els.reportText.textContent = buildReport(data, weatherMeta.text, airLevel.label);
  updatePresenter(data.current.weatherCode, data.current.windSpeed);
  updateBackground(data.current.weatherCode);

  renderForecast(data.daily);
  renderChart(data.hourly);
  renderAir(data.air, airLevel);
  renderLife(data, airLevel);
}

function renderForecast(daily) {
  const days = daily.time.slice(0, 7).map((date, index) => {
    const meta = weatherInfo(daily.weather_code[index]);
    return `
      <article class="forecast-day ${index === 0 ? "is-today" : ""}">
        <strong>${index === 0 ? "今天" : weekday(date)}</strong>
        <small>${monthDay(date)}</small>
        <img src="weather-icons/${meta.icon}" alt="${meta.text}" />
        <b>${round(daily.temperature_2m_max[index])}°</b>
        <span>${round(daily.temperature_2m_min[index])}°</span>
      </article>
    `;
  });
  els.forecastList.innerHTML = days.join("");
}

function renderChart(hourly) {
  const width = 620;
  const height = 188;
  const pad = { top: 18, right: 20, bottom: 28, left: 38 };
  const temps = hourly.temperature_2m;
  const feels = hourly.apparent_temperature;
  const values = [...temps, ...feels];
  const min = Math.floor(Math.min(...values) / 3) * 3 - 3;
  const max = Math.ceil(Math.max(...values) / 3) * 3 + 3;
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const x = (i) => pad.left + (i / 23) * plotW;
  const y = (value) => pad.top + ((max - value) / (max - min)) * plotH;
  const line = (arr) => arr.map((value, index) => `${index === 0 ? "M" : "L"}${x(index).toFixed(1)} ${y(value).toFixed(1)}`).join(" ");
  const area = `${line(feels)} L${x(23).toFixed(1)} ${height - pad.bottom} L${x(0).toFixed(1)} ${height - pad.bottom} Z`;
  const ticks = [0, 4, 8, 12, 16, 20, 23];
  const yTicks = Array.from({ length: 5 }, (_, i) => min + ((max - min) / 4) * i);
  const tipIndex = Math.min(23, Math.max(0, temps.findIndex((_, i) => i >= 11)));
  const tipX = Math.min(width - 120, Math.max(56, x(tipIndex) - 42));
  const tipY = Math.max(22, y(temps[tipIndex]) - 68);

  els.chartWrap.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="24小时气温与体感温度趋势">
      ${yTicks.map((value) => `<line class="chart-grid" x1="${pad.left}" x2="${width - pad.right}" y1="${y(value)}" y2="${y(value)}"></line><text class="chart-axis" x="8" y="${y(value) + 4}">${round(value)}°</text>`).join("")}
      ${ticks.map((index) => `<text class="chart-axis" x="${x(index) - 13}" y="${height - 8}">${formatHour(hourly.time[index])}</text>`).join("")}
      <path class="chart-area" d="${area}"></path>
      <path class="chart-line-temp" d="${line(temps)}"></path>
      <path class="chart-line-feel" d="${line(feels)}"></path>
      ${temps.map((value, index) => `<circle class="chart-point-temp" cx="${x(index)}" cy="${y(value)}" r="${index % 2 ? 0 : 4}"></circle>`).join("")}
      ${feels.map((value, index) => `<circle class="chart-point-feel" cx="${x(index)}" cy="${y(value)}" r="${index % 2 ? 0 : 4}"></circle>`).join("")}
      <rect class="tooltip-card" x="${tipX}" y="${tipY}" rx="10" width="110" height="58"></rect>
      <text x="${tipX + 14}" y="${tipY + 20}" fill="#617184" font-size="12" font-weight="800">${formatHour(hourly.time[tipIndex])}</text>
      <text x="${tipX + 14}" y="${tipY + 38}" fill="#ff78ab" font-size="12" font-weight="800">● 温度: ${temps[tipIndex]}°C</text>
      <text x="${tipX + 14}" y="${tipY + 53}" fill="#2384ff" font-size="12" font-weight="800">● 体感: ${feels[tipIndex]}°C</text>
    </svg>
  `;
}

function renderAir(air, level) {
  const percent = Math.min(1, air.aqi / 160);
  const circumference = 289;
  els.aqiText.textContent = air.aqi;
  els.aqiLevelText.textContent = level.label;
  els.airStatusText.textContent = level.tip;
  els.aqiRing.style.stroke = level.color;
  els.aqiRing.style.strokeDashoffset = String(circumference - circumference * percent);
  els.aqiText.style.color = level.color;
  els.aqiLevelText.style.color = level.color;
  els.airNote.textContent = level.note;
  els.pollutants.innerHTML = [
    ["PM2.5", air.pm25],
    ["PM10", air.pm10],
    ["NO₂", air.no2],
    ["O₃", air.o3],
    ["SO₂", air.so2],
    ["CO", air.co],
  ].map(([label, value]) => `<span><span><i></i>${label}</span><b>${value}</b></span>`).join("");
}

function renderLife(data, airLevel) {
  const temp = data.current.temp;
  const rain = data.current.rainChance;
  const wind = data.current.windSpeed;
  const isCold = temp <= 8;
  const isHot = temp >= 30;
  const isRainy = rain >= 55;

  setText("dressIndex", "dressText", isCold ? "保暖" : isHot ? "清凉" : "舒适", isCold ? "建议穿厚外套，注意防风保暖。" : isHot ? "建议短袖轻薄衣物，外出注意防晒。" : "建议薄外套或衬衫，早晚微凉注意保暖。");
  setText("sportIndex", "sportText", isRainy || wind > 35 ? "较不宜" : "适宜", isRainy ? "有明显降水概率，室内运动更稳妥。" : "天气状态不错，适合散步、慢跑和轻量户外运动。");
  setText("carIndex", "carText", isRainy ? "不宜" : "较适宜", isRainy ? "可能有降水，建议暂缓洗车。" : "未来一天降水概率较低，适合洗车。");
  setText("coldIndex", "coldText", Math.abs(temp - data.current.feels) >= 4 || isCold ? "较易发" : "较低", isCold ? "气温偏低，注意添衣防寒。" : "体感稳定，保持作息和补水即可。");
  setText("fishIndex", "fishText", isRainy || wind > 30 ? "一般" : "适宜", isRainy ? "降水会影响体验，建议选择遮雨地点。" : "风力温和，水温适中，适合垂钓。");
  setText("travelIndex", "travelText", airLevel.label === "差" || isRainy ? "注意" : "适宜", airLevel.label === "差" ? "空气质量偏弱，出门建议佩戴口罩。" : isRainy ? "出门记得带伞，注意路面湿滑。" : "天气状态平稳，适合出行，祝你旅途愉快！");
}

function setText(indexId, textId, index, text) {
  els[indexId].textContent = index;
  els[textId].textContent = text;
}

function weatherInfo(code) {
  const [text, icon] = WEATHER_CODE[code] || WEATHER_CODE[0];
  return { text, icon };
}

function updatePresenter(weatherCode, windSpeed) {
  const presenter = presenterForWeather(weatherCode, windSpeed);
  const src = `character-assets/${presenter}`;
  swapImage(els.weatherHost, src);
  swapImage(els.hostAvatar, src);
}

function updateBackground(weatherCode) {
  const background = backgroundForWeather(weatherCode);
  const src = background.file;
  const nextImage = `url("${src}")`;
  if (!els.weatherBgCurrent || !els.weatherBgNext) return;
  if (els.weatherBgCurrent.style.backgroundImage.includes(src)) {
    document.body.dataset.weatherBg = background.kind;
    return;
  }

  const preloader = new Image();
  preloader.onload = () => {
    els.weatherBgNext.style.backgroundImage = nextImage;
    els.weatherBgNext.classList.add("is-active");
    els.weatherBgCurrent.classList.remove("is-active");
    document.body.dataset.weatherBg = background.kind;
    window.setTimeout(() => {
      els.weatherBgCurrent.style.backgroundImage = nextImage;
      els.weatherBgCurrent.classList.add("is-active");
      els.weatherBgNext.classList.remove("is-active");
    }, 680);
  };
  preloader.onerror = () => {
    els.weatherBgCurrent.style.backgroundImage = `url("${DEFAULT_BACKGROUND}")`;
    document.body.dataset.weatherBg = "default";
  };
  preloader.src = src;
}

function backgroundForWeather(code) {
  if (code === 0) return { file: BACKGROUND_BY_CONDITION.sunny, kind: "sunny" };
  if ([1, 2].includes(code)) return { file: BACKGROUND_BY_CONDITION.partlyCloudy, kind: "partly" };
  if ([3].includes(code)) return { file: BACKGROUND_BY_CONDITION.cloudy, kind: "cloudy" };
  if ([45, 48].includes(code)) return { file: BACKGROUND_BY_CONDITION.foggy, kind: "foggy" };
  if ([80].includes(code)) return { file: BACKGROUND_BY_CONDITION.rainbow, kind: "rainbow" };
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 81, 82].includes(code)) return { file: BACKGROUND_BY_CONDITION.rainy, kind: "rainy" };
  if ([71, 73, 75, 77, 85, 86].includes(code)) return { file: BACKGROUND_BY_CONDITION.snowy, kind: "snowy" };
  if ([95, 96, 99].includes(code)) return { file: BACKGROUND_BY_CONDITION.thunderstorm, kind: "storm" };
  return { file: DEFAULT_BACKGROUND, kind: "default" };
}

function presenterForWeather(code, windSpeed) {
  if (windSpeed >= 29) return PRESENTER_BY_CONDITION.windy;
  if ([1].includes(code)) return PRESENTER_BY_CONDITION.partlyCloudy;
  if ([2].includes(code)) return PRESENTER_BY_CONDITION.partlyCloudy;
  if ([3].includes(code)) return PRESENTER_BY_CONDITION.cloudy;
  if ([45, 48].includes(code)) return PRESENTER_BY_CONDITION.foggy;
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return PRESENTER_BY_CONDITION.rainy;
  if ([71, 73, 75, 77, 85, 86].includes(code)) return PRESENTER_BY_CONDITION.snowy;
  if ([95, 96, 99].includes(code)) return PRESENTER_BY_CONDITION.thunderstorm;
  return DEFAULT_PRESENTER;
}

function swapImage(img, src) {
  if (!img || img.getAttribute("src") === src) return;
  img.classList.add("is-switching");
  const next = new Image();
  next.onload = () => {
    img.src = src;
    window.setTimeout(() => img.classList.remove("is-switching"), 80);
  };
  next.onerror = () => {
    img.src = `character-assets/${DEFAULT_PRESENTER}`;
    window.setTimeout(() => img.classList.remove("is-switching"), 80);
  };
  next.src = src;
}

function buildReport(data, weatherText, airLevel) {
  const temp = data.current.temp;
  const rain = data.current.rainChance;
  if (rain >= 60) {
    return `今天${weatherText}，降水概率偏高，出门记得带伞哦！当前${temp}°C，空气质量${airLevel}，保持好心情~`;
  }
  if (temp >= 30) {
    return `今天${weatherText}，气温有点热，适合轻装出门。记得做好防晒，多喝水保持元气满满~`;
  }
  if (temp <= 8) {
    return `今天${weatherText}，体感偏冷，出门请穿暖一点。小晴提醒你，围巾和热饮都很加分~`;
  }
  return `今天${weatherText}，温度舒适，适合出门散步哦！记得关注紫外线和空气质量，保持好心情~`;
}

function findNearestIndex(times, targetTime) {
  if (!Array.isArray(times) || !times.length) return 0;
  const target = targetTime ? new Date(targetTime).getTime() : Date.now();
  let best = 0;
  let bestDiff = Infinity;
  times.forEach((time, index) => {
    const diff = Math.abs(new Date(time).getTime() - target);
    if (diff < bestDiff) {
      best = index;
      bestDiff = diff;
    }
  });
  return best;
}

function getAirLevel(aqi) {
  if (aqi <= 50) return { label: "优", tip: "清新", color: "#36c271", note: "空气清新，快去呼吸新鲜空气吧！" };
  if (aqi <= 100) return { label: "良", tip: "可接受", color: "#8bcf3f", note: "空气质量良好，敏感人群适当减少久留。" };
  if (aqi <= 150) return { label: "轻度", tip: "敏感人群注意", color: "#f4b63f", note: "空气略有压力，敏感人群建议减少户外停留。" };
  return { label: "差", tip: "防护", color: "#ef6d6d", note: "空气质量偏弱，外出建议佩戴口罩。" };
}

function windDirectionText(deg) {
  const dirs = ["北风", "东北风", "东风", "东南风", "南风", "西南风", "西风", "西北风"];
  return dirs[Math.round((((deg % 360) + 360) % 360) / 45) % 8];
}

function windLevel(speed) {
  if (speed < 1) return 0;
  if (speed < 6) return 1;
  if (speed < 12) return 2;
  if (speed < 20) return 3;
  if (speed < 29) return 4;
  if (speed < 39) return 5;
  return 6;
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => els.toast.classList.remove("show"), 2400);
}

function formatFullDate(date) {
  const weekdayText = new Intl.DateTimeFormat("zh-CN", { weekday: "long" }).format(date);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日  ${weekdayText}`;
}

function formatTime(value) {
  if (!value) return "--:--";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "--:--";
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function formatHour(value) {
  return formatTime(value).replace(":00", ":00");
}

function weekday(value) {
  return new Intl.DateTimeFormat("zh-CN", { weekday: "short" }).format(new Date(value));
}

function monthDay(value) {
  const date = new Date(value);
  return `${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}`;
}

function round(value, digits = 0) {
  const factor = 10 ** digits;
  return Math.round((Number(value) || 0) * factor) / factor;
}
