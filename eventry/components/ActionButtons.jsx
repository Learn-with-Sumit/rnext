"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/app/hooks/useAuth";

import { useRouter } from "next/navigation";

import { useTransition } from "react";

import { addInterestedEvent } from "@/app/actions";

const ActionButtons = ({ eventId, interestedUserIds, goingUserIds, fromDetails }) => {
    const { auth } = useAuth();

    const router = useRouter();

    const isInterested = interestedUserIds?.find((id) => id === auth?.id);
    const isGoing = goingUserIds?.find(id => id === auth?.id);

    const [interested, setInterested] = useState(isInterested);
    const [going, setGoing] = useState(isGoing);
    const [isPending, startTransition] = useTransition();

    const toggleInterest = async () => {
        if (auth) {
            addInterestedEvent(eventId, auth?.id);
            setInterested(!interested);
        } else {
            router.push("/login");
        }
    };

    const markGoing = () => {
        if (auth) {
            router.push(`/payment/${eventId}`);
        } else {
            router.push("/login");
        }
    };

    return (
        <div className={`w-full flex gap-4 mt-4 ${fromDetails && "flex-1"}`}>
            <button
                onClick={() =>
                    startTransition(() => {
                        toggleInterest();
                    })
                }
                className={`w-full ${
                    interested && "bg-indigo-600 hover:bg-indigo-800"
                }`}
            >
                Interested
            </button>
            <button
                disabled={auth && going}
                onClick={markGoing}
                className=" text-center w-full bg-[#464849] py-2 px-2 rounded-md border border-[#5F5F5F]/50 shadow-sm cursor-pointer hover:bg-[#3C3D3D] transition-colors active:translate-y-1"
            >
                Going
            </button>
        </div>
    );
};

export default ActionButtons;
