import React from "react";
import Card from "./Card";
import Header from "./Header";
import Load from "./Load";
import "../css/Amine.css";
let data = [1, 2, 3, 4, 5, 5, 3, 2, 1, 1, 1, 2, 3];
let Amine = () => {
  return (
    <div className="amine">
      <Header />
      <div className="cards">
        {data.map((el) => {
          return <Card />;
        })}
      </div>
      <Load />
    </div>
  );
};

export default Amine;
