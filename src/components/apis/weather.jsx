import { useEffect, useState } from "react";
import { Card } from "@tremor/react";

/**
 * Fetching the weather data from the OpenWeatherMap API and displaying it in card components
 *
 * @return {*}
 */
function DashWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = "dd6e2d43d6883cdc5451370a909cd69a";
      const city = "Barrie,CA";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        setError(error.message);
        console.error("Failed to fetch weather data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <div>Loading weather data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  //returnig the structure of weather data
  return (
    <Card className="max-w-3xl" decoration="top">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-5 bg-red-500">
          <h2 className="flex justify-center items-center text-2xl font-bold  font-bold text-white">Weather API</h2>
        </div>
      <div className="p-6 bg-white">
        <div className="uppercase tracking-wide text-xl text-indigo-500 font-bold">Weather in {weather.name}</div>
        <div className="block mt-1 text-lg leading-tight font-bold text-black">Temperature: {Math.round(weather.main.temp - 273.15)}°C</div>
        <p className="mt-2 text-gray-500 text-lg">{weather.weather[0].main} ({weather.weather[0].description})</p>
        <p className="mt-2 text-gray-500 text-md">Visibility: {weather.visibility} meters</p>
      </div>
      </div>
    </Card>
  );
}

export default DashWeather;
