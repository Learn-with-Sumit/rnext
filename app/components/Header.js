import Link from "next/link";

export default function Header() {
    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/sequential/posts">
                <div className="box box-2 text-center">
                    Sequential Data Fetching
                </div>
            </Link>

            <Link href="/parallel/posts">
                <div className="box box-3 text-center">
                    Parallel Data Fetching
                </div>
            </Link>
        </div>
    );
}
