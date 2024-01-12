import { useState } from "react";
import Page from "./Page";
import { MovieContext } from "./context";

function App() {
    const [cartData, setCartData] = useState([]);
    return (
        <>
            <MovieContext.Provider value={{ cartData, setCartData }}>
                <Page />
            </MovieContext.Provider>
        </>
    );
}

export default App;
