import { useState, useReducer } from "react";
import Page from "./Page";
import { MovieContext, ThemeContext } from "./context";
import { initialState, cartReducer } from "./reducers/CartReducer";

function App() {
    const [cartData, setCartData] = useState([]);
    const [darkMode, setDarkMode] = useState(true);
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return (
        <>
            <ThemeContext.Provider value={{darkMode, setDarkMode}}>
                <MovieContext.Provider value={{ state, dispatch }}>
                    <Page />
                </MovieContext.Provider>
            </ThemeContext.Provider>
        </>
    );
}

export default App;
