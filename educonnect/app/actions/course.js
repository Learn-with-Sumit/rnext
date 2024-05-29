"use server"

import { create } from "@/queries/courses";
import { getLoggedInUser } from "@/lib/loggedin-user";

import { Course } from "@/model/course-model";

export async function createCourse(data) {
    try{
        const loggedinUser = await getLoggedInUser();
        data["instructor"] = loggedinUser?.id
        const course = await create(data);
        return course;
    } catch(e){
        throw new Error(e);
    }
}

export async function updateCourse(courseId, dataToUpdate) {
    try {
        await Course.findByIdAndUpdate(courseId, dataToUpdate);
    } catch(e){
        throw new Error(e);
    }
}