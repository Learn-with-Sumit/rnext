import { useState } from "react";
import ChatRoom from "./components/ChatRoom";
import { SettingsContext } from "./contexts/settings";

export default function App() {
    const [roomId, setRoomId] = useState("general");
    const [showChat, setShowChat] = useState(true);
    const [serverUrl, setServerUrl] = useState(null);

    const handleRoomChange = (e) => {
        setRoomId(e.target.value);
    };

    const handleServerChange = (e) => {
        setServerUrl(e.target.value);
    };

    return (
        <div>
            {/* <div>
                <input
                    type="text"
                    value={serverUrl}
                    onChange={(e) => setServerUrl(e.target.value)}
                />
            </div> */}

            <div>
                Select Server:{" "}
                <select onChange={handleServerChange}>
                    <option value="http://localhost:1234">Server 1</option>
                    <option value="http://localhost:12345">Server 2</option>
                    <option value="http://localhost:12346">Server 3</option>
                </select>
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

                    <SettingsContext.Provider
                        value={{
                            defaultServerUrl: "https://localhost:1000",
                        }}
                    >
                        <ChatRoom
                            roomId={roomId}
                            selectedServerUrl={serverUrl}
                        />
                    </SettingsContext.Provider>
                </>
            )}
        </div>
    );
}
