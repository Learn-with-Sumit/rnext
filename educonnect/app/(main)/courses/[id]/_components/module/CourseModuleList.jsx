import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { Radio } from "lucide-react";
import { Video } from "lucide-react";
import { NotepadText } from "lucide-react";
import { FileQuestion } from "lucide-react";
import { PlayCircle } from "lucide-react";
import { SquarePlay } from "lucide-react";
import { StickyNote } from "lucide-react";
import { Tv } from "lucide-react";
import { cn } from "@/lib/utils";

import CourseLessonList from "./CourseLessonList";

const CourseModuleList = ({module}) => {
    return (
        <AccordionItem className="border-none" value="item-1">
            <AccordionTrigger>{module?.title}</AccordionTrigger>
            <AccordionContent>
                {/* header */}
                <div class="flex gap-x-5 items-center flex-wrap mt-4 mb-6 text-gray-600 text-sm">
                    <span className="flex items-center gap-1.5">
                        <Video className="w-4 h-4" />
                        {(module?.duration/60).toPrecision(2)} Hours
                    </span>
                </div>
                {/* header ends */}

                <div className="space-y-3">
                    {
                        module?.lessonIds && module?.lessonIds.map(lessonId => (
                            <CourseLessonList lessonId={lessonId} />
                        ))
                    }

                </div>
            </AccordionContent>
        </AccordionItem>
    );
};

export default CourseModuleList;
