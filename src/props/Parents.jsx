import React from "react";
import Childrens from "./Childrens";
const Parents = ({ secret }) => {
    return (
        <div className="border border-pink-400 p-2 rounded-sm">
            <h2 className="text-xl my-2">Parents ↓</h2>
            <Childrens secret={secret} />
        </div>
    );
};

export default Parents;
