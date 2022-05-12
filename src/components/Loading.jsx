import React from "react";
import { useSelector } from "react-redux";
import "../css/Loading.css";
let Loading = () => {
  let query = useSelector((state) => state.query);
  let error = useSelector((state) => state.error);
  let loading = useSelector((state) => state.loading);
  return (
    <>
      {error == true ? (
        <span id="loading-text">Oops Some Error Occured</span>
      ) : query.length == 0 ? (
        <span id="loading-text">
          Type in Search Bar for Your Favourite Anime
        </span>
      ) : loading == true ? (
        <>
          <div class="spinner"></div>
          <span id="loading-text">Loading ...</span>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Loading;
