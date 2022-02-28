import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieOrShowDetail,
  getAllDetails,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";

import style from "./MovieDetail.module.css";
import spinner from "../../images/movie.gif";

function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getAllDetails);

  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));

    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);
  return (
    <div className={style.movieSection}>
      {Object.keys(data).length === 0 ? (
        <div className={style.spinner} style={{ height: "70vh" }}>
          <img src={spinner} alt="Loading..." />
        </div>
      ) : (
        <>
          <div className={style.sectionLeft}>
            <div className={style.movieTitle}>{data.Title}</div>
            <div className={style.movieRating}>
              <span>
                IMDB Rating{" "}
                <i className="fa fa-star" style={{ color: "#ff9e00" }}></i> :{" "}
                {data.imdbRating}
              </span>
              <span>
                IMDB Votes{" "}
                <i className="fa fa-thumbs-up" style={{ color: "#fafafa" }}></i>{" "}
                : {data.imdbVotes}
              </span>
              <span>
                Runtime{" "}
                <i
                  className="fa fa-film"
                  style={{ color: "rgb(191, 213, 214)" }}
                ></i>{" "}
                : {data.Runtime}
              </span>
              <span>
                Year{" "}
                <i
                  className="fa fa-calendar"
                  style={{ color: "peachpuff" }}
                ></i>{" "}
                : {data.Year}
              </span>
            </div>

            <div className={style.moviePlot}>
              <h3>Plot</h3>
              <p>{data.Plot}</p>
            </div>
            <div className={style.movieInfo}>
              <div>
                <span>Director </span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Cast </span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genres </span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages </span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards </span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className={style.sectionRight}>
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetail;
