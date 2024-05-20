import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionTitle } from "@/components/section-title";
import Link from "next/link";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import { formatPrice } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const courses = [
    {
        id: 1,
        title: "Design",
        thumbnail: "/assets/images/categories/design.jpg",
    },

    {
        id: 3,
        title: "Development",
        thumbnail: "/assets/images/categories/development.jpg",
    },
    {
        id: 4,
        title: "Marketing",
        thumbnail: "/assets/images/categories/marketing.jpg",
    },
    {
        id: 5,
        title: "IT & Software",
        thumbnail: "/assets/images/categories/it_software.jpg",
    },
    {
        id: 6,
        title: "Personal Development",
        thumbnail: "/assets/images/categories/personal_development.jpg",
    },
    {
        id: 7,
        title: "Business",
        thumbnail: "/assets/images/categories/business.jpg",
    },
    {
        id: 8,
        title: "Photography",
        thumbnail: "/assets/images/categories/photography.jpg",
    },
    {
        id: 9,
        title: "Music",
        thumbnail: "/assets/images/categories/music.jpg",
    },
];

const RelatedCourses = () => {
    return (
        <section className="">
            <div className="container">
                <SectionTitle className="mb-6">Related Courses</SectionTitle>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="max-2xl:w-[90%] w-full mx-auto"
                >
                    <CarouselPrevious />
                    <CarouselNext />
                    <CarouselContent>
                        {courses.map((course) => (
                            <CarouselItem
                                key={course.id}
                                className="md:basis-1/2 lg:basis-1/3"
                            >
                                <Link href={`/courses/${course.id}`}>
                                    <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
                                        <div className="relative w-full aspect-video rounded-md overflow-hidden">
                                            <Image
                                                src="/assets/images/courses/course_1.png"
                                                alt={"course"}
                                                className="object-cover"
                                                fill
                                            />
                                        </div>
                                        <div className="flex flex-col pt-2">
                                            <div className="text-lg md:text-base font-medium group-hover:text-sky-700 line-clamp-2">
                                                Reactive Accelerator
                                            </div>
                                            <p className="text-xs text-muted-foreground">
                                                Development
                                            </p>
                                            <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
                                                <div className="flex items-center gap-x-1 text-slate-500">
                                                    <div>
                                                        <BookOpen className="w-4" />
                                                    </div>
                                                    <span>4 Chapters</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between mt-4">
                                                <p className="text-md md:text-sm font-medium text-slate-700">
                                                    {formatPrice(49)}
                                                </p>

                                                <Button
                                                    variant="ghost"
                                                    className="text-xs text-sky-700 h-7 gap-1"
                                                >
                                                    Enroll
                                                    <ArrowRight className="w-3" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export default RelatedCourses;
