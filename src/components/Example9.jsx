import { useOnlineStatus } from "../hooks/useOnlineStatus";

export default function Example9() {
    const isOnline = useOnlineStatus();

    return (
        <div>
            <div>I am {isOnline ? "Online" : "Offline"}</div>
        </div>
    );
}
