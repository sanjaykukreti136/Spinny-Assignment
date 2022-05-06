import React from "react";
import { useDispatch } from "react-redux";
import { incrementPageNumber } from "../redux/Action";

let Load = () => {
  let dispatch = useDispatch();

  let incrementPage = () => {
    dispatch(incrementPageNumber());
    window.scrollTo(0, 9999);
  };

  return (
    <>
      <button id="load-more" onClick={incrementPage}>
        Load More
      </button>
    </>
  );
};

export default Load;
