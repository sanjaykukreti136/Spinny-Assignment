import React from "react";
import { useSelector } from "react-redux";

let Loading = () => {
  let query = useSelector((state) => state.query);

  return (
    <>
      {query.length == 0 ? (
        <p id="loading-text">Type in Search Bar for Your Favorite Naruto</p>
      ) : (
        <p id="loading-text">Loading.............</p>
      )}
    </>
  );
};

export default Loading;
