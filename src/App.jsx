import { useState } from "react";

import "./App.css";

import { useGetMovies } from "./assets/services/hooks/useGetMovies";
import { ListOfMovies } from "./assets/components/ListOfMovies";
import { NoMovies } from "./assets/components/NoMovies";
/* import responseMovies from "./mocks/results.json"; */
/* import { useEffect } from "react"; */

function App() {

  /* const [movies, setMovies] = useState(null); */
  const [title, setTitle] = useState("");

  const {getMovies, movies} = useGetMovies(title);

  /* useEffect(() => {
    setMovies(responseMovies);
  }, []); */

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies();
  }

  const handleChange = (event) => {
    setTitle(event.target.value)
  }
  
  return (
    <div className="container">
      <header className="header">
        <h1>Prueba técnica de OMDB</h1>
        <form onSubmit={handleSubmit} action="" className="form">
          <input
            onChange={handleChange}
            value={title}
            type="text"
            className="form__input"
            placeholder="Matrix, Avengers, Cars..."
          ></input>
          <button className="form__button">Buscar</button>
        </form>
      </header>
      <main>
        {movies ? <ListOfMovies movies={movies}></ListOfMovies> : <NoMovies></NoMovies>}
      </main>
    </div>
  );

}

export default App;
