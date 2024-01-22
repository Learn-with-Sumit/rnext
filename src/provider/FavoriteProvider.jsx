import { createContext } from "react";
import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavouriteProvider = ({ children }) => {
    const [favourites, setfavourites] = useLocalStorage("favourites", []);

    const addToFavourites = (latitude, longitude, location) => {
        setfavourites([
            ...favourites,
            { latitude: latitude, longitude: longitude, location: location },
        ]);
    };

    const removeFromFavourites = (location) => {
        const restfavourites = favourites.filter(
            (fav) => fav.location !== location
        );
        setfavourites(restfavourites);
    };

    return (
        <FavouriteContext.Provider
            value={{ addToFavourites, removeFromFavourites, favourites }}>
            {children}
        </FavouriteContext.Provider>
    );
};

export default FavouriteProvider;
