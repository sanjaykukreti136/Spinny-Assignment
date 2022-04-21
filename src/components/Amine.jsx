import React, { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";
import Load from "./Load";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAmineList,
  incrementPageNumber,
  resetPageNumber,
  newAmineList,
  loadingList,
} from "../redux/Action";
import "../css/Amine.css";

let Amine = () => {
  let loading = useSelector((state) => state.loading);
  let query = useSelector((state) => state.query);
  let amineList = useSelector((state) => state.amines);
  let page = useSelector((state) => state.page);

  let dispatch = useDispatch();

  const fetchAmines = async (from) => {
    try {
      if (page == 1 && query.length == 0) {
        return;
      }
      const response = await fetch(
        `https://api.jikan.moe/v3/search/anime?q=${query}&limit=16&page=${page}`
      );
      const data = await response.json();
      console.log(data.results);

      dispatch(updateAmineList(data.results));
      dispatch(loadingList(false));
    } catch (err) {
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
    </div>
  );
};

export default Amine;
