import React, { useDeferredValue, useMemo, useState } from "react";
import { animals } from "./fakeAnimals";

const ListAnimal = () => {
    const [name, setName] = useState("");
    const deferredName = useDeferredValue(name);
    const animalPark = useMemo(() => {
        return animals.filter((animal) => animal.name.includes(deferredName));
    }, [deferredName]);

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <>
            <input
                type="text"
                value={name}
                onChange={handleChange}
                className="border rounded border-slate-200 p-1 my-2 mx-2"
            />
            {animalPark.map((animal) => (
                <div key={animal.id} className="border bg-gray-100 p-2 m-2">
                    {animal.name}
                </div>
            ))}
        </>
    );
};

export default ListAnimal;
