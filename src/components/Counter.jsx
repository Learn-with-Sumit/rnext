import { useState } from "react";

export default function Counter({ person }) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = "counter";
    if (hover) {
        className += " hover";
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>
                {person}s score: {score}
            </h1>
            <button onClick={() => setScore(score + 1)}>Add one</button>
        </div>
    );
}
