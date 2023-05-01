import React from 'react'; 
import {Link, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {getTrendingMovies} from "../services/search"

const HomePage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        if(trendingMovies.length < 1) 
        {
            getTrendingMovies()
            .then(data => setTrendingMovies(data.data.results))
        }     
    }, [trendingMovies.length]
    );
    return (
        <ul>
            <h1>Trending movies of the week</h1>
            {trendingMovies.map(movie =>{
                return (
                <Link key={movie.id} state={{from: location}} to={`/movies/${movie.id}}`}>
                <li>{movie.title}</li>
                </Link>
                )
            })}
        </ul>
        )
}


export default HomePage


//https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>
// key 9726aa8cd88febf75b5d2369f8da550e
//https://api.themoviedb.org/3/movie/550?api_key=9726aa8cd88febf75b5d2369f8da550e

