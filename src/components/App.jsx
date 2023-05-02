import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Suspense,lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const MovieDetailsPage= lazy(()=> import("../pages/MovieDetailsPage"));
const NotFound= lazy(() => import("../pages/NotFound"));
const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"));

const App = () => {
  return <div>
  <Routes>
    <Route path="/" element={
    <Suspense fallback={<h2>Loading...</h2>}>
      <Layout />
    </Suspense>
    }>
      <Route index element={<HomePage/>} />
      <Route path="movies" element={<MoviesPage/>} >
      </Route>
        <Route path="movies/:movieId" element={<MovieDetailsPage/>} >
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
    </Routes>
  </div>
};
export default App;