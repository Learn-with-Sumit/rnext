import React, { useCallback } from "react";

const MyComponent = ({ onClick }) => {
    const handleClick = useCallback(() => {
        // Handle click event
        onClick();
    }, [onClick]); // Recreate callback only if onClick changes

    return <button onClick={handleClick}>Click me</button>;
};
