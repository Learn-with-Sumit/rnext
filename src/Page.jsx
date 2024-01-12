import { useContext } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MovieList from "./cine/MovieList";
import Footer from "./Footer";

import { ThemeContext } from "./context";

export default function Page() {
    const {darkMode} = useContext(ThemeContext);
    console.log(darkMode);
    return (
        <div className={`h-screen w-full ${darkMode ? "dark" : ""}`}>
            <Header />
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <Sidebar />
                    <MovieList />
                </div>
            </main>
            <Footer />
        </div>
    );
}
