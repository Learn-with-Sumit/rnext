import Image from "next/image";
import photos from "../images";

export default function PhotoPage({ params }) {
    const { id } = params;
    const photo = photos.find((p) => p.id === id);

    return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto">
                <div>
                    <h1 className="text-center text-3xl font-bold my-4">
                        {photo.name}
                    </h1>
                </div>
                <Image
                    alt={photo.name}
                    src={photo.src}
                    className="w-full object-cover aspect-square "
                />
            </div>
        </div>
    );
}
