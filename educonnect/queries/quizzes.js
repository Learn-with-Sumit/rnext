import { Quizset } from "@/model/quizset-model";
import { Quiz } from "@/model/quizzes-model";

import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";

export async function getAllQuizSets() {
    try {
        const quizSets = await Quizset.find().lean();
          return replaceMongoIdInArray(quizSets);
    } catch (e) {
        throw new Error(e);
    }
}

export async function getQuizSetById(id) {
    try {
        const quizSet = await Quizset.findById(id)
            .populate({
                path: "quizIds",
                model: Quiz,
          }).lean();
          return replaceMongoIdInObject(quizSet);
    } catch (e) {
        throw new Error(e);
    }
}