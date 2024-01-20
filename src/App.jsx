import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

function App() {
    return (
        <div className="bg-[url('./assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center">
            <Header />
            <main>
                <section>
                    <WeatherBoard />
                </section>
            </main>
        </div>
    );
}

export default App;
