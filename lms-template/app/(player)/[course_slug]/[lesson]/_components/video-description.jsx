"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QuizModal from "./quiz-modal";
const quizes = [
	{
		id: "quiz-1",
		title: "Quiz title 1",
		description: "Quiz description",
		options: [
			{ label: "Option-1", id: 1, isCorrect: true },
			{ label: "Option-2", id: 2, isCorrect: false },
			{ label: "Option-3", id: 3, isCorrect: false },
			{ label: "Option-4", id: 4, isCorrect: true },
		],
	},
	{
		id: "quiz-2",
		title: "Quiz title 2",
		description: "Quiz description",
		options: [
			{ label: "Quiz-2 Option-1", id: 1, isCorrect: true },
			{ label: "Quiz-2 Option-2", id: 2, isCorrect: false },
			{ label: "Quiz-2 Option-3", id: 3, isCorrect: false },
			{ label: "Quiz-2 Option-4", id: 4, isCorrect: true },
		],
	},
];

function VideoDescription() {
	return (
		<div className="mt-4">
			<Tabs defaultValue="details">
				<TabsList className="bg-transparent p-0 border-b border-border w-full justify-start h-auto rounded-none">
					<TabsTrigger className="capitalize" value="details">
						Description
					</TabsTrigger>
					<TabsTrigger className="capitalize" value="quiz">
						Quiz
					</TabsTrigger>
				</TabsList>
				<div className="pt-3">
					<TabsContent value="details">
						<div>render markdown / quill editor preview</div>
						<div>render attachment</div>
					</TabsContent>
					<TabsContent value="quiz">
						<p className="mb-4">Quiz notes</p>
						<QuizModal quizes={quizes} />
					</TabsContent>
				</div>
			</Tabs>
		</div>
	);
}

export default VideoDescription;
