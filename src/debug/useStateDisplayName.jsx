import { useDebugValue, useState } from "react";

export function useStateDisplayName(initialValue, displayName) {
    const [value, setValue] = useState(initialValue);
    useDebugValue(`${displayName} for ${initialValue}`);
    return [value, setValue];
}
