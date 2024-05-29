"use server"

import { create } from "@/queries/modules";
import { Course } from "@/model/course-model";
import { Module } from "@/model/module.model";

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

export async function reOrderModules(data) {
    /*
    [
        { id: '66577a9b91726a7429e0b9a6', position: 0 },
        { id: '66577a4a91726a7429e0b994', position: 1 },
        { id: '66577a9091726a7429e0b99d', position: 2 }
    ]
    */

    try {
        console.log(data);

        await Promise.all(data.map(async (element) => {
                await Module.findByIdAndUpdate(element.id, {order: element.position});
         }));

        //
    } catch (e) {
        throw new Error(e);
    }
}