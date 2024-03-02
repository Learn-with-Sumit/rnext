import React from "react";
import GrandParents from "./GrandParents";
const Family = () => {
    const familySecret = { message: "The treasure is under the bed!" };
    return (
        <div className="border border-red-400 p-2 rounded-sm">
            <h2 className="text-xl my-2">Family ↓</h2>
            <GrandParents secret={familySecret} />
        </div>
    );
};

export default Family;
