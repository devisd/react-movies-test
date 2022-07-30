import { useState, useEffect, lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import PageHeading from 'components/PageHeading';
// import SearchForm from 'components/SearchForm';
// import Loader from 'components/Loader';
import { fetchOnSearchMovies } from '../../services/movies-api';
import css from './MoviesPage.module.css';

const PageHeading = lazy(() => import('../PageHeading/PageHeading'));
const SearchForm = lazy(() => import('../SearchForm/SearchForm'));
const Loader = lazy(() => import('../Loader/Loader'));

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState('idle');
  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const searchMovie = () => {
      setStatus('pending');
      fetchOnSearchMovies(searchQuery).then(result => {
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

  const handleInputChange = query => {
    setSearchQuery(query);
    console.log(query);
    setMovies(null);
  };

  return (
    <>
      <PageHeading text="Movie search" />

      <SearchForm movieQuery={searchQuery} onSubmit={handleInputChange} />
      {status === 'idle' && (
        <h2 className={css.movie_title}>Enter movie title to search</h2>
      )}
      {status === 'pending' && <Loader />}
      <ul className={css.movie_list}>
        {status === 'resolved' &&
          movies &&
          movies.map(movie => (
            <li className={css.movie_item} key={movie.id}>
              <Link
                className={css.movie_link}
                to={`${movie.id}`}
                state={{ from: location.pathname }}
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
};

export default MoviesPage;
