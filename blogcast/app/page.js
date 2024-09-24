import Link from "next/link";

export default function Home() {
  return (
    <div className="flex relative flex-col justify-center items-center h-screen">
        <div className="p-2 flex flex-col justify-center items-center bg-gray-100 lg:w-2/5 h-1/4 rounded">
          <div className="flex pb-5 mb-5 text-5xl text-back">
            <h2>BlogCast</h2>
          </div>
          <div>
            <Link
              href="/blog"
              className="bg-black text-white hover:bg-black/90 p-3 rounded-sm text-lg text mr-2"
            >
              TAKE ME TO THE BLOG
            </Link>
          </div>
			</div>
  </div>
  );
}
