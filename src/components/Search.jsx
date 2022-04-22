import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetPageNumber,
  newAmineList,
  currentQuery,
  error,
} from "../redux/Action";
import "../css/Search.css";

let Search = () => {
  let [search_value, setSearch_Value] = useState("");
  let dispatch = useDispatch();

  function handleInput(event) {
    setSearch_Value(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    dispatch(resetPageNumber());
    dispatch(newAmineList());
    dispatch(error(false));
    dispatch(currentQuery(search_value));
    setSearch_Value("");
  }

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter Anime Name"
          onChange={handleInput}
          value={search_value}
          onPre
        ></input>
        <button type="Submit" onClick={handleClick}>
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
