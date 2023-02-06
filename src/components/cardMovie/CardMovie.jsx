import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Filter from "../filter/Filter";
const CardMovie = ({ movie, del }) => {
  // console.log(movie)
  return (
    <div>
      <Card
        id="card"
        style={{
          width: "18rem",
          heigth: "38rem",
          margin: "15px",
          backgroundColor: "#f57b51",
        }}
      >
        <img
          alt=""
          style={{ heigth: "15rem" }}
          variant="top"
          src={movie.postUrl}
        />

        <div id="info" style={{ width: "150px" }}>
          <h4> {movie.titre} </h4>

          <p> {movie.date} </p>
          <p>
            {" "}
            <Filter rating={movie.rate} />{" "}
          </p>

          <Button onClick={() => del(movie.id)} variant="danger">
            Delete
          </Button>
        </div>
      </Card>{" "}
    </div>
  );
};

export default CardMovie;
