import { useState } from "react";
import ColorDemo from "./components/ColorDemo";
import ShapeDemo from "./components/ShapeDemo";
import SizeDemo from "./components/SizeDemo";

export default function App() {
    const [selectedDemo, setSelectedDemo] = useState(null);

    const selectDemo = (type) => {
        setSelectedDemo(type);
    };

    return (
        <div>
            <div>
                <h1>React Lazy load explained</h1>

                <div>
                    <button onClick={() => selectDemo("shape")}>
                        Shape Demo
                    </button>
                    <button onClick={() => selectDemo("color")}>
                        Color Demo
                    </button>
                    <button onClick={() => selectDemo("size")}>
                        Size Demo
                    </button>
                </div>

                <div>
                    {selectedDemo === "shape" && <ShapeDemo />}
                    {selectedDemo === "color" && <ColorDemo />}
                    {selectedDemo === "size" && <SizeDemo />}
                </div>
            </div>
        </div>
    );
}
