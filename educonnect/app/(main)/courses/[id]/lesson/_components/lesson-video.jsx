"use client"

import ReactPlayer from "react-player/youtube";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const LessonVideo = ({ courseId, lesson, module }) => {
    const [hasWindow, setHasWindow] = useState(false);
    const [started, setStarted] = useState(false);
    const [ended, setEnded] = useState(false);
    const [duration, setDuration] = useState(0);

    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
          setHasWindow(true);
        }
    }, []);

    useEffect(() => {
        async function updateLessonWatch() {
          const response = await fetch("/api/lesson-watch", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              courseId: courseId,
              lessonId: lesson.id,
              moduleSlug: module,
              state: "started",
              lastTime: 0
            })
          });

          if (response.status === 200) {
            const result = await response.text();
            console.log(result);
            setStarted(false);
          }
        }
        started && updateLessonWatch();
      }, [started]);

      useEffect(() => {
        async function updateLessonWatch() {
          const response = await fetch("/api/lesson-watch", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              courseId: courseId,
              lessonId: lesson.id,
              moduleSlug: module,
              state: "completed",
              lastTime: duration
            })
          });

          if (response.status === 200) {
            const result = await response.text();
            setEnded(false);
            router.refresh();
          }
        }
        ended && updateLessonWatch();
      }, [ended]);

    function handleOnStart() {
        console.log("handleOnStart");
        setStarted(true);
    }

    function handleOnEnded() {
        console.log("handleOnEnded");
        setEnded(true);
    }

    function handleOnDuration(duration) {
        console.log("handleOnDuration", duration);
        setDuration(duration);
    }

    function handleOnProgress(state) {
        //console.log("handleOnProgress", state);
    }

    return(
        <>
        {
            hasWindow && (
                <ReactPlayer
                    url={lesson.video_url}
                    width="100%"
                    height="470px"
                    controls={true}
                    onStart={handleOnStart}
                    onDuration={handleOnDuration}
                    onProgress={handleOnProgress}
                    onEnded={handleOnEnded}
                    />
            )
        }
        </>
    )
}