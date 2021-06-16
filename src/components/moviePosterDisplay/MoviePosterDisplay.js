import React, { useState } from 'react';
import MovieDetails from '../movieDetail/MovieDetails.js'
import './MoviePosterDisplay.css';

const MoviePosterDisplay = ({ movie }) => {
    // console.log(movie)
    const [showMovieDetails, setShowMovieDetails] = useState(false)

    return (
        <div className = "movie__poster__display">
            <img 
                src = {`${process.env.REACT_APP_API_BASE_IMAGE_URL}${movie.poster_path}`}
                alt = "movie poster"
                onClick = {() => setShowMovieDetails(true)}
            />

            <p className = "movie__poster__vote">
                {movie.vote_average}
            </p>

            <p className = "movie__poster__name">
                {movie.original_name? movie.original_name : movie.original_title}
            </p>
        
            <div>
                {showMovieDetails? (
                    <MovieDetails movie = {movie} setShowMovieDetails={setShowMovieDetails}/>
                ): (null)}
            </div>
        </div>
    )
}

export default MoviePosterDisplay;