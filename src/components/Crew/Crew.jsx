import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as fetchMovies from '../../services/movies-api';
import css from './Crew.module.css';

const Crew = () => {
  const { movieId } = useParams();
  const [crews, setCrews] = useState([]);

  useEffect(() => {
    fetchMovies.fetchOnMovieCrews(movieId).then(setCrews);
  }, [movieId]);

  return (
    <div className={css.Crew}>
      <h2 className={css.Crew__title}>Film crew</h2>
      {crews.length === 0 ? (
        <h2 className={css.Crew__error}>Sorry, no crew information</h2>
      ) : (
        <ul className={css.Crew__container}>
          {crews &&
            crews.map(el => (
              <li key={el.credit_id} className={css.Crew__item}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                  alt={el.name}
                  width="50"
                />
                <h3 className={css.Crew__name}>{el.name}</h3>
                <p className={css.Crew__description}>{el.job}</p>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Crew;
