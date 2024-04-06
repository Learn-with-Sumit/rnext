import { getUsers } from "@/actions/user";

export default async function UserList() {
    const users = await getUsers();

    return (
        <div className="box-secondary mt-10">
            <h2 className="text-gray-800">User List</h2>

            {users?.length > 0 ? (
                <div className="box-2">
                    {users.map((user, index) => (
                        <p key={user.id}>
                            {index + 1}: {user.name} - {user.email}
                        </p>
                    ))}
                </div>
            ) : (
                <div className="box-1">No user found!</div>
            )}
        </div>
    );
}
