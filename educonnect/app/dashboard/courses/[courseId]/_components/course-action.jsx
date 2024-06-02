"use client";

import { Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";

import { changeCoursePublishState, deleteCourse } from "@/app/actions/course";

import { toast } from "sonner";

import { useRouter } from "next/navigation";

export const CourseActions = ({ courseId, isActive }) => {
  const router = useRouter();
  const [action, setAction] = useState(null);
  const [published, setPublished] = useState(isActive);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      switch (action) {

        case "change-active": {
          const activeState = await changeCoursePublishState(courseId);
          setPublished(!activeState);
          toast.success("The course has been updated successfully.");
          router.refresh();
          break;
        }

        case "delete":  {
          if (published) {
            toast.error("A published course can not be deleted. First unpublish it, then delete.")
          } else {
            await deleteCourse(courseId);
            toast.success("The course has been deleted successfully");
            router.push(`/dashboard/courses/`);
          }

          break;
        }


        default: {
          throw new Error("Invalid Course Action");
        }
      }

    } catch (e) {
      toast.error(e.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-x-2">
        <Button variant="outline" size="sm" onClick={() => setAction("change-active")}>
          {published ? "Unpublish" : "Publish"}
        </Button>

        <Button type="submit" name="action" value="delete" size="sm" onClick={() => setAction("delete")}>
          <Trash className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};
