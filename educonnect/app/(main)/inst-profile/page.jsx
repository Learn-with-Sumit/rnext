//import { CourseProgress } from "@/components/course-progress";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/formatPrice";
import {
  ArrowRight,
  ArrowRightIcon,
  BookOpen,
  MessageSquare,
  Presentation,
  Star,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
];
const InstructorProfile = () => {
  return (
    <section id="categories" className="space-y-6  py-6  lg:py-12">
      <div className="container grid grid-cols-12 lg:gap-x-8 gap-y-8">
        {/* Instructor Info */}
        <div className="col-span-12 lg:col-span-4 ">
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="mb-6">
              <div className="w-36 h-36 rounded-full  mb-5 mx-auto overflow-hidden">
                <img
                  src="https://avatars.githubusercontent.com/u/3633137?v=4"
                  alt=""
                  className="w-full h-full object-cover rounded"
                />
              </div>

              <div>
                <h4 className="text-xl lg:text-2xl text-center">
                  Tapas Adhikary
                </h4>
                <div className="text-gray-600 font-medium mb-6 text-sm text-center">
                  Senior Software Engineer
                </div>
                <ul className=" items-center gap-3 flex-wrap text-sm text-gray-600 font-medium grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 md:grid-cols-4">
                  <li className="flex items-center space-x-3">
                    <Presentation className="text-gray-600 w-4" />
                    <div>10+ Courses</div>
                  </li>
                  <li className="flex items-center space-x-3">
                    <UsersRound className="text-gray-600 w-4" />
                    <div>2k+ Students</div>
                  </li>
                  <li className="flex items-center space-x-3">
                    <MessageSquare className="text-gray-600 w-4" />
                    <div>1500+ Reviews</div>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Star className="text-gray-600 w-4" />
                    <div>4.9 Average Rating</div>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 text-xs leading-[1.8]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there is not anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend.
            </p>
          </div>
        </div>
        {/* Courses */}
        <div className="col-span-12 lg:col-span-8">
          <div>
            <SectionTitle className="mb-6">Courses</SectionTitle>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {courses.map((category) => {
                return (
                  <Link key={category.id} href={`/courses/${category.id}`}>
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

                        {/*<CourseProgress
                          size="sm"
                          value={80}
                          variant={110 === 100 ? "success" : ""}
                />*/}

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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InstructorProfile;
