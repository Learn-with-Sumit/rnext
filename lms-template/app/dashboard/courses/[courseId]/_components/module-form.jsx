"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Loader2, PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { ModuleList } from "./module-list";

const formSchema = z.object({
  title: z.string().min(1),
});
const initialModules = [
  {
    id: "1",
    title: "Module 1",
    isPublished: true,
  },
  {
    id: "2",
    title: "Module 2",
  },
];
export const ModulesForm = ({ initialData, courseId }) => {
  const [modules, setModules] = useState(initialModules);
  const router = useRouter();
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const toggleCreating = () => setIsCreating((current) => !current);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values) => {
    try {
      setModules((modules) => [
        ...modules,
        {
          id: Date.now().toString(),
          title: values.title,
        },
      ]);
      toast.success("Module created");
      toggleCreating();
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const onReorder = async (updateData) => {
    console.log({ updateData });
    try {
      setIsUpdating(true);

      toast.success("Chapters reordered");
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsUpdating(false);
    }
  };

  const onEdit = (id) => {
    router.push(`/dashboard/courses/1/modules/${1}`);
  };

  return (
    <div className="relative mt-6 border bg-slate-100 rounded-md p-4">
      {isUpdating && (
        <div className="absolute h-full w-full bg-gray-500/20 top-0 right-0 rounded-md flex items-center justify-center">
          <Loader2 className="animate-spin h-6 w-6 text-sky-700" />
        </div>
      )}
      <div className="font-medium flex items-center justify-between">
        Course Modules
        <Button variant="ghost" onClick={toggleCreating}>
          {isCreating ? (
            <>Cancel</>
          ) : (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add a module
            </>
          )}
        </Button>
      </div>

      {isCreating && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Introduction to the course...'"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={!isValid || isSubmitting} type="submit">
              Create
            </Button>
          </form>
        </Form>
      )}
      {!isCreating && (
        <div
          className={cn(
            "text-sm mt-2",
            !modules?.length && "text-slate-500 italic"
          )}
        >
          {!modules?.length && "No module"}
          <ModuleList
            onEdit={onEdit}
            onReorder={onReorder}
            items={modules || []}
          />
        </div>
      )}
      {!isCreating && (
        <p className="text-xs text-muted-foreground mt-4">
          Drag & Drop to reorder the modules
        </p>
      )}
    </div>
  );
};
