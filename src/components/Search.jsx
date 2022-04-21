import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAmineList,
  incrementPageNumber,
  resetPageNumber,
  newAmineList,
  currentQuery,
  error,
} from "../redux/Action";
import "../css/Search.css";

let Search = () => {
  let [search_value, setSearch_Value] = useState("");
  let pageNo = useSelector((state) => state.page);
  let dispatch = useDispatch();
  let amineList = useSelector((state) => state.amines);
  let query = useSelector((state) => state.query);

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
        ></input>
        <button type="Submit" onClick={handleClick}>
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
