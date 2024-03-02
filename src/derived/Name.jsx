import { useState } from "react";

const Name = () => {
    const [firstName, setFirstName] = useState("Tapas");
    const [lastName, setLastName] = useState("Adhikary");

    const getFullName = () => {
        return `${firstName} ${lastName}`
    };

    return (
        <div>
            {getFullName()}
        </div>
    );
};

export default Name;
