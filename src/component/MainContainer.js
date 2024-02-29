import React from "react";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import store from "../store/appStore";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movie = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movie) return;
  const main_movie = movie[0];
  const { poster, overview, videoId } = main_movie;

  return (
    <div>
      <VideoTitle poster={poster} overview={overview} />
      <VideoBackground trailerId={videoId} />
    </div>
  );
};

export default MainContainer;
