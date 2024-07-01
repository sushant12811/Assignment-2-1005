import { useEffect, useState } from "react";
import {
    Card
} from "@tremor/react";



/**
 *Fetching the weather data from the openweathermap API and displaying it in card components
 *
 * @return {*} 
 */
function DashWeather() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const apiKey = "dd6e2d43d6883cdc5451370a909cd69a";
            const city = "Barrie,CA"; 
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                console.error("Failed to fetch weather data", error);
            }
        };

        fetchWeather();
    }, []);
    console.log("The weather data::>>", weather, !!weather);

    return (
        <Card className="max-w-3xl" decoration="top" decorationColor="red" >
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="px-4 py-5 bg-red-500">
        <h2 className="text-xl font-bold text-white">Weather API</h2>
    </div>
    {weather ? (
                <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Weather in {weather.name}</div>
                <div className="block mt-1 text-lg leading-tight font-medium text-black">Temperature: {Math.round(weather.main.temp - 273.15)}°C</div>
                <p className="mt-2 text-gray-500">{weather.weather[0].main} ({weather.weather[0].description})</p>
              </div>
            ) : (
                <div className='p-8'>Loading weather...</div>
            )}
    </div>        
        </Card>
    );
}

export default DashWeather;
