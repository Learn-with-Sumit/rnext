import User from "@/app/components/users/User";
import connectMongo from "@/dbConnect/connectMongo";
import { cache } from "react";

export const getUserByEmail = cache(async (email) => {
    console.log("I am in");
    try {
        await connectMongo();

        // get users
        const user = await User.findOne({
            email,
        });

        return user;
    } catch (err) {
        console.log(err);
    }
});
