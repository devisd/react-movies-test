import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeading from 'components/PageHeading';
import SearchForm from 'components/SearchForm';
import Loader from 'components/Loader';
import * as fetchMovies from '../../services/movies-api';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const searchMovie = () => {
      setStatus('pending');
      fetchMovies.fetchOnSearchMovies(searchQuery).then(result => {
        setMovies(result);
        setStatus('resolved');
      });
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    };

    searchMovie();
  }, [searchQuery]);

  const handleInputChange = data => {
    setSearchQuery(data.trim());
    setMovies(null);
  };

  return (
    <>
      <PageHeading text="Поиск кинофильма" />

      <SearchForm onSubmit={handleInputChange} />

      {status === 'idle' && (
        <h2 className={css.movie_title}>
          Введите название кинофильма для поиска
        </h2>
      )}
      {status === 'pending' && <Loader />}
      <ul className={css.movie_list}>
        {status === 'resolved' &&
          movies &&
          movies.map(movie => (
            <li className={css.movie_item} key={movie.id}>
              <Link className={css.movie_link} to={`${movie.id}`}>
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
};

export default MoviesPage;
