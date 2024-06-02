"use client"
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { replaceMongoIdInArray } from "@/lib/convertData";

import { SidebarLessons } from "./sidebar-lessons";

import { useSearchParams } from 'next/navigation';

export const SidebarModules = ({courseId, modules}) => {
    const searchParams = useSearchParams()
    const allModules = replaceMongoIdInArray(modules).toSorted((a, b) => a.order - b.order);

    const query = searchParams.get('name')

    const expandModule = allModules.find((module) => {
        return module.lessonIds.find((lesson) => {
            return lesson.slug === query;
        });
    });

    const exapndModuleId = expandModule?.id ?? allModules[0].id;

    return (
        <Accordion
            defaultValue={exapndModuleId}
            type="single"
            collapsible
            className="w-full px-6"
        >
            {allModules.map((module) => (
                <AccordionItem key={module.id} className="border-0" value={module.id}>
                    <AccordionTrigger> {module.title} </AccordionTrigger>
                    <SidebarLessons courseId={courseId} lessons={module.lessonIds} module={module.slug}/>
                </AccordionItem>
            ))}
            {/* item ends */}
        </Accordion>
    );
};
