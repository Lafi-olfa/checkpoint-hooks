import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import HeaderNav from "./components/headerNav/HeaderNav";
import ListCard from "./components/listCard/ListCard";
import AddMovie from "./components/addMovie/AddMovie";
import { movie } from "./components/data/Data";

const App = () => {
  //
  const [movies, setMovies] = useState(movie);
  const handeldelete = (movieId) => {
    setMovies(movies.filter((el) => el.id !== movieId));
    
  };
  const handeladd = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  // pour la partie filter du navbar qui est en relation avec la liste des cards
  const [search, setSearch] = useState("");
  const handelSearch=(e)=>{
    setSearch(e.target.value)
  };
  // ona a le nombre de star nest pad dynamique il necessite une useseSate => interaction avec le site
  const [ratefil, setRatefil] = useState(1);
  const handelRating=(y)=>{
    //injecter la valeur du star et injecter dans ratefil
    setRatefil(y)

  }
  return (
    <div className="App">
      <HeaderNav search={search}  handelsearch={handelSearch}  fil={ratefil} handelrating={handelRating} />
      <ListCard movie={movies.filter(el=>el.titre.trim().toLowerCase().includes(search.trim().toLowerCase())&& el.rate <= ratefil )}
       del={handeldelete} />
      <AddMovie add={handeladd} />
    </div>
  );
};

export default App;
