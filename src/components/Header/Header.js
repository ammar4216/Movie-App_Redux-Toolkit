import React, { useState } from "react";
import style from "./Header.module.css";
import user from "../../images/user.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

function Header() {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Please insert valid movie or show name!!!");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };
  return (
    <div className={style.header}>
      <div className={style.headercontainer}>
        <div className={style.logo}>
          <Link to="/">Movie App</Link>
        </div>
        <div className={style.searchbar}>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              value={term}
              placeholder="search movie or show"
              onChange={(e) => setTerm(e.target.value)}
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div className={style.userimage}>
          <img src={user} alt="user-logo" />
        </div>
      </div>
    </div>
  );
}

export default Header;
