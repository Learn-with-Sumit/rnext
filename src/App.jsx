import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { FavouriteProvider, LocationProvider } from "./provider";

function App() {
    return (
        <LocationProvider>
            <FavouriteProvider>
                <div className="bg-[url('./assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center">
                    <Header />
                    <main>
                        <section>
                            <WeatherBoard />
                        </section>
                    </main>
                </div>
            </FavouriteProvider>
        </LocationProvider>
    );
}

export default App;
