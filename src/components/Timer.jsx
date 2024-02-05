import { useEffect, useState } from "react";

export default function Timer() {
    const [count, setCount] = useState(0);
    const [increment, setIncrement] = useState(1);

    const onTick = () => {
        setCount(count + increment);
    };

    useEffect(() => {
        console.log("hello");
        const timerId = setInterval(onTick, 1000);

        return () => clearInterval(timerId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h1>
                Counter: {count}
                <button onClick={() => setCount(0)}>Reset</button>
            </h1>
            <hr />
            <p>
                Every second, increment by:
                <button
                    disabled={increment === 0}
                    onClick={() => setIncrement((i) => i - 1)}
                >
                    –
                </button>
                <b>{increment}</b>
                <button onClick={() => setIncrement((i) => i + 1)}>+</button>
            </p>
        </>
    );
}
