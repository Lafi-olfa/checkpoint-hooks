import React from "react";

const Filter = ({ rating, handelrating }) => {
  // nom du fct stars
  function stars(rating) {
    //empty array
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        star.push(
          <span
            onClick={() => handelrating(i)}
            style={{ color: "#d63447", fontSize: "20px", cursor: "pointer" }}
          >
            {" "}
            ★
          </span>
        );
      } else {
        star.push(
          <span
            onClick={() => handelrating(i)}
            style={{ color: "#f6eedf", fontSize: "20px", cursor: "pointer" }}
          >
            {" "}
            ☆{" "}
          </span>
        );
      }
    }
    return star;
  }
  return <div>{stars(rating)}</div>;
};

export default Filter;
