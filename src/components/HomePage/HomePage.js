import React from 'react';
import MoviesPage from 'components/MoviesPage';
import MovieDetailsPage from 'components/MovieDetailsPage';
import Reviews from 'components/Reviews';
import Cast from 'components/Cast';
import Error from 'components/Error';

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <MoviesPage />
      <MovieDetailsPage />
      <Reviews />
      <Cast />
      <Error />
    </>
  );
};

export default HomePage;
