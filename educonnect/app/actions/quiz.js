"use server";

import { Quizset } from "@/model/quizset-model";
import { getSlug } from "@/lib/convertData";
import { createQuiz } from "@/queries/quizzes";
import { replaceMongoIdInArray } from "@/lib/convertData";
import { getQuizSetById } from "@/queries/quizzes";
import mongoose from "mongoose";
import { Assessment } from "@/model/assessment-model";
import { getLoggedInUser } from "@/lib/loggedin-user";
import { createAssessmentReport } from "@/queries/reports";

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

export async function addQuizAssessment(courseId, quizSetId, answers) {
    try {
      console.log(quizSetId, answers);
      const quizSet = await getQuizSetById(quizSetId);
      const quizzes = replaceMongoIdInArray(quizSet.quizIds);

      const assessmentRecord = quizzes.map((quiz) => {
        const obj = {};
        obj.quizId = new mongoose.Types.ObjectId(quiz.id);
        const found = answers.find((a) => a.quizId === quiz.id);
        if (found) {
          obj.attmpted = true;
        } else {
          obj.attmpted = false;
        }
        const mergedOptions = quiz.options.map((o) => {
          return {
            option: o.text,
            isCorrect: o.is_correct,
            isSelected: (function () {
              const found = answers.find((a) => a.options[0].option === o.text);
              if (found) {
                return true;
              } else {
                return false;
              }
            })(),
          };
        });
        obj["options"] = mergedOptions;
        return obj;
      });

      const assessmentEntry = {};
      assessmentEntry.assessments = assessmentRecord;
      assessmentEntry.otherMarks = 0;

      const assessment = await Assessment.create(assessmentEntry);
      const loggedInUser = await getLoggedInUser();

      await createAssessmentReport({courseId: courseId, userId: loggedInUser.id, quizAssessment: assessment?._id})

    } catch (err) {
      throw new Error(err);
    }
  }
