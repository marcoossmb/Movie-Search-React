/* eslint-disable react/prop-types */
export const Movi = ({ movie }) => {
  return (
    <div className="article" key={movie.imdbID}>
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
};