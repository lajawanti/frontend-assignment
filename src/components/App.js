import React, { useState, useEffect } from 'react';
import Header from './header/Header.js'
import MovieList from './movieList/MovieList.js';
import axios from 'axios';

import './App.css'

const App = () => {
	const [movies, setMovies] = useState([])

	useEffect(() => {
        const fetchData = async () => {
            const result = await axios(	`${process.env.REACT_APP_API_DOMAIN}/trending/all/week?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`);
            // console.log("RESULT => ",result.data.results)
			setMovies(result.data.results);
        }; 
        fetchData();
    }, []);

	// console.log("Movies => ",movies)

	return (
		<div>
			<Header/>
			<MovieList movies = {movies}/>
		</div>
)}

export default App;
