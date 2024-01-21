import { useRef, useState } from "react";

export default function Stopwatch() {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    let intervalRef = useRef(null);

    const handleStart = () => {
        setStartTime(Date.now());
        setNow(Date.now());

        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    };

    const handleStop = () => {
        clearInterval(intervalRef.current);
    };

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <>
            <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    );
}
