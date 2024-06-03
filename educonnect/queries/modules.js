import { replaceMongoIdInObject } from "@/lib/convertData";
import { Module } from "@/model/module.model";
import { Lesson } from "@/model/lesson.model";

export async function create(moduleData) {
    try {
        const module = await Module.create(moduleData);
        return JSON.parse(JSON.stringify(module));
    } catch (e) {
        throw new Error(e)
    }
}

export async function getModule(moduleId) {
    try {
        const module = await Module.findById(moduleId).
        populate({
            path: "lessonIds",
            model: Lesson
        }).
        lean();
        return replaceMongoIdInObject(module);
    } catch (e) {
        throw new Error(e)
    }
}

export async function getModuleBySlug(moduleSlug) {
    try {
        const module = await Module.findOne({slug: moduleSlug}).lean();
        return replaceMongoIdInObject(module);
    } catch(err) {
        throw new Error(err);
    }
}