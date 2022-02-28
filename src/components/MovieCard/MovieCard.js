import React from "react";
import { Link } from "react-router-dom";
import style from "./MovieCard.module.css";

function MovieCard(props) {
  const { data } = props;
  return (
    <div className={style.cardItems}>
      <Link to={`/movie/${data.imdbID}`}>
        <div className={style.cardInner}>
          <div className={style.cardTop}>
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className={style.cardBottom}>
            <div className={style.cardInfo}>
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
