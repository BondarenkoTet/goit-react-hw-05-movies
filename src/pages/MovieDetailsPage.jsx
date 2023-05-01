import React, { useEffect, useState, useRef} from 'react'
import { Link, useParams, useLocation, Outlet } from 'react-router-dom'
import { getMovieDetails } from 'services/search';


const MovieDetailsPage = () => {
  const [detailsMovie, setDetailsMovie] = useState(null);
  const {movieId} = useParams()
  const location = useLocation()
  const goBack = useRef(location.state?.from ?? '/');
  
  useEffect(() => {
    if(detailsMovie === null){
    getMovieDetails(movieId)
    .then(data => setDetailsMovie(data.data))
  }
  }, [detailsMovie, movieId]);

  return (
    <>
    <Link to={goBack.current}>Go back</Link>
      {detailsMovie && (
        <div>
          <img
                src={`https://image.tmdb.org/t/p/original/${detailsMovie.poster_path}`}
                alt={'detailsMovie.original_title'} 
                width={300}
                height={420}
          />
          <h1>{detailsMovie.original_title}</h1>
          <h2>Release date:</h2>
              <p>{detailsMovie.release_date}</p>
          <h3>Budget: {detailsMovie.budget}</h3>
          <h3>Genres: {detailsMovie.genres[0].name}</h3>
          <h3>Overview</h3>
            <p>{detailsMovie.overview}</p>
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
        </div>
  )} 
  </>
)} 
export default MovieDetailsPage;
