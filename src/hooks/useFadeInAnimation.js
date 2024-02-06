import { useEffect } from "react";

export default function useFadeInAnimation(ref, duration) {
    useEffect(() => {
        const node = ref.current;
        let startTime = performance.now();
        let frameId = null;

        function onFrame(now) {
            const timePassed = now - startTime;
            const progress = Math.min(timePassed / duration, 1);

            onProgress(progress);

            if (progress < 1) {
                frameId = requestAnimationFrame(onFrame);
            }
        }

        function onProgress(progress) {
            node.style.opacity = progress;
        }

        function start() {
            onProgress(0);
            startTime = performance.now();
            frameId = requestAnimationFrame(onFrame);
        }

        function stop() {
            cancelAnimationFrame(frameId);
            startTime = null;
            frameId = null;
        }

        start();

        return () => stop();
    }, [ref, duration]);
}
