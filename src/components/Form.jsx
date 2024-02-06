import useFormInput from "../hooks/useFormInput";

export default function Form() {
    const firstNameProps = useFormInput("Mary"); // value1
    const lastNameProps = useFormInput("Poppins"); // value 2

    return (
        <>
            <label>
                First name:
                <input {...firstNameProps} />
            </label>
            <br />
            <label>
                Last name:
                <input {...lastNameProps} />
            </label>
            <p>
                <b>
                    Good morning, {firstNameProps.value} {lastNameProps.value}.
                </b>
            </p>
        </>
    );
}
