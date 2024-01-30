import { useState } from "react";
import ChatRoom from "./components/ChatRoom";

export default function App() {
    const [roomId, setRoomId] = useState("general");
    const [showChat, setShowChat] = useState(true);
    const [serverUrl, setServerUrl] = useState("https://localhost:1234");

    const handleRoomChange = (e) => {
        setRoomId(e.target.value);
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={serverUrl}
                    onChange={(e) => setServerUrl(e.target.value)}
                />
            </div>
            <div>
                <button onClick={() => setShowChat((s) => !s)}>
                    {showChat ? "Hide Chat Room" : "Show Chat Room"}
                </button>
            </div>
            {showChat && (
                <>
                    <hr />
                    <div>
                        Select Chat Room:{" "}
                        <select onChange={handleRoomChange}>
                            <option value="general">General</option>
                            <option value="travel">Travel</option>
                            <option value="music">Music</option>
                        </select>
                    </div>

                    <ChatRoom roomId={roomId} serverUrl={serverUrl} />
                </>
            )}
        </div>
    );
}
