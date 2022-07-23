import { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink, Outlet } from 'react-router-dom';
import PageHeading from 'components/PageHeading';
import * as fetchMovies from '../../services/movies-api';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log('movieId => ', movieId);
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovies.fetchOnMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const goBack = () => navigate(-1);
  const goHome = () => navigate('/', { replace: true });

  return (
    <>
      <PageHeading text="Movie Details" />

      <button className={css.movie_details_btn} type="button" onClick={goBack}>
        Go back
      </button>
      <button className={css.movie_details_btn} type="button" onClick={goHome}>
        Go Homepage
      </button>

      {movie && (
        <div className={css.movie_details_container}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width="320"
          />
          <div className={css.movie_details_descr_container}>
            <h2 className={css.movie_details_title}>{movie.title}</h2>
            <ul className={css.genres_list}>
              Genres:
              {movie.genres.map(el => (
                <li className={css.genres_item} key={el.id}>
                  {el.name}
                </li>
              ))}
            </ul>
            <h2 className={css.movie_details_subtitle}>Overview</h2>
            <p className={css.movie_details_text}>{movie.overview}</p>
            <p className={css.movie_details_text}>
              Release date: {movie.release_date}
            </p>
            <a href={movie.homepage} className={css.movie_details_link}>
              {movie.homepage}
            </a>
            <br />
            <NavLink to={`cast`} className={css.movie_details_navlink}>
              Cast
            </NavLink>
            <NavLink to={`crew`} className={css.movie_details_navlink}>
              Film crew
            </NavLink>
            <NavLink to={`reviews`} className={css.movie_details_navlink}>
              Rewiew
            </NavLink>
          </div>
        </div>
      )}
      <hr />
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
