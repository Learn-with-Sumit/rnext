import React from "react";

const GrandChildren = ({ secret }) => {
    return (
        <div className="border border-pink-400 p-2 rounded-sm">
            <h2 className="text-xl my-2">Grand Children</h2>
            <p className="text-2xl my-2">
                {" "}
                We know the secret: <strong>{secret.message}</strong>
            </p>
            <button className="p-1 bg-black text-white rounded-md">
                Let's Change It!
            </button>
        </div>
    );
};

export default GrandChildren;
