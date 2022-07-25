import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as fetchMovies from '../../services/movies-api';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovies.fetchOnMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div className={css.Reviews}>
      <h2 className={css.Reviews__title}>Reviews</h2>
      {reviews.length === 0 ? (
        <h2 className={css.Reviews__error}>
          Sorry, but there are no reviews yet
        </h2>
      ) : (
        <ul>
          {reviews &&
            reviews.map(el => (
              <li key={el.id} className={css.Reviews__item}>
                <h3 className={css.Reviews__author_name}>
                  {el.author} ({el.author_details.username})
                </h3>
                <p className={css.Reviews__text}>{el.content}</p>
                <a href={el.url} className={css.Reviews__link}>
                  {el.url}
                </a>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
