import { useState, useReducer } from "react";
import Page from "./Page";
import { MovieContext, ThemeContext } from "./context";
import { initialState, cartReducer } from "./reducers/CartReducer";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return (
        <>
            <ThemeContext.Provider value={{darkMode, setDarkMode}}>
                <MovieContext.Provider value={{ state, dispatch }}>
                    <Page />
                    <ToastContainer/>
                </MovieContext.Provider>
            </ThemeContext.Provider>
        </>
    );
}

export default App;
