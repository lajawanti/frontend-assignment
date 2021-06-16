import React from 'react';
import MoviePosterDisplay from '../moviePosterDisplay/MoviePosterDisplay.js'
import './MovieList.css';

const MovieList = ({movies}) => {
    // console.log("Movies in MovieList ==> ", movies)

    return (
        <div className = "movie__list__main">
            <h2>Most Recent Movies</h2> 
            
            <div>
                {movies? (
                    <div className = "movie__list__inner">
                        {movies.map(movie => (
                            <MoviePosterDisplay key = {movie.id} movie={movie}/>
                        ))}
                    </div>
                )                 
                : (
                    null
                )}
            </div>
        </div>
    )
}

export default MovieList;