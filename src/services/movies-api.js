// import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '60778458bdbdfa7e14ca7e73fe4a1fef';

async function fetchMovies(url = '', config = {}) {
  const response = await fetch(url, config);

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

// список самых популярных фильмов на сегодня для создания коллекции на главной странице.
export function fetchOnTrending() {
  return fetchMovies(`${BASE_URL}/trending/movie/week?api_key=${KEY}`).then(
    response => response.results
  );
}

// поиск кинофильма по ключевому слову на странице фильмов.
export function fetchOnSearchMovies() {
  return fetchMovies(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false`
  );
}

// запрос полной информации о фильме для страницы кинофильма.
export function fetchOnMovieDetails(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`
  );

  // `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`
}

// запрос информации о актёрском составе для страницы кинофильма.
export function fetchOnMovieCredits(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
}

// запрос обзоров для страницы кинофильма.
export function fetchOnMovieReviews(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
}
