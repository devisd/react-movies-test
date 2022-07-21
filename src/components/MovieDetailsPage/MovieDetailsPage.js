import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageHeading from 'components/PageHeading';
import * as fetchMovies from '../../services/movies-api';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovies.fetchOnMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <PageHeading text="Информация о фильме" />

      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width="320"
          />
          <h2>{movie.title}</h2>
          <p className={css.movie_details_text}>Budget: {movie.budget}$</p>
          <p className={css.movie_details_text}>{movie.overview}</p>
          <a href={movie.homepage} className={css.movie_details_link}>
            {movie.homepage}
          </a>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
