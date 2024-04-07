import { addUser } from "@/actions/user";
import Button from "../ui/Button";

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
                <Button />
            </div>
        </form>
    );
}
