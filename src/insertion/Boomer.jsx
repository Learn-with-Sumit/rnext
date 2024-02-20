import React, { useState, useInsertionEffect, useEffect } from "react";

const Boomer = () => {
    const [color, setColor] = useState("blue");
    const dynamicStyle = `
        .dynamic-style {
            color: ${color}
        }
    `;

    useEffect(() => {
        console.log("useEffect")
    }, [])

    useInsertionEffect(() => {
        console.log("useInsertionEffect")
        const styleEle = document.createElement("style");
        styleEle.innerHTML = dynamicStyle;
        document.head.appendChild(styleEle);
        return () => {
            document.head.removeChild(styleEle);
        };
    }, [color]);

    const changeColor = () => {
        setColor("red");
    };
    return (
        <div className="m-2">
            <h1 className="dynamic-style">Text</h1>
            <button
                onClick={changeColor}
                className="bg-black text-white p-1 rounded">
                    Change
            </button>
        </div>
    );
};

export default Boomer;
