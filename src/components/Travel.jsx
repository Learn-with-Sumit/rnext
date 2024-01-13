import { useState } from "react";

const initialItems = [
    { title: "pretzels", id: 0 },
    { title: "crispy seaweed", id: 1 },
    { title: "granola bar", id: 2 },
];

export default function Travel() {
    const [items, setItems] = useState(initialItems);
    const [selectedItem, setSelectedItem] = useState(items[0]);

    return (
        <>
            <h2>Whats your travel snack?</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.title}{" "}
                        <button
                            onClick={() => {
                                setSelectedItem(item);
                            }}
                        >
                            Choose
                        </button>
                    </li>
                ))}
            </ul>
            <p>You picked {selectedItem.title}.</p>
        </>
    );
}
