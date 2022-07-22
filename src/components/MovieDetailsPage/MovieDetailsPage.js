import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeading from 'components/PageHeading';
import * as fetchMovies from '../../services/movies-api';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovies.fetchOnMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const goBack = () => navigate(-1);
  const goHome = () => navigate('/', { replace: true });

  return (
    <>
      <PageHeading text="Информация о кино" />

      <button className={css.movie_details_btn} type="button" onClick={goBack}>
        Назад
      </button>
      <button className={css.movie_details_btn} type="button" onClick={goHome}>
        На главную
      </button>

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
