import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

const reviews = [
  {
    id: 1,
    student: { name: "John Doe" },
    review: "Nice Course, Thanks for the help",
    rating: 5,
  },
  {
    id: 1,
    student: { name: "John Smilga" },
    review: "Nice Course, Thanks for the help",
    rating: 5,
  },
];
const ReviewsPage = async () => {
  return (
    <div className="p-6">
      <h2>Think in a Redux way reviews</h2>
      <DataTable columns={columns} data={reviews} />
    </div>
  );
};

export default ReviewsPage;
