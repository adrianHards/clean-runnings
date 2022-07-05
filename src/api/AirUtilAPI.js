const AMBEE_KEY = process.env.REACT_APP_AMBEE_API
// console.log('API', process.env.REACT_APP_AMBEE_API)

export const AirUtilAPI = async (lat, lng) => {
  const res = await fetch(
    `https://api.ambeedata.com/latest/by-lat-lng?lat=${lat}&lng=${lng}`,
    {
      method: 'GET',
      headers: {
        'x-api-key': AMBEE_KEY,
        'Content-type': 'application/json',
      },
    }
  );
  if (res.ok === true) {
    const data = await res.json();
    //setAirQualityData(data.stations);
    return [
      {
        aqi: data.stations[0].AQI || 0,
        category: data.stations[0].aqiInfo.category,
      },
    ];
  }
};
