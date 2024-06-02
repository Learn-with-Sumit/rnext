"use server";

import { Quizset } from "@/model/quizset-model";
import { getSlug } from "@/lib/convertData";
import { createQuiz } from "@/queries/quizzes";

export async function updateQuizSet(quizset, dataToUpdate) {
    try {
        await Quizset.findByIdAndUpdate(quizset, dataToUpdate);
    } catch (e) {
        throw new Error(e);
    }
}

export async function addQuizToQuizSet(quizSetId, quizData) {
    try {
        console.log(quizSetId, quizData);

        const transformedQuizData = {};

        transformedQuizData["title"] = quizData["title"];
        transformedQuizData["description"] = quizData["description"];
        transformedQuizData["slug"] = getSlug(quizData["title"]);
        transformedQuizData["options"] = [
            {
                text: quizData.optionA.label,
                is_correct: quizData.optionA.isTrue,
            },
            {
                text: quizData.optionB.label,
                is_correct: quizData.optionB.isTrue,
            },
            {
                text: quizData.optionC.label,
                is_correct: quizData.optionC.isTrue,
            },
            {
                text: quizData.optionD.label,
                is_correct: quizData.optionD.isTrue,
            },
        ];

        console.log(transformedQuizData);
        const createdQuizId = await createQuiz(transformedQuizData);
        console.log(createdQuizId);

        const quizSet = await Quizset.findById(quizSetId);
        quizSet.quizIds.push(createdQuizId);
        quizSet.save();
    } catch (e) {
        throw new Error(e);
    }
}

export async function doCreateQuizSet(data) {
    try {
        data['slug'] = getSlug(data.tite);
        const craetedQuizSet = await Quizset.create(data);
        return craetedQuizSet?._id.toString();
    } catch (e) {
        throw new Error(e);
    }
}
