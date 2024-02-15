import { useState } from "react";

export const useGetMovies = (/* responseMovies, title="Cars" */title) => {
    const [movies, setMovies] = useState(null);

    /* useState(() => {
        fetch(`http://www.omdbapi.com/?apikey=43e41e9a&s=${title}`)
            .then((data) => data.json())            
            .then((result) => setMovies(result.Search));
    }, [title]); */

    const getMovies = () => {
        fetch(`http://www.omdbapi.com/?apikey=43e41e9a&s=${title}`)
            .then((data) => data.json())            
            .then((result) => setMovies(result.Search));
      }

    /* return movies; */
    return {getMovies, movies};
}