import React from 'react'
import { useState, useEffect } from 'react';
import {getMovie} from "../services/search";
import {Link, Outlet} from 'react-router-dom';
//import { useParams } from 'react-router-dom';


const MoviesPage = () => {
  //const [query, setQuery] = useState([]);

  // const {params} = useParams();
  // console.log(params);
  
//onClickMovies() =(e => {})

  // useEffect(() => {
  // if(query) {
  // getMovie().then(query => {
  // setQuery(query.results)
  // })
  // }
  // }, [query]);
  return (
    <>
    <h2>Additional information</h2> 
    <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
        
      </ul>
      <Outlet />
      </>
    
    
    // < key={} to={`${{}}`}></ link>
  )
}

export default MoviesPage