import { useRef } from "react";
import MyInput from "./MyInput";

export default function Form() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    return (
        <>
            <MyInput type="text" placeholder="Enter name" ref={inputRef} />
            <br />
            <br />
            <button onClick={handleClick}>Focus the input</button>
        </>
    );
}
