import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import Testimonials from "./_components/Testimonials";
import RelatedCourses from "./_components/RelatedCourses";
import CourseDetails from "./_components/CourseDetails";

import { getCourseDetails } from "@/queries/courses";
import { replaceMongoIdInArray } from "@/lib/convertData";

const SingleCoursePage = async ({params: {id}}) => {
    const course = await getCourseDetails(id);
    return (
        <>
            <CourseDetailsIntro course={course} />

            <CourseDetails course={course} />

            {course?.testimonials && <Testimonials testimonials={replaceMongoIdInArray(course?.testimonials)} />}

            {/*<RelatedCourses />*/}
        </>
    );
};
export default SingleCoursePage;
