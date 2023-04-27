import { Route, Routes } from "react-router-dom";
import HomePage from '../pages/HomePage';
import MoviesPage from "../pages/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import NotFound from "../pages/NotFound";
import { Layout } from "./Layout";
import Cast from "./Cast";
import Reviews from "./Reviews"

const App = () => {
  return <div>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage/>} />
      <Route path="movies" element={<MoviesPage/>} >
      </Route>
        <Route path="movies/:movieId" element={<MovieDetailsPage/>} >
          <Route path="movies/:movieId/cast" element={<Cast/>} />
          <Route path="movies/:movieId/reviews" element={<Reviews/>} />
        </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
    </Routes>
  </div>
};
export default App;