import axios from "axios";

const APY_KEY = "9726aa8cd88febf75b5d2369f8da550e";
const BASE_URL = "https://api.themoviedb.org/3"

export async function getTrendingMovies() {
    const trendingMovies = await axios.get(
    `${BASE_URL}/trending/movie/week?&api_key=${APY_KEY}`
    );
    return  trendingMovies;
} 

export async function getMovieDetails(movieId) {
    const details = await axios.get(
    `${BASE_URL}/movie/${movieId}?&api_key=${APY_KEY}`
    );
    return details;
}
export async function getCast(movieId) {
    const cast = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?&api_key=${APY_KEY}`
    );
    return cast;
}

export async function getReviews(movieId) {
    const reviews = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?&api_key=${APY_KEY}`
    );
    return reviews
}

export async function searchMovie(query) {
    const movie = await axios.get(
    `${BASE_URL}/search/movie?api_key=${APY_KEY}&query=${query}`
    );
    return movie;
}

