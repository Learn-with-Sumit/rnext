import Modal from "@/app/components/Modal";
import photos from "@/app/gallery/images";
import Image from "next/image";

export default function PhotoPage({ params }) {
    const { id } = params;
    const photo = photos.find((p) => p.id === id);

    return (
        <Modal>
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
        </Modal>
    );
}
