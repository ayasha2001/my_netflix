import React from "react";
import { YOUTUBE_URL } from "../../utils/constants";

const Video = ({ trailerId }) => {
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={YOUTUBE_URL + trailerId + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay ; clipboard-write;  encrypted-media;  gyroscope;  picture-in-picture;  web-share"
      ></iframe>
    </div>
  );
};

export default Video;
