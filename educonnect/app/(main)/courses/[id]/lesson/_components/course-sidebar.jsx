"use client";
import { useState } from "react";
import { CourseProgress } from "@/components/course-progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import { PlayCircle } from "lucide-react";
import { Lock } from "lucide-react";
import Link from "next/link";

import { GiveReview } from "./give-review";
import { DownloadCertificate } from "./download-certificate";
import { SidebarModules } from "./sidebar-modules";

export const CourseSidebar = () => {

  
  return (
      <>
          <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
              <div className="p-8 flex flex-col border-b">
                  <h1 className="font-semibold">Reactive Accelerator</h1>
                  <div className="mt-10">
                      <CourseProgress variant="success" value={80} />
                  </div>
              </div>

              <SidebarModules />

              <div className="w-full px-6">
                  <DownloadCertificate />
                  <GiveReview />
              </div>
          </div>
      </>
  );
};
