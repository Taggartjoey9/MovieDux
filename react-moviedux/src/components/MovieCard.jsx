export default function MoviesCard({ movie }) {

    const handleError = (e) => {
        e.target.src="default.jpg"
    }

    const getRatingColor = (rating) => {
        if(rating >= 8 ) {
            return 'rating-good'
        }
        if(rating > 8 || rating > 4) {
            return 'rating-ok'
        }
        if(rating <= 4) {
            return 'rating-bad'
        }
    }

    return (
        <div>
            <img src={movie.image} alt={movie.title} onError={handleError}/>
                    <div className="movie-card-info">
                        <h3 className='movie-card-title'>{movie.title}</h3>
                        <p className='movie-card-genre'>{movie.genre}</p>
                        <p className={`movie-card-rating ${getRatingColor(movie.rating)}`}>{movie.rating}</p>
                    </div>
        </div>
    )
}