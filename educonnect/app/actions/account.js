"use server"

import { User } from "@/model/user-model";
import { revalidatePath } from "next/cache";

export async function updateUserInfo(email, updatedData) {
    try {
        const filter = {email: email};
        await User.findOneAndUpdate(filter, updatedData);
        revalidatePath('/account');
    } catch(error) {
        throw new Error(error)
    }
}