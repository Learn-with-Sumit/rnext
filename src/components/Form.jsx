import { useState } from "react";

function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (answer.toLowerCase() === "dhaka") {
                resolve();
            } else {
                reject(new Error("Good guess but a wrong answer. Try again!"));
            }
        }, 3000);
    });
}

// eslint-disable-next-line react/prop-types
export default function Form() {
    // visual states: typing, submitting, success

    // mandatory data state
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState(null);

    // visual state theke paoa final state
    const [status, setStatus] = useState("typing");

    if (status === "success") return <h1>Thats right!</h1>;

    // handlers
    const handleTextChange = (e) => {
        setError(null);
        setAnswer(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            await submitForm(answer);
            setStatus("success");
        } catch (err) {
            setStatus("typing");
            setError(err.message);
        }
    };

    return (
        <>
            <h2>City quiz</h2>
            <p>What city is located on two continents?</p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextChange}
                    disabled={status === "submitting"}
                ></textarea>
                <br />
                <button disabled={answer === "" || status === "submitting"}>
                    Submit
                </button>
                {status === "submitting" && <p>Loading...</p>}

                {error && <p className="Error">{error}</p>}
            </form>
        </>
    );
}
