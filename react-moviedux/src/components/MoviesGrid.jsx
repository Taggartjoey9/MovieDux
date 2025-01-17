import { useState, useEffect } from 'react';
import MoviesCard from './MovieCard';

export default function MoviesGrid() {

    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");

    const [genre, setGenre] = useState("All Genres");

    const [rating, setRating] = useState("All");

    useEffect(() => {
        fetch("movies.json")
        .then(response => response.json())
        .then(data => setMovies(data))
    })

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    }

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    }

    const matchesSearchTerm = (movie, searchTerm) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    }

    const matchesGenre = (movie, genre) => {
        return genre === "All Genres" || movie.genre.toLowerCase() === genre.toLowerCase();
    }

    const matchesRating = (movie, rating) => {
        switch(rating) {
            case 'All':
                return true;

            case 'Good':
                return movie.rating >= 8;
            
            case 'Ok':
                return movie.rating < 8 && movie.rating > 4;

            case 'Bad':
                return movie.rating < 4;
        }
    }

    const filteredMovies = movies.filter((movie) => 
        matchesGenre(movie, genre) &&
        matchesSearchTerm(movie, searchTerm) &&
        matchesRating(movie, rating)
    );


    return (

        <div>
            <input onChange={handleSearchChange} type="text" placeholder='Search Movies...' className='search-input' value={searchTerm}/>

            <div className="filter-bar">
                <div className='filter-slot'>
                    <label>Genre</label>
                    <select className='filter-dropdown' value={genre} onChange={handleGenreChange}>
                        <option>All Genres</option>
                        <option>Action</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                        <option>Horror</option>
                    </select>
                </div>
        
                <div className='filter-slot'>
                    <label>Rating</label>
                    <select className='filter-dropdown' value={rating} onChange={handleRatingChange}>
                        <option>All</option>
                        <option>Good</option>
                        <option>Ok</option>
                        <option>Bad</option>
=                    </select>
                </div>
            </div>

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