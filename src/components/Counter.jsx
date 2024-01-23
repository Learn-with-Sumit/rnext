import { useRef, useState } from "react";

export default function Counter() {
    const [show, setShow] = useState(true);
    const ref = useRef(null);

    return (
        <div>
            <button
                onClick={() => {
                    setShow(!show);
                }}
            >
                Toggle with setState
            </button>
            <button
                onClick={() => {
                    ref.current.remove();
                }}
            >
                Remove from the DOM
            </button>
            {show && <p>Hello world</p>}

            <div ref={ref}></div>
        </div>
    );
}
