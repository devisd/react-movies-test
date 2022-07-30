import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOnMovieReviews } from '../../services/movies-api';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchOnMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (reviews.length !== 0) {
    return (
      <div className={css.Reviews}>
        <h2 className={css.Reviews__title}>Reviews</h2>
        <ul>
          {reviews.map(el => (
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
      </div>
    );
  } else {
    return (
      <div className={css.Reviews}>
        <h2 className={css.Reviews__title}>Reviews</h2>

        <h2 className={css.Reviews__error}>
          Sorry, but there are no reviews yet
        </h2>
      </div>
    );
  }
};

export default Reviews;
