import React from 'react'
import { useState, useEffect } from 'react';
import {searchMovie} from "../services/search";
import {Link, useSearchParams, useLocation} from 'react-router-dom';
//import { useParams } from 'react-router-dom';


const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const[searchParams, setSearchParams]= useSearchParams();
  const queryMovie = searchParams.get("query") ?? "";

  const location = useLocation();

  useEffect(() => {
    if(queryMovie) {
    searchMovie(queryMovie)
    .then(data => setMovies(data.data.results))
    }
  }, [queryMovie]);
  
  const handleSubmit = e => {
    e.preventDefault()
    setSearchParams({ query: e.target[0].value });
    searchMovie(queryMovie)
    e.target.reset()
    }; 
      
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
      />
      <button>Search</button>
    </form>
    
    {movies.length >0 &&(
      <ul>
        {movies.map(movie => (
          <li key = {movie.id}>
            <Link to={`/movies/${movie.id}`} 
                  state={{from: location}}>
            <h2>{movie.title}</h2> 
            </Link>
        </li>
      ))}
      </ul>
    )}
    </>
  )
}

export default MoviesPage;