import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import Slider from "react-slick";
import style from "./MovieListing.module.css";
import spinner from "../../images/movie.gif";
import { settings } from "../../common/settings";

function MovieListing() {
  const movieSelector = useSelector(getAllMovies);
  const showSelector = useSelector(getAllShows);

  let renderMovies = "";
  let renderShows = "";

  renderMovies =
    movieSelector.Response === "True" ? (
      movieSelector.Search.map((item, index) => {
        return <MovieCard data={item} key={index} />;
      })
    ) : (
      <div className={style.error}>
        <h3>{movieSelector.Error}</h3>
      </div>
    );

  renderShows =
    showSelector.Response === "True" ? (
      showSelector.Search.map((item, index) => {
        return <MovieCard data={item} key={index} />;
      })
    ) : (
      <div className={style.error}>
        <h3>{showSelector.Error}</h3>
      </div>
    );

  return (
    <div className={style.movieWrapper}>
      {Object.keys(movieSelector).length &&
      Object.keys(showSelector).length === 0 ? (
        <div
          className={style.spinner}
          style={{
            height: "79vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <img src={spinner} alt="Loading..." height="300px" width="300px" />
        </div>
      ) : (
        <>
          <div className={style.movieListing}>
            <h2>Movies</h2>
            <div className={style.movieContainer}>
              {" "}
              <Slider {...settings}>{renderMovies}</Slider>
            </div>
            <br /> <br />
            <h2>Shows</h2>
            <div className={style.showContainer}>
              {" "}
              <Slider {...settings}>{renderShows}</Slider>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieListing;
