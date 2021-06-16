import React, { useState, useEffect } from 'react';
import Header from './header/Header.js'
import MovieList from './movieList/MovieList.js';
import axios from 'axios';

import './App.css'

const App = () => {
	const [movies, setMovies] = useState([])
	const [movieCopy, setMovieCopy] = useState([])

	useEffect(() => {
        const fetchData = async () => {
            const result = await axios(	`${process.env.REACT_APP_API_DOMAIN}/trending/all/week?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`);
            // console.log("RESULT => ",result.data.results)
			setMovies(result.data.results);
			setMovieCopy(result.data.results);
        }; 
        fetchData();
    }, []);

	console.log("Movies => ",movies)

	const searchedMovies = (e) => {
		e.preventDefault();
		let name = e.target.value.toLowerCase();
		if(name) {
			console.log(name, " ==if")
			let filteredMovies = movies.filter(movie => (  
				movie.original_name
				? movie.original_name.toLowerCase().includes(name)
				: movie.original_title.toLowerCase().includes(name)
			))
			console.log(filteredMovies)
			setMovies(filteredMovies);
		} else {
			console.log(name, " ==else")

			setMovies(movieCopy)
		}
	}

	return (
		<div>
			<Header searchedMovies = {searchedMovies}/>
			<MovieList movies = {movies}/>
		</div>
)}

export default App;
