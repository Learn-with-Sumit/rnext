import React from "react";
import Parents from "./Parents";
const GrandParents = ({ secret }) => {
    return (
        <div className="border border-blue-400 p-2 rounded-sm">
            <h2 className="text-xl my-2">Grand Parents ↓</h2>
            <Parents secret={secret} />
        </div>
    );
};

export default GrandParents;
