import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import Testimonials from "./_components/Testimonials";
import RelatedCourses from "./_components/RelatedCourses";
import CourseDetails from "./_components/CourseDetails";

import { getCourseDetails } from "@/queries/courses";

const SingleCoursePage = async ({params: {id}}) => {
    const course = await getCourseDetails(id);

    console.log(course);
    return (
        <>
            <CourseDetailsIntro
                title={course?.title}
                subtitle={course?.subtitle}
                thumbnail={course?.thumbnail} />

            <CourseDetails />

            <Testimonials />

            <RelatedCourses />
        </>
    );
};
export default SingleCoursePage;
