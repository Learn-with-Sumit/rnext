import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
    const timeoutIdRef = useRef(null);

    useEffect(() => {
        return () => {
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current);
            }
        };
    }, []);

    const debouncedCallback = (...args) => {
        if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current);
        }

        timeoutIdRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    };
    return debouncedCallback;
};

export default useDebounce;