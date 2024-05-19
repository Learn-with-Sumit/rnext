import { CourseProgress } from "@/components/course-progress";
import { cn } from "@/lib/utils";
import { PlayCircle } from "lucide-react";
import { Lock } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { CourseSidebarMobile } from "./_components/course-sidebar-mobile";
import { CourseSidebar } from "./_components/course-sidebar";

const CourseLayout = ({ children }) => {
  return (
    <div className="">
      <div className="h-[80px] lg:pl-96 fixed inset-y-0 w-full z-50">
        <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
          {/* Course Sidebar For Mobile */}
          <CourseSidebarMobile />
          {/* <NavbarRoutes /> */}
        </div>
      </div>
      <div className="hidden lg:flex h-full w-96 flex-col fixed inset-y-0 z-50">
        {/* sidebar starts */}
        <CourseSidebar />
        {/* sidebar ends */}
      </div>
      <main className="lg:pl-96 pt-[80px] h-full">{children}</main>
    </div>
  );
};
export default CourseLayout;
