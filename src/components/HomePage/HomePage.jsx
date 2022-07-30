import { useState, useEffect, lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import PageHeading from '../PageHeading';
import { fetchOnTrending } from '../../services/movies-api';
import css from './HomePage.module.css';

const PageHeading = lazy(() => import('../PageHeading/PageHeading'));

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchOnTrending().then(setMovies);
  }, []);

  return (
    <>
      <PageHeading text="Trends of the week" />

      <ul className={css.movie_list}>
        {movies &&
          movies.map(movie => (
            <li className={css.movie_item} key={movie.id}>
              <Link
                className={css.movie_link}
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width="320"
                />
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
