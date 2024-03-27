import Link from "next/link";

export default function Folder1() {
    return (
        <div className="p-20 flex flex-col gap-10">
            <h1 className="text-2xl">Folder 1</h1>
            <Link href="/folder1/folder2" className="text-blue-400">
                Folder 2
            </Link>
        </div>
    );
}
