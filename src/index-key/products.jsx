import React from "react";

const products = () => {
    const items = [
        { id: 1, name: "Shirt" },
        { id: 3, name: "Hat" },
        { id: 2, name: "Pant" },

    ];
    return (
        <ul>
            {items.map((item, index) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

export default products;
