import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { getAllQuizSets } from "@/queries/quizzes";

const QuizSets = async () => {
  const quizSets = await getAllQuizSets();
  const mappedQuizSets = quizSets.map(q => {
    return {
      id: q.id,
      title: q.title,
      isPublished: q.active,
      totalQuiz: q.quizIds.length,
    }
  })

  return (
    <div className="p-6">
      <DataTable columns={columns} data={mappedQuizSets} />
    </div>
  );
};

export default QuizSets;
