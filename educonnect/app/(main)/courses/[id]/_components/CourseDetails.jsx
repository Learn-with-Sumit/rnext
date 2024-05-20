import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCheck } from "lucide-react";
import { BookCheck } from "lucide-react";
import { Clock10 } from "lucide-react";
import { Radio } from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Video } from "lucide-react";
import { NotepadText } from "lucide-react";
import { FileQuestion } from "lucide-react";
import { PlayCircle } from "lucide-react";
import { SquarePlay } from "lucide-react";
import { Tv } from "lucide-react";
import { StickyNote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Presentation } from "lucide-react";
import { UsersRound } from "lucide-react";
import { Star } from "lucide-react";
import { MessageSquare } from "lucide-react";

const CourseDetails = () => {
    return (
        <section className="py-8 md:py-12 lg:py-24">
            <div className="container">
                <span className="bg-success py-0.5 rounded-full text-xs font-medium inline-block">
                    Development
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold 2xl:text-5xl mt-3">
                    Reactive Accelerator
                </h3>
                <p className="mt-3 text-gray-600 text-sm">
                    Master React JS & Next JS
                </p>
                {/*  */}
                <div className="flex sm:items-center gap-5 flex-col sm:flex-row sm:gap-6 md:gap-20 mt-6">
                    <div className="flex items-center gap-2">
                        <img
                            className="w-[40px] h-[40px] rounded-full"
                            src="https://avatars.githubusercontent.com/u/3633137?v=4"
                            alt="sumit saha"
                        />
                        <p className="font-bold">Tapas Adhikary</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-success font-semibold">
                            Last Updated:{" "}
                        </span>
                        <span>Feb 22, 2022</span>
                    </div>
                </div>

                {/* Tab */}
                <div className="my-6">
                    <Tabs defaultValue="overview" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 my-6 max-w-[768px]">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="curriculum">
                                Carriculum
                            </TabsTrigger>
                            <TabsTrigger value="instructor">
                                Instructor
                            </TabsTrigger>
                            {/* <TabsTrigger value="reviews">Reviews</TabsTrigger> */}
                        </TabsList>
                        <TabsContent value="overview">
                            {/* each tab content can be independent component */}
                            <>
                                <h3 className=" text-2xl">
                                    Course Description
                                </h3>
                                <p className="mt-4">
                                    This tutorial will help you learn quickly
                                    and thoroughly. Lorem ipsum, or lipsum as it
                                    sometimes known, is dummy text used in
                                    laying out print, graphic or web designs.
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Donec odio. Quisque
                                    volutpat mattis eros.
                                    <br /> <br /> You’ll be exposed to
                                    principles and strategies, but, more
                                    importantly, you’ll learn how actually apply
                                    these abstract concepts by coding three
                                    different websites for three very different
                                    the audiences. Lorem ipsum is dummy text
                                    used in laying out print, graphic or web
                                    designs Lorem ipsum blinding shot chinwag
                                    knees.
                                </p>
                                <div className="bg-gray-50 space-y-6 p-8 rounded-md mt-8">
                                    <h4 className="text-2xl">
                                        What You will Learn?
                                    </h4>
                                    <ul className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                                        <li className="flex space-x-3">
                                            <div className="flex-none relative top-1">
                                                <CheckCheck />
                                            </div>
                                            <div className="flex-1">
                                                Learn how perspective works and
                                                how to incorporate your art
                                            </div>
                                        </li>
                                        <li className="flex space-x-3">
                                            <div className="flex-none relative top-1">
                                                <CheckCheck />
                                            </div>
                                            <div className="flex-1">
                                                Learn how perspective works and
                                                how to incorporate your art
                                            </div>
                                        </li>
                                        <li className="flex space-x-3">
                                            <div className="flex-none relative top-1">
                                                <CheckCheck />
                                            </div>
                                            <div className="flex-1">
                                                Learn how perspective works and
                                                how to incorporate your art
                                            </div>
                                        </li>
                                        <li className="flex space-x-3">
                                            <div className="flex-none relative top-1">
                                                <CheckCheck />
                                            </div>
                                            <div className="flex-1">
                                                Learn how perspective works and
                                                how to incorporate your art
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        </TabsContent>
                        <TabsContent value="curriculum">
                            {/* each tab content can be independent component */}
                            <div class="flex gap-x-5 items-center justify-center flex-wrap mt-4 mb-6 text-gray-600 text-sm">
                                <span className="flex items-center gap-1.5">
                                    <BookCheck className="w-4 h-4" />
                                    12 Chapters
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Clock10 className="w-4 h-4" />
                                    50+ Hours
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Radio className="w-4 h-4" />4 Live Class
                                </span>
                            </div>

                            {/* contents */}
                            <Accordion
                                defaultValue={["item-1", "item-2", "item-3"]}
                                type="multiple"
                                collapsible
                                className="w-full"
                            >
                                <AccordionItem
                                    className="border-none"
                                    value="item-1"
                                >
                                    <AccordionTrigger>
                                        Introduction
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {/* header */}
                                        <div class="flex gap-x-5 items-center flex-wrap mt-4 mb-6 text-gray-600 text-sm">
                                            <span className="flex items-center gap-1.5">
                                                <Video className="w-4 h-4" />
                                                12 Lessons
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <NotepadText className="w-4 h-4" />
                                                10 Notes
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <FileQuestion className="w-4 h-4" />
                                                10 Quiz
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Radio className="w-4 h-4" />1
                                                Live Class
                                            </span>
                                        </div>
                                        {/* header ends */}

                                        <div className="space-y-3">
                                            {/* item */}
                                            <button
                                                type="button"
                                                className={cn(
                                                    "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600  w-full"
                                                )}
                                            >
                                                <div className="flex items-center gap-x-2">
                                                    <Tv
                                                        size={16}
                                                        className={cn(
                                                            "text-slate-500"
                                                        )}
                                                    />
                                                    What is React ?
                                                </div>
                                            </button>
                                            {/* item ends */}
                                            {/* item */}
                                            <button
                                                type="button"
                                                className={cn(
                                                    "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600  w-full"
                                                )}
                                            >
                                                <div className="flex items-center gap-x-2">
                                                    <Tv
                                                        size={16}
                                                        className={cn(
                                                            "text-slate-500"
                                                        )}
                                                    />
                                                    Learn React Basics
                                                </div>
                                            </button>
                                            {/* item ends */}
                                            {/* item */}
                                            <button
                                                type="button"
                                                className={cn(
                                                    "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600  w-full"
                                                )}
                                            >
                                                <div className="flex items-center gap-x-2">
                                                    <Tv
                                                        size={16}
                                                        className={cn(
                                                            "text-slate-500"
                                                        )}
                                                    />
                                                    Build A Simple React App
                                                </div>
                                            </button>
                                            {/* item ends */}
                                            {/* item */}
                                            <button
                                                type="button"
                                                className={cn(
                                                    "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600  w-full"
                                                )}
                                            >
                                                <div className="flex items-center gap-x-2">
                                                    <StickyNote
                                                        size={16}
                                                        className={cn(
                                                            "text-slate-500"
                                                        )}
                                                    />
                                                    React Basic Note
                                                </div>
                                            </button>
                                            {/* item ends */}
                                            {/* item */}
                                            <button
                                                type="button"
                                                className={cn(
                                                    "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600  w-full"
                                                )}
                                            >
                                                <div className="flex items-center gap-x-2">
                                                    <StickyNote
                                                        size={16}
                                                        className={cn(
                                                            "text-slate-500"
                                                        )}
                                                    />
                                                    Project Requirement Analysis
                                                </div>
                                            </button>
                                            {/* item ends */}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem
                                    className="border-none"
                                    value="item-2"
                                >
                                    <AccordionTrigger>
                                        Master Next JS
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {/* header */}
                                        <div class="flex gap-x-5 items-center flex-wrap mt-4 mb-6 text-gray-600 text-sm">
                                            <span className="flex items-center gap-1.5">
                                                <Video className="w-4 h-4" />
                                                12 Lessons
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <NotepadText className="w-4 h-4" />
                                                10 Notes
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <FileQuestion className="w-4 h-4" />
                                                10 Quiz
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Radio className="w-4 h-4" />1
                                                Live Class
                                            </span>
                                        </div>
                                        {/* header ends */}

                                        <div className="space-y-3">
                                            {/* item */}
                                            <button
                                                type="button"
                                                className={cn(
                                                    "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600  w-full"
                                                )}
                                            >
                                                <div className="flex items-center gap-x-2">
                                                    <Tv
                                                        size={16}
                                                        className={cn(
                                                            "text-slate-500"
                                                        )}
                                                    />
                                                    What is React ?
                                                </div>
                                            </button>
                                            {/* item ends */}
                                            {/* item */}
                                            <button
                                                type="button"
                                                className={cn(
                                                    "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600  w-full"
                                                )}
                                            >
                                                <div className="flex items-center gap-x-2">
                                                    <Tv
                                                        size={16}
                                                        className={cn(
                                                            "text-slate-500"
                                                        )}
                                                    />
                                                    Learn React Basics
                                                </div>
                                            </button>
                                            {/* item ends */}
                                            {/* item */}
                                            <button
                                                type="button"
                                                className={cn(
                                                    "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600  w-full"
                                                )}
                                            >
                                                <div className="flex items-center gap-x-2">
                                                    <Tv
                                                        size={16}
                                                        className={cn(
                                                            "text-slate-500"
                                                        )}
                                                    />
                                                    Build A Simple React App
                                                </div>
                                            </button>
                                            {/* item ends */}
                                            {/* item */}
                                            <button
                                                type="button"
                                                className={cn(
                                                    "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600  w-full"
                                                )}
                                            >
                                                <div className="flex items-center gap-x-2">
                                                    <StickyNote
                                                        size={16}
                                                        className={cn(
                                                            "text-slate-500"
                                                        )}
                                                    />
                                                    React Basic Note
                                                </div>
                                            </button>
                                            {/* item ends */}
                                            {/* item */}
                                            <button
                                                type="button"
                                                className={cn(
                                                    "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600  w-full"
                                                )}
                                            >
                                                <div className="flex items-center gap-x-2">
                                                    <StickyNote
                                                        size={16}
                                                        className={cn(
                                                            "text-slate-500"
                                                        )}
                                                    />
                                                    Project Requirement Analysis
                                                </div>
                                            </button>
                                            {/* item ends */}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem
                                    className="border-none"
                                    value="item-3"
                                >
                                    <AccordionTrigger>
                                        Built Ecommerce Using Next.js
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {/* header */}
                                        <div class="flex gap-x-5 items-center flex-wrap mt-4 mb-6 text-gray-600 text-sm">
                                            <span className="flex items-center gap-1.5">
                                                <Video className="w-4 h-4" />
                                                12 Lessons
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <NotepadText className="w-4 h-4" />
                                                10 Notes
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <FileQuestion className="w-4 h-4" />
                                                10 Quiz
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Radio className="w-4 h-4" />1
                                                Live Class
                                            </span>
                                        </div>
                                        {/* header ends */}

                                        <div className="space-y-3">
                                            {/* item */}
                                            <button
                                                type="button"
                                                className={cn(
                                                    "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600  w-full"
                                                )}
                                            >
                                                <div className="flex items-center gap-x-2">
                                                    <Tv
                                                        size={16}
                                                        className={cn(
                                                            "text-slate-500"
                                                        )}
                                                    />
                                                    What is React ?
                                                </div>
                                            </button>
                                            {/* item ends */}
                                            {/* item */}
                                            <button
                                                type="button"
                                                className={cn(
                                                    "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600  w-full"
                                                )}
                                            >
                                                <div className="flex items-center gap-x-2">
                                                    <Tv
                                                        size={16}
                                                        className={cn(
                                                            "text-slate-500"
                                                        )}
                                                    />
                                                    Learn React Basics
                                                </div>
                                            </button>
                                            {/* item ends */}
                                            {/* item */}
                                            <button
                                                type="button"
                                                className={cn(
                                                    "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600  w-full"
                                                )}
                                            >
                                                <div className="flex items-center gap-x-2">
                                                    <Tv
                                                        size={16}
                                                        className={cn(
                                                            "text-slate-500"
                                                        )}
                                                    />
                                                    Build A Simple React App
                                                </div>
                                            </button>
                                            {/* item ends */}
                                            {/* item */}
                                            <button
                                                type="button"
                                                className={cn(
                                                    "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600  w-full"
                                                )}
                                            >
                                                <div className="flex items-center gap-x-2">
                                                    <StickyNote
                                                        size={16}
                                                        className={cn(
                                                            "text-slate-500"
                                                        )}
                                                    />
                                                    React Basic Note
                                                </div>
                                            </button>
                                            {/* item ends */}
                                            {/* item */}
                                            <button
                                                type="button"
                                                className={cn(
                                                    "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600  w-full"
                                                )}
                                            >
                                                <div className="flex items-center gap-x-2">
                                                    <StickyNote
                                                        size={16}
                                                        className={cn(
                                                            "text-slate-500"
                                                        )}
                                                    />
                                                    Project Requirement Analysis
                                                </div>
                                            </button>
                                            {/* item ends */}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            {/* contents end */}
                        </TabsContent>
                        <TabsContent value="instructor">
                            {/* each tab content can be independent component */}
                            <div className="bg-gray-50 rounded-md p-8">
                                <div className="md:flex md:gap-x-5 mb-8">
                                    <div className="h-[310px] w-[270px] max-w-full  flex-none rounded mb-5 md:mb-0">
                                        <img
                                            src="https://avatars.githubusercontent.com/u/3633137?v=4"
                                            alt=""
                                            className="w-full h-full object-cover rounded"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="max-w-[300px]">
                                            <h4 className="text-[34px] font-bold leading-[51px]">
                                                Tapas Adhikary
                                            </h4>
                                            <div className="text-gray-600 font-medium mb-6">
                                                Senior Software Engineer
                                            </div>
                                            <ul className="list space-y-4">
                                                <li className="flex items-center space-x-3">
                                                    <Presentation className="text-gray-600" />
                                                    <div>10+ Courses</div>
                                                </li>
                                                <li className="flex space-x-3">
                                                    <UsersRound className="text-gray-600" />
                                                    <div>
                                                        2k+ Student Learned
                                                    </div>
                                                </li>
                                                <li className="flex space-x-3">
                                                    <MessageSquare className="text-gray-600" />
                                                    <div>1500+ Reviews</div>
                                                </li>
                                                <li className="flex space-x-3">
                                                    <Star className="text-gray-600" />
                                                    <div>
                                                        4.9 Average Rating
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600">
                                    There are many variations of passages of
                                    Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by
                                    injected humour, or randomised words which
                                    do not look even slightly believable. If you
                                    are going to use a passage of Lorem Ipsum,
                                    you need to be sure there is not anything
                                    embarrassing hidden in the middle of text.
                                    All the Lorem Ipsum generators on the
                                    Internet tend.
                                </p>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;
