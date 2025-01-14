import { useState, useEffect } from 'react';

export default function MoviesGrid() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("movies.json")
        .then(response => response.json())
        .then(data => setMovies(data))
    })

    return (
        <div className='movies-grid'>
            {
                movies.map(movie => (
                    <div key={movie.id} className='movie-card'>
                        <img src={movies.image} alt={movie.title} />
                    </div>
                ))
            }
        </div>
    )
}