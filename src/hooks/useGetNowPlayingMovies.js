import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/movieSlice";
import axios from "axios";
import { useEffect } from "react";

const useGetNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchNowPlaying = async () => {
      axios
        .get(" http://localhost:8080/now-playing")
        .then((res) => {
          console.log(res.data);
          dispatch(addNowPlayingMovies(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchNowPlaying();
  }, []);
};

export default useGetNowPlayingMovies