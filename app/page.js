import devinImage from "@/public/assets/images/devin.jpg";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <h1>Next.js Image Optimization</h1>

            <div className="mt-4 relative w-[800px] h-[400px] border-2 border-teal-300 overflow-hidden">
                <Image
                    placeholder="blur"
                    fill
                    src={devinImage}
                    alt="Will devin replace Programmers?"
                    className="object-cover"
                />
            </div>
        </div>
    );
}
