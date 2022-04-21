import React from "react";
import { useSelector } from "react-redux";

let Loading = () => {
  let query = useSelector((state) => state.query);
  let error = useSelector((state) => state.error);
  return (
    <>
      {error == true ? (
        <p id="loading-text">Oops Some Error Occured</p>
      ) : query.length == 0 ? (
        <p id="loading-text">Type in Search Bar for Your Favorite Amine</p>
      ) : (
        <p id="loading-text">Loading ......</p>
      )}
    </>
  );
};

export default Loading;
