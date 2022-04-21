import React from "react";
import Search from "./Search";
import "../css/Header.css";
let Header = () => {
  return (
    <>
      <div className="header">
        <Search />
        <span className="header-text">
          {"Requesting : https://api.jikan.moe/v3/search/anime?q="}
        </span>
      </div>
    </>
  );
};

export default Header;
