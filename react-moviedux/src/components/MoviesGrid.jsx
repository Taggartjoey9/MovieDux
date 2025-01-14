import { useState, useEffect } from 'react';
import MoviesCard from './MovieCard';

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
                        <MoviesCard movie={movie} key={movie.id}/>
                    </div>
                ))
            }
        </div>
    )
}