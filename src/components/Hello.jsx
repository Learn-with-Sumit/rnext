import { useRef } from "react";
import useFadeInAnimation from "../hooks/useFadeInAnimation";

export default function Hello() {
    const ref = useRef(null);

    useFadeInAnimation(ref, 3000);

    return (
        <div className="welcome" ref={ref}>
            Hello
        </div>
    );
}
