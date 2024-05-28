"use client";

export const VideoPlayer = ({}) => {
  return (
    <div className="relative aspect-video">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/666K4aizIu8?si=hgMgYujVVL4R8Dr_"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};
