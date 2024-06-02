"use server"

import { Quizset } from "@/model/quizset-model"

export async function updateQuizSet(quizset, dataToUpdate) {
    try {
        await Quizset.findByIdAndUpdate(quizset, dataToUpdate);
    } catch(e) {
        throw new Error(e);
    }
}