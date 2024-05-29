"use server"

import { create } from "@/queries/modules";
import { Course } from "@/model/course-model";

export async function createModule(data) {
    try {
        const title = data.get("title");
        const slug = data.get("slug");
        const courseId = data.get("courseId");
        const order = data.get("order");

        const createdModule = await create({title, slug, course: courseId, order});

        const course = await Course.findById(courseId);
        course.modules.push(createdModule._id);
        course.save();

        return createdModule;
    } catch (e) {
        throw new Error(e);
    }
}