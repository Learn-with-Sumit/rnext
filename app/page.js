import NewUserForm from "./components/users/NewUserForm";
import User from "./components/users/User";
import UserList from "./components/users/UserList";

export default async function Home() {
    return (
        <div className="py-8">
            <h1 className="text-gray-800">USER REGISTRATION</h1>
            <NewUserForm />
            <User />
            <UserList />
            <User />
        </div>
    );
}
