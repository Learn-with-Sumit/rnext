import { useContext } from "react";
import { WeatherContext } from "./context";

import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

export default function Page() {
    const { weatherData, error, loading } = useContext(WeatherContext);
    function getBackgroundImage(climate) {
        switch (climate) {
            case "Rain":
                return "rainy-day.jpg";
            case "Clouds":
                return "scattered-clouds.jpg";
            case "Clear":
                return "clear-sky.jpg";
            case "Snow":
                return "snow.jpg";
            case "Thunder":
                return "thunderstorm.jpg";
            case "Fog":
                return "winter.jpg";
            case "Haze":
                return "few-clouds.jpg";
            case "Mist":
                return "winter.jpg";
            default:
                return "clear-sky.jpg";
        }
    }
    return (
        <>
            {loading.state ? (
                <div>
                    <p>{loading.message}</p>
                </div>
            ) : (
                <div
                    className={`bg-[url('./assets/backgrounds/${getBackgroundImage(
                        weatherData.climate
                    )}')] bg-no-repeat bg-cover h-screen grid place-items-center`}
                >
                    <Header />
                    <main>
                        <section>
                            <WeatherBoard />
                        </section>
                    </main>
                </div>
            )}
        </>
    );
}
