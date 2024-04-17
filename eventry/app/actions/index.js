"use server";

import { revalidatePath } from 'next/cache'
import { createUser, findUserByCredentials, updateInterest } from "@/db/queries";
import { redirect } from "next/navigation";

async function registerUser(formData) {
    const user = Object.fromEntries(formData);
    const created = await createUser(user);
    redirect("/login");
}

async function performLogin(formData) {
    try {
        const credential = {};
        credential.email = formData.get("email");
        credential.password = formData.get("password");
        const found = await findUserByCredentials(credential);
        return found;
    } catch (error) {
        throw error;
    }
}

async function addInterestedEvent(eventId, authId) {
    try {
        await updateInterest(eventId, authId);
    } catch(error) {
        throw error;
    }
    revalidatePath('/');
}

export { registerUser, performLogin, addInterestedEvent };
