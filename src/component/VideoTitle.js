import React from "react";

const VideoTitle = ({ title, overview, poster }) => {
  return (
    <div className="pt-[12%] px-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
      <img src={poster} alt={title} className="rounded-full h-64 w-64"/>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-8 m-2 rounded hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white p-2 px-8 bg-opacity-50 rounded">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
