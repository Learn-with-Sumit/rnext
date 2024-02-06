import { useEffect, useState } from "react";

export default function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(true);

    function handleOnline() {
        setIsOnline(true);
    }
    function handleOffline() {
        setIsOnline(false);
    }

    useEffect(() => {
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return isOnline;
}
