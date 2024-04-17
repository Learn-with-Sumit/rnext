import connectMongo from "@/dbConnect/connectMongo";
import User from "@/models/User";
import { cache } from "react";

export const getUserByEmail = cache(async (email) => {
    console.log("I am pulling from database");
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
