import React from 'react';
import moment from "moment";

import './MovieDetails.css';

const MovieDetails = ({ movie, setShowMovieDetails }) => {
    console.log("Movie in movieDetails => ", movie);
    
    return (
        <div className="movie__details">
            <div className="movie__details__show">
                <div className="movie__details__left">
                    <h3>{movie.original_name? movie.original_name : movie.original_title}</h3>
                    <img 
                        src = {`${process.env.REACT_APP_API_BASE_IMAGE_URL}${movie.poster_path}`}
                        alt = "movie poster"
                    />
                </div>

                <div className="movie__details__right">  
                    <p><span style = {{fontWeight:'bold'}}>Release date: </span>{movie.release_date?(moment(movie.release_date).format('LL')):(moment(movie.first_air_date).format('LL'))}</p>
                    <p>{movie.overview}</p>
                    <p><span style = {{fontWeight:'bold'}}>{movie.vote_average}</span>/10 (total votes {movie.vote_count})</p>
                </div>
                <span className = "moviedetail__close" onClick = {() => {setShowMovieDetails(false)}}>X</span>

            </div>
        </div>
    )
}

export default MovieDetails;