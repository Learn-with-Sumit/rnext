import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

const courses = [
  {
    id: 1,
    title: "Reactive Accelerator",
    price: 49,
    isPublished: true,
  },
  {
    id: 2,
    title: "Think In A Redux Way",
    price: 10,
    isPublished: false,
  },
];
const CoursesPage = async () => {
  return (
    <div className="p-6">
      {/* <Link href="/teacher/create">
        <Button>New Course</Button>
      </Link> */}
      <DataTable columns={columns} data={courses} />
    </div>
  );
};

export default CoursesPage;
