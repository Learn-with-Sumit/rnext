import { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";

export default function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [text, setText] = useState("");
    return (
        <>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? "Pause" : "Play"}
            </button>
            <VideoPlayer
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </>
    );
}
