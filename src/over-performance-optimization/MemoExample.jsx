import React, { useMemo } from "react";

const MyComponent = ({ data }) => {
    const expensiveCalculation = useMemo(() => {
        // Perform expensive computation based on data
        return data.reduce((acc, curr) => acc + curr, 0);
    }, [data]); // Recalculate when data changes

    return <div>{expensiveCalculation}</div>;
};
