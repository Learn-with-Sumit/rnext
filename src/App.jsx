// import Example1 from "./components/Example1";
import { useState } from "react";
// import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import { items1, items2 } from "./data/itemsData";

export default function App() {
    // example 2
    // const [userId, setUserId] = useState(1);

    // example3
    const [items, setItems] = useState(items1);

    return (
        <div>
            {/* Example 1: Updating state based on props or state */}
            {/* <Example1 /> */}
            {/* Example 2: Resetting all state when a prop changes */}
            {/* <div>
                <button onClick={() => setUserId(userId === 1 ? 2 : 1)}>
                    Switch to Profile No. {userId === 1 ? 2 : 1}
                </button>
            </div>
            <Example2 key={userId} userId={userId} /> */}
            {/* Example 3: Adjusting some state when a prop change */}
            <button onClick={() => setItems(items2)}>
                Switch to Items2
            </button>{" "}
            <button onClick={() => setItems(items1)}>Switch to Items1</button>
            <Example3 items={items} />
        </div>
    );
}
