import { useContext, useState } from "react";
import SearchIcon from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";
import { useDebounce } from "../../hooks";

export default function Search() {
    const { setSelectedLocation } = useContext(LocationContext);
    const [searchTerm, setSearchTerm] = useState("");

    const doSearch = useDebounce((term) => {
        // Perform search operation with the debounced term
        console.log("Searching for:", term);
        const fetchedLocation = getLocationByName(term);
        setSelectedLocation(fetchedLocation);
    }, 500);

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchTerm(value);

        doSearch(value);
    };

    return (
        <form action="#">
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input
                    className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search"
                    placeholder="Search Location"
                    onChange={handleChange}
                    required
                />
                <button type="submit">
                    <img src={SearchIcon} alt="Search" />
                </button>
            </div>
        </form>
    );
}
