"use server";

import connectMongo from "@/dbConnect/connectMongo";
import User from "@/models/User";
import wait from "@/utils/wait";
import { revalidatePath } from "next/cache";

export const addUser = async (formData) => {
    const name = formData.get("name");
    const email = formData.get("email");

    const userData = {
        name,
        email,
    };

    try {
        await connectMongo();

        // add delay
        await wait(3000);

        // insert into database
        await new User(userData).save();

        // revalidate users
        revalidatePath("/");
    } catch (err) {
        console.log(err);
    }
};

export const getUsers = async () => {
    try {
        await connectMongo();

        // get users
        const users = await User.find();

        return users;
    } catch (err) {
        console.log(err);
    }
};
