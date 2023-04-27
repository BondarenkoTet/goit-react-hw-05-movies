import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'services/search';


const MovieDetailsPage = () => {
  const [detailsMovie, setDetailsMovie] = useState(null);
  const {movieId} = useParams();

  useEffect(() => {
    if(detailsMovie === 0){
    getMovieDetails(movieId)
    .then(data => setDetailsMovie(data.data.results))
  }
  }, [detailsMovie, movieId]);
  return (
    <>
    {detailsMovie && (
      <button type="button">Go back</button>
    )}
    <div>MovieDetailsPage</div>

    </>
  )
}
// <div>MovieDetailsPage: {movieId}</div>
export default MovieDetailsPage