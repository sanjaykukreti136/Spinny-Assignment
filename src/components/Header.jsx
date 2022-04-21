import React from "react";
import Search from "./Search";
import "../css/Header.css";
import { useSelector } from "react-redux";
let Header = () => {
  let query = useSelector((state) => state.query);
  let page = useSelector((state) => state.page);

  return (
    <>
      <div className="header">
        <Search />
        <span className="header-text">
          {`REQUESTING : https://api.jikan.moe/v3/search/anime?q=${query}&limit=16&page=${page}`}
        </span>
      </div>
    </>
  );
};

export default Header;
