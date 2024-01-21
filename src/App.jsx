import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { FavouriteProvider } from "./provider";

function App() {
    return (
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
    );
}

export default App;
