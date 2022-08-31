import { Routes, Route } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
// import Home from 'pages/Home/Home';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import Movies from 'pages/Movies/Movies';
import React, { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home/Home.js'));
const Movies = lazy(() => import('../../pages/Movies/Movies.js'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails.js')
);


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
