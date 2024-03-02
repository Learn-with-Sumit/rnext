import React from "react";
import GrandChildren from "./GrandChildren";

const Childrens = ({ secret }) => {
    return (
        <div className="border border-orange-400 p-2 rounded-sm">
            <h2 className="text-xl my-2">Children ↓</h2>
            <GrandChildren secret={secret} />
        </div>
    );
};

export default Childrens;
