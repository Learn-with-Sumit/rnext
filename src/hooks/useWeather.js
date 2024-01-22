import { useContext, useEffect, useState } from "react";

import { LocationContext } from "../context";

const useWeather = (lat, long) => {
    const [weatherData, setWeatherData] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: "",
    });

    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });
    const [error, setError] = useState(null);

    const { selectedLocation } = useContext(LocationContext);

    const fetchWeatherData = async (latitude, longitude) => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: "Fetching Weather Data....",
            });
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${
                    import.meta.env.VITE_WEATHER_API_KEY
                }`
            );
            if (!response.ok) {
                const errorMessage = `An error occurred while fetching weather data: ${response.status}`;
                throw new Error(errorMessage);
            }
            const data = await response.json();
            // const data = getFakeAPIData();
            const updatedWeatherData = {
                ...weatherData,
                location: data?.name,
                climate: data?.weather[0]?.main,
                temperature: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                longitude: longitude,
                latitude: latitude,
            };
            setWeatherData(updatedWeatherData);
        } catch (err) {
            console.error(err);
            setError(err);
        } finally {
            setLoading({ ...loading, state: false, message: "" });
        }
    };

    useEffect(() => {
        console.log(selectedLocation);

        setLoading({
            ...loading,
            state: true,
            message: "Finding Location....",
        });
        if (selectedLocation.latitude && selectedLocation.longitude) {
            fetchWeatherData(
                selectedLocation.latitude,
                selectedLocation.longitude
            );
        } else {
            navigator.geolocation.getCurrentPosition(function (position) {
                fetchWeatherData(
                    position.coords.latitude,
                    position.coords.longitude
                );
            });
        }
    }, [selectedLocation.latitude, selectedLocation.longitude]);

    return {
        weatherData,
        error,
        loading,
    };
};

export default useWeather;
