import React, { useEffect } from "react";
import style from "./Home.module.css";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

function Home() {
  const dispatch = useDispatch();

  const movieText = "spider";

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(movieText));
  }, [dispatch]);
  return (
    <div className={style.home}>
      <MovieListing />
    </div>
  );
}

export default Home;
