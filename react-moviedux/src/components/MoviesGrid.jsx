import { useState, useEffect } from 'react';

export default function MoviesGrid() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const m = ["a", "b", "c", "d"]

        setMovies(m);

    })

    return (
        <div>{movies.length}</div>
    )
}