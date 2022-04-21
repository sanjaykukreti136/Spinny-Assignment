import React, { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";
import Load from "./Load";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  updateAmineList,
  incrementPageNumber,
  resetPageNumber,
  newAmineList,
  loadingList,
  error,
} from "../redux/Action";
import "../css/Amine.css";
import { errorReducer } from "../redux/Reducer";

let Amine = () => {
  let loading = useSelector((state) => state.loading);
  let query = useSelector((state) => state.query);
  let amineList = useSelector((state) => state.amines);
  let page = useSelector((state) => state.page);
  let dispatch = useDispatch();

  const fetchAmines = async (from) => {
    try {
      if (page == 1 && query.length == 0) {
        toast.error("Empty Amine List!!");
        return;
      }
      const response = await fetch(
        `https://api.jikan.moe/v3/search/anime?q=${query}&limit=16&page=${page}`
      );
      const data = await response.json();
      console.log(data.results);
      if (!data.results) {
        if (data.status == 404) {
          dispatch(error(true));
          toast.error(data.message);
        } else {
          dispatch(error(true));
          toast.error("Oops some error occured ");
        }
        return;
      }
      if (data.results.length == 0) {
        toast.error("Not more found");
        dispatch(error(true));
        return;
      }

      dispatch(updateAmineList(data.results));
      dispatch(loadingList(false));
    } catch (err) {
      toast.error(err);
      dispatch(error(true));
      console.log(err);
    }
  };

  useEffect(() => {
    dispatch(loadingList(true));
    fetchAmines();
  }, [query, page]);

  return (
    <div className="amine">
      <Header />

      {loading == true ? (
        <Loading />
      ) : (
        <>
          <div className="cards">
            {amineList.map((el) => {
              console.log(el);
              return el.map((element) => {
                return <Card key={element.mal_id} {...element} />;
              });
            })}
          </div>
          <Load />
        </>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Amine;
