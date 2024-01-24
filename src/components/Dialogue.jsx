import { useEffect, useRef } from "react";

export default function Dialogue() {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        dialog.showModal();

        // cleanup is mandatory
        return () => dialog.close();
    }, []);

    return <dialog ref={dialogRef}>This is an open dialog window</dialog>;
}
