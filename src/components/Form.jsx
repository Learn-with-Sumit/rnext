// eslint-disable-next-line react/prop-types
export default function Form({ status = "empty" }) {
    // visual states: empty, typing, submitting, success, error

    if (status === "success")
        return (
            <>
                <h1>Thats right!</h1>
                <hr />
            </>
        );

    return (
        <>
            <h2>City quiz</h2>
            <p>What city is located on two continents?</p>
            <form id="form">
                <textarea disabled={status === "submitting"}></textarea>
                <br />
                <button
                    disabled={status === "empty" || status === "submitting"}
                >
                    Submit
                </button>
                {status === "submitting" && <p>Loading...</p>}
                {status === "error" && (
                    <p className="Error">There was an error</p>
                )}
            </form>
            <hr />
        </>
    );
}
