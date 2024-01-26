import { useState } from "react";
import useData from "../hooks/useData";

export default function SearchResults() {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const results = useData(query, page);

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <hr />
            <div>
                <ul
                    style={{
                        display: "flex",
                        gap: "10px",
                        listStyleType: "none",
                    }}
                >
                    <li>
                        <button onClick={() => setPage(1)}>1</button>
                    </li>
                    <li>
                        <button onClick={() => setPage(2)}>2</button>
                    </li>
                    <li>
                        <button onClick={() => setPage(3)}>3</button>
                    </li>
                    <li>
                        <button onClick={() => setPage(4)}>4</button>
                    </li>
                </ul>
            </div>
            <hr />
            {results}
        </div>
    );
}
