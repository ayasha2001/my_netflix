import React, { useEffect } from "react";
import Video from "../utils/layouts/Video";

const VideoBackground = ({ trailerId }) => {
  return (
    <div>
      <Video trailerId={trailerId} />
    </div>
  );
};

export default VideoBackground;
