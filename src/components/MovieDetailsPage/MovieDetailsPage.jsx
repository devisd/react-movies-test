import { useState, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
// import PageHeading from 'components/PageHeading';
import * as fetchMovies from '../../services/movies-api';
import css from './MovieDetailsPage.module.css';

const PageHeading = lazy(() =>
  import(
    '../PageHeading/PageHeading' /* webpackChunkName: "page-header-text" */
  )
);

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    fetchMovies.fetchOnMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const goBack = location.state?.from ?? '/';
  console.log('goBack => ', goBack);

  return (
    <>
      <PageHeading text="Movie Details" />

      <Link className={css.movie_details_btn} to={goBack} replace={true}>
        Go back
      </Link>
      <Link className={css.movie_details_btn} to={'/'} replace={true}>
        Go Homepage
      </Link>

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
            <NavLink
              to={`cast`}
              className={css.movie_details_navlink}
              state={{ from: location.pathname }}
            >
              Cast
            </NavLink>
            <NavLink
              to={`crew`}
              className={css.movie_details_navlink}
              state={{ from: location.pathname }}
            >
              Film crew
            </NavLink>
            <NavLink
              to={`reviews`}
              className={css.movie_details_navlink}
              state={{ from: location.pathname }}
            >
              Rewiew
            </NavLink>
          </div>
        </div>
      )}
      <hr />
      <Suspense
        fallback={
          <h3 className={css.movie_details_title}>Loading content ...</h3>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
