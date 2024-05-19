import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
function QuizModal({ quizes }) {
  const [open, setOpen] = useState(false);
  const totalQuizes = quizes?.length;
  const [quizIndex, setQuizIndex] = useState(0);
  const lastQuizIndex = totalQuizes - 1;
  const currentQuiz = quizes[quizIndex];

  // change quiz
  const quizChangeHanlder = (type) => {
    const nextQuizIndex = quizIndex + 1;
    const prevQuizIndex = quizIndex - 1;
    if (type === "next" && nextQuizIndex <= lastQuizIndex) {
      console.log("next");
      return setQuizIndex((prev) => prev + 1);
    }
    if (type === "prev" && prevQuizIndex >= 0) {
      setQuizIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <div class="max-w-[270px] bg-white border border-border rounded-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
        <div className="flex h-32 items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 px-6 text-center">
          <span className="text-lg font-semibold text-white">
            Reactive Accelerator: Quiz Set 4.16 : Module 4 Lesson 16 Quiz Set
          </span>
        </div>
        <div class="p-4">
          <div className="flex items-center justify-between gap-6 text-sm mb-2 font-medium text-gray-700">
            <span>Total Mark</span>
            <Badge className="bg-success/20 text-primary hover:bg-success/20">
              10
            </Badge>
          </div>
          <p class="mb-4 font-normal text-gray-500 dark:text-gray-400 text-sm">
            Reactive Accelerator: Quiz Set of Module 4 Lesson 16: Lesson 16
          </p>
          <Button
            className="flex gap-2 capitalize border-sky-500 text-sky-500 hover:text-sky-500 hover:bg-sky-500/5 w-full"
            variant="outline"
            onClick={() => setOpen(true)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="h-4 w-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-6.49-5.84c.41-.73 1.18-1.16 1.63-1.8.48-.68.21-1.94-1.14-1.94-.88 0-1.32.67-1.5 1.23l-1.37-.57C11.51 5.96 12.52 5 13.99 5c1.23 0 2.08.56 2.51 1.26.37.6.58 1.73.01 2.57-.63.93-1.23 1.21-1.56 1.81-.13.24-.18.4-.18 1.18h-1.52c.01-.41-.06-1.08.26-1.66zm-.56 3.79c0-.59.47-1.04 1.05-1.04.59 0 1.04.45 1.04 1.04 0 .58-.44 1.05-1.04 1.05-.58 0-1.05-.47-1.05-1.05z"></path>
            </svg>
            <span>Participate a Quiz</span>
          </Button>
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[95%] block">
          <div className="pb-4 border-b border-border text-sm">
            <span className="text-success inline-block mr-1">
              {quizIndex + 1} / 2
            </span>{" "}
            টি প্রশ্ন
          </div>
          <div className="py-4">
            <h3 className="text-xl font-medium mb-10">
              <svg
                className="text-success inline"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
                ></path>
              </svg>{" "}
              Reactive Accelerator: Quiz 4.16 - রিয়্যাক্ট কম্পোনেন্টের
              লাইফসাইকেল কোনটি বা কোনগুলো ?
            </h3>
            <span className="text-[10px] block text-end">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                version="1.1"
                viewBox="0 0 16 16"
                class="text-success inline"
                height="12"
                width="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 4.75c0-0.412 0.338-0.75 0.75-0.75h0.5c0.412 0 0.75 0.338 0.75 0.75v0.5c0 0.412-0.338 0.75-0.75 0.75h-0.5c-0.412 0-0.75-0.338-0.75-0.75v-0.5z"></path>
                <path d="M10 12h-4v-1h1v-3h-1v-1h3v4h1z"></path>
                <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"></path>
              </svg>{" "}
              একটি প্রশ্নের একাধিক উত্তর হতে পারে & ভুল সিলেকশনে কোন নেগেটিভ
              মার্কিং নেই
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-6">
            {currentQuiz?.options.map((option) => (
              <div key={option.id}>
                <input
                  className="opacity-0 invisible absolute [&:checked_+_label]:bg-success/5"
                  type="checkbox"
                  id={`option-${option.id}`}
                />
                <Label
                  className="border border-border rounded px-2 py-3 block cursor-pointer hover:bg-gray-50 transition-all font-normal"
                  htmlFor={`option-${option.id}`}
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
          <DialogFooter className="flex gap-4 justify-between w-full sm:justify-between">
            <Button
              className="gap-2 rounded-3xl"
              disabled={quizIndex === 0}
              onClick={() => quizChangeHanlder("prev")}
            >
              <ArrowLeft /> Previous Quiz
            </Button>
            <Button
              className="gap-2 rounded-3xl"
              disabled={quizIndex >= lastQuizIndex}
              onClick={() => quizChangeHanlder("next")}
            >
              Next Quiz <ArrowRight />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default QuizModal;
