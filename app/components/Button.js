"use client";

import { sendGTMEvent } from "@next/third-parties/google";

export function EventButton() {
    return (
        <div>
            <button
                onClick={() =>
                    sendGTMEvent({ event: "sendButtonClicked", value: "305" })
                }
            >
                Send Event
            </button>
        </div>
    );
}
