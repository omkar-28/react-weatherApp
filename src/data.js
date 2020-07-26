const weatherData = {
  coord: {
    lon: -0.13,
    lat: 51.51,
  },
  weather: [
    {
      id: 802,
      main: "Clouds",
      description: "scattered clouds",
      icon: "03d",
    },
  ],
  base: "stations",
  main: {
    temp: 292.28,
    feels_like: 287.44,
    temp_min: 291.48,
    temp_max: 293.15,
    pressure: 1021,
    humidity: 48,
  },
  visibility: 10000,
  wind: {
    speed: 6.2,
    deg: 280,
  },
  clouds: {
    all: 40,
  },
  dt: 1594052416,
  sys: {
    type: 1,
    id: 1414,
    country: "GB",
    sunrise: 1594007503,
    sunset: 1594066713,
  },
  timezone: 3600,
  id: 2643743,
  name: "London",
  cod: 200,
};

export default weatherData;
