import { useState } from "react";
import Page from "./Page";
import { MovieContext, ThemeContext } from "./context";

function App() {
    const [cartData, setCartData] = useState([]);
    const [darkMode, setDarkMode] = useState(true);

    return (
        <>
            <ThemeContext.Provider value={{darkMode, setDarkMode}}>
                <MovieContext.Provider value={{ cartData, setCartData }}>
                    <Page />
                </MovieContext.Provider>
            </ThemeContext.Provider>
        </>
    );
}

export default App;
