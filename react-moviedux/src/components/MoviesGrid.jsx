import { useState, useEffect } from 'react';
import MoviesCard from './MovieCard';

export default function MoviesGrid() {

    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("movies.json")
        .then(response => response.json())
        .then(data => setMovies(data))
    })

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const filteredMovies = movies.filter((movie) => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input onChange={handleSearchChange} type="text" placeholder='Search Movies...' className='search-input' value={searchTerm}/>
        <div className='movies-grid'>
            {
                filteredMovies.map(movie => (
                    <div key={movie.id} className='movie-card'>
                        <MoviesCard movie={movie} key={movie.id}/>
                    </div>
                ))
            }
        </div>
        </div>
    )
}