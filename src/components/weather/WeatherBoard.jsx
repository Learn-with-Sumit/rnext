import React from "react";

import AddToFavourite from "./AddToFavourite";
import WeatherCondition from "./WeatherCondition";
import WeatherHeadline from "./WeatherHeadline";

import { useWeather } from "../../hooks";

function WeatherBoard() {
    const { weatherData, error, loading } = useWeather();
    console.log(loading, error, weatherData);
    return (
        <>
            <div className="container">
                <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
                    <div className="grid md:grid-cols-2 gap-10 md:gap-6">
                        {loading.state ? (
                            <div>
                                <p>{loading.message}</p>
                            </div>
                        ) : (
                            <>
                                <AddToFavourite
                                    latitude={weatherData.latitude}
                                    longitude={weatherData.longitude}
                                    location={weatherData.location}
                                />

                                <WeatherHeadline
                                    climate={weatherData.climate}
                                    location={weatherData.location}
                                    temperature={weatherData.temperature}
                                    time={weatherData.time}
                                />

                                <WeatherCondition {...weatherData} />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default WeatherBoard;
