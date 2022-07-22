import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeading from '../PageHeading';
import * as fetchMovies from '../../services/movies-api';

import css from './HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchMovies.fetchOnTrending().then(setMovies);
  }, []);

  return (
    <>
      <PageHeading text="Добро пожаловать" />

      <ul className={css.movie_list}>
        {movies &&
          movies.map(movie => (
            <li className={css.movie_item} key={movie.id}>
              <Link className={css.movie_link} to={`/movies/${movie.id}`}>
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
