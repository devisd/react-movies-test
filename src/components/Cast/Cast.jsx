import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOnMovieCast } from '../../services/movies-api';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    fetchOnMovieCast(movieId).then(setCasts);
  }, [movieId]);

  if (casts.length !== 0) {
    return (
      <div className={css.Cast}>
        <h2 className={css.Cast__title}>Cast</h2>
        <ul className={css.Cast__container}>
          {casts.map(el => (
            <li key={el.id} className={css.Cast__item}>
              <img
                src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                alt={el.name}
                width="50"
              />
              <h3 className={css.Cast__name}>{el.name}</h3>
              <p className={css.Cast__description}>Character: {el.character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className={css.Cast}>
        <h2 className={css.Cast__title}>Cast</h2>
        <h2 className={css.Cast__error}>Sorry, no cast information</h2>
      </div>
    );
  }
};

export default Cast;
