/* eslint-disable react/prop-types */
import { Movi } from "./Movi";

export const ListOfMovies = ({ movies }) => {
  return (
      <ul className='main'>
        {movies.map((movie) => (
            <Movi key={movie.imdbID} movie={movie}></Movi>
        ))}
      </ul>
  );
};