"use client";

export const VideoPlayer = ({url}) => {
  return (
    <div className="relative aspect-video">
      <iframe
        className="w-full h-full"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
