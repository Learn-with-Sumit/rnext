import {
    useEffect,
    experimental_useEffectEvent as useEffectEvent,
    useState,
} from "react";

export default function Pointer() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });
    const [canMove, setCanMove] = useState(true);

    const onMove = useEffectEvent((e) => {
        if (canMove) {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        }
    });

    useEffect(() => {
        window.addEventListener("pointermove", onMove);

        return () => window.removeEventListener("pointermove", onMove);
    }, []);

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={canMove}
                    onChange={(e) => setCanMove(e.target.checked)}
                />
                The dot is allowed to move
            </label>
            <hr />
            <div
                style={{
                    position: "absolute",
                    backgroundColor: "pink",
                    borderRadius: "50%",
                    opacity: 0.6,
                    pointerEvents: "none",
                    left: -20,
                    top: -20,
                    width: 40,
                    height: 40,
                    transform: `translate(${position.x}px,${position.y}px)`,
                }}
            />
        </>
    );
}
