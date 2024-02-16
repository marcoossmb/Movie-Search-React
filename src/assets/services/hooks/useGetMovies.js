import { useState, useEffect } from "react";

export const useGetMovies = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const [movies, setMovies] = useState(null);

    const getMovies = () => {
        fetch(`http://www.omdbapi.com/?apikey=43e41e9a&s=${title}`)
            .then((data) => data.json())            
            .then((result) => setMovies(result.Search));
    }

    useEffect(() => {
        getMovies();
    }, [title]);

    return { setTitle, getMovies, movies };
}