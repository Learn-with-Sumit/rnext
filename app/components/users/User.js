import { getUserByEmail } from "@/utils/getUserByEmail";

export default async function User() {
    const user = await getUserByEmail("saad@learnwithsumit.com");

    return <div className="box-3 text-xl text-slate-800">{user.name}</div>;
}
