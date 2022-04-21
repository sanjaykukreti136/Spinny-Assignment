import React from "react";
import "../css/Search.css";
let Search = () => {
  return (
    <>
      <div className="search-bar">
        <input type="text" placeholder="Enter Anime Name"></input>
        <button type="Submit">Search</button>
      </div>
    </>
  );
};

export default Search;
