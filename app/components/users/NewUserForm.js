import { addUser } from "@/actions/user";

export default function NewUserForm() {
    return (
        <form action={addUser}>
            <div>
                <input type="text" name="name" placeholder="Name" />
            </div>
            <div>
                <input type="email" name="email" placeholder="Email" />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}
