import { useState } from "react";
import ChatRoom from "./components/ChatRoom";

export default function App() {
    const [roomId, setRoomId] = useState("general");

    return (
        <>
            <label>
                Choose the chat room:{" "}
                <select
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                >
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                </select>
            </label>
            <hr />
            <ChatRoom roomId={roomId} />
        </>
    );
}
