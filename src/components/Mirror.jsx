import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Mirror({ messageColor }) {
    const [color, setColor] = useState(messageColor);

    const handleChangeColor = () => {
        setColor("#1b1b1b");
    };

    return (
        <div>
            <div style={{ color }}>Hello world</div>

            <br />
            <button onClick={handleChangeColor}>Change color from child</button>
        </div>
    );
}
