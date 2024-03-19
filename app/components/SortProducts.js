"use client";

import { useSearchParams } from "next/navigation";

export default function SortProducts() {
    const searchParams = useSearchParams();

    function updateSorting(sortOrder) {
        const params = new URLSearchParams(searchParams.toString());
        params.set("sort", sortOrder);
        window.history.pushState(null, "", `?${params.toString()}`);
    }

    return (
        <div className="flex gap-5">
            <button onClick={() => updateSorting("asc")}>Sort Ascending</button>
            <button onClick={() => updateSorting("desc")}>
                Sort Descending
            </button>
        </div>
    );
}
