import { useEffect, useRef } from "react";

export default function Animation() {
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        node.style.opacity = 1; // Trigger the animation

        return () => {
            node.style.opacity = 0; // Reset to the initial value
        };
    }, []);

    return <div ref={ref}>Here is an animation </div>;
}
