import Link from "next/link";

export default async function SeenNotificationsPage() {
    return (
        <div className="text-xl p-4 row-span-2 border border-gray-200 rounded h-[745px] flex gap-5 items-center justify-center">
            <span>SEEN NOTIFICATIONS</span>
            <div>
                <Link href="/parallel-dashboard" className="text-blue-400">
                    ALL
                </Link>
            </div>
        </div>
    );
}
