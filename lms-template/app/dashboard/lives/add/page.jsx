"use client";
import * as z from "zod";
// import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { UploadDropzone } from "@/components/file-upload";
import { Combobox } from "@/components/ui/combobox";
const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required!",
  }),
  date: z.date({ required_error: "Date is required!" }),
  time: z.string({ required_error: "Time is required!" }).min(1, {
    message: "Time is required!",
  }),
  description: z.string().min(1, {
    message: "Description is required!",
  }),
  thumbnail: z.string().min(1, {
    message: "Thumbnail is required!",
  }),
  url: z.string().min(1, {
    message: "Thumbnail is required!",
  }),
  quizSet: z.string().min(1, {
    message: "Quiz Set is required!",
  }),
});

const AddLive = () => {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      date: "",
      time: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values) => {
    try {
      router.push(`/dashboard/lives`);
      toast.success("Live created");
    } catch (error) {
      toast.error("Something went wrong");
    }
    console.log(values);
  };
  return (
    <section className="py-8">
      <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
        <div className="max-w-full w-[536px]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 mt-8"
            >
              {/* title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Live Title</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isSubmitting}
                        placeholder="e.g 'Reactive Accelerator'"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Thumbnail */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Thumbnail</FormLabel>
                    <FormControl>
                      <UploadDropzone />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* date */}
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      Your date of birth is used to calculate your age.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* time */}
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time</FormLabel>
                    <FormControl>
                      <Input
                        className="block"
                        disabled={isSubmitting}
                        placeholder="Select time"
                        {...field}
                        type="time"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* video url */}
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video URL</FormLabel>
                    <FormControl>
                      <Input
                        className="block"
                        disabled={isSubmitting}
                        placeholder="Video URL"
                        {...field}
                        type="url"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="quizSet"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quiz Set</FormLabel>
                    <FormControl>
                      <Combobox
                        options={[
                          {
                            label: "Reactive Accelerator Quizes",
                            value: "1",
                          },
                          {
                            label: "Think In A Redux Way Quizes",
                            value: "2",
                          },
                        ]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Live Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Live overview"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Write a brief description of your live
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-x-2">
                <Link href="/dashboard/lives">
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit" disabled={isSubmitting}>
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default AddLive;
