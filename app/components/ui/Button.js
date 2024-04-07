"use client";

import { useFormStatus } from "react-dom";

export default function Button() {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending} type="submit">
            {pending ? "Submitting" : "Submit"}
        </button>
    );
}
