"use client";

import { Trash } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useState } from "react";

import { toast } from "sonner";

import { changeLessonPublishState, deleteLesson } from "@/app/actions/lesson";

export const LessonActions = ({ lesson, moduleId, onDelete }) => {
    const [action, setAction] = useState(null);
    const [published, setPublished] = useState(lesson?.active);

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(action);

        try {
            switch (action) {
                case "change-active": {
                    const activeState = await changeLessonPublishState(lesson.id);
                    setPublished(!activeState);
                    toast.success("The lesson has been updated");
                    break;
                }

                case "delete": {
                    if (published) {
                        toast.error("A published lesson can not be deleted. First unpublish it, then delete.")
                    } else {
                        await deleteLesson(lesson.id, moduleId);
                        onDelete();
                    }
                    break;
                }

                default: {
                    throw new Error("Invalid Lesson Action")
                }
            }

        } catch (e) {
            toast.error(e.message);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-x-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setAction("change-active")}
                >
                    {published ? "Unpublish" : "Publish"}
                </Button>

                <Button size="sm" onClick={() => setAction("delete")}>
                    <Trash className="h-4 w-4" />
                </Button>
            </div>
        </form>
    );
};
