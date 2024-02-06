import {
    useEffect,
    experimental_useEffectEvent as useEffectEvent,
} from "react";
import { createConnection } from "../utils/chat";

export function useChatRoom({ serverUrl, roomId, onReceiveMessage }) {
    const onMessage = useEffectEvent(onReceiveMessage);

    useEffect(() => {
        const options = {
            serverUrl: serverUrl,
            roomId: roomId,
        };
        const connection = createConnection(options);
        connection.connect();
        connection.on("message", onMessage);
        return () => connection.disconnect();
    }, [roomId, serverUrl]);
}
