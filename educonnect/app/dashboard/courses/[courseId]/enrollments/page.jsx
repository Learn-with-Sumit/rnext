import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

import { getInstructorDashboardData, ENROLLMENT_DATA } from "@/lib/dashboard-helper";

import { getCourseDetails } from "@/queries/courses";


const EnrollmentsPage = async ({params: {courseId}}) => {
  const course = await getCourseDetails(courseId);
  const allEnrollments = await getInstructorDashboardData(ENROLLMENT_DATA);
  const enrollmentForCourse = allEnrollments.filter(enrollment => enrollment?.course.toString() == courseId);

  console.log(enrollmentForCourse);
  
  return (
    <div className="p-6">
      <h2>{course?.title}</h2>
      <DataTable columns={columns} data={enrollmentForCourse} />
    </div>
  );
};

export default EnrollmentsPage;
