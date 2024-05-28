import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

const quizSets = [
  {
    id: 1,
    title: "Reactive Accelerator",
    isPublished: true,
    totalQuiz: 10,
    quizes: [],
  },
  {
    id: 2,
    title: "Think In A Redux Way",
    isPublished: false,
    totalQuiz: 50,
    quizes: [],
  },
];
const QuizSets = async () => {
  return (
    <div className="p-6">
      <DataTable columns={columns} data={quizSets} />
    </div>
  );
};

export default QuizSets;
