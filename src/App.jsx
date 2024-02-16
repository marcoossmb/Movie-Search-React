import "./App.css";

import { useState } from "react";
import { useGetMovies } from "./assets/services/hooks/useGetMovies";
import { ListOfMovies } from "./assets/components/ListOfMovies";
import { NoMovies } from "./assets/components/NoMovies";

function App() {
  const { setTitle, getMovies, movies } = useGetMovies("Cars");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Prueba técnica de OMDB</h1>
        <form onSubmit={handleSubmit} action="" className="form">
          <input
            onChange={handleChange}
            value={searchTerm}
            type="text"
            className="form__input"
            placeholder="Matrix, Avengers, Cars..."
          ></input>
          <button type="submit" className="form__button">Buscar</button>
        </form>
      </header>
      <main>
        {movies ? <ListOfMovies movies={movies}></ListOfMovies> : <NoMovies></NoMovies>}
      </main>
    </div>
  );
}

export default App;