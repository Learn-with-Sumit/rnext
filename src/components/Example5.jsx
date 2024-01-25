import { useEffect, useState } from "react";

export default function Example2() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    // ✅ Good: This logic should run because the component was displayed
    useEffect(() => {
        post("/analytics/event", { eventName: "visit_form" });
    }, []);

    // 🔴 Avoid: Event-specific logic inside an Effect
    // const [jsonToSubmit, setJsonToSubmit] = useState(null);
    // useEffect(() => {
    //     if (jsonToSubmit !== null) {
    //         post("/api/register", jsonToSubmit);
    //     }
    // }, [jsonToSubmit]);

    function handleSubmit(e) {
        e.preventDefault();
        // setJsonToSubmit({ firstName, lastName });
        // ✅ Good: Event-specific logic is in the event handler
        post("/api/register", { firstName, lastName });
    }

    function post(url, data) {
        console.log(`Posted to url ${url} with data ${JSON.stringify(data)}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </p>

                <p>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </p>

                <p>
                    <button type="submit">Submit</button>
                </p>
            </form>
        </div>
    );
}
