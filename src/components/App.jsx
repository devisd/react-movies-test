import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Loader from './Loader';
// import Layout from './Layout';
// import HomePage from './HomePage';
// import MovieDetailsPage from './MovieDetailsPage';
// import MoviesPage from './MoviesPage';
// import About from './About';
// import NotFoundPage from './NotFoundPage';
// import Cast from './Cast';
// import Reviews from './Reviews';
// import Crew from './Crew';

const Layout = lazy(() =>
  import('./Layout/Layout' /* webpackChunkName: "layout" */)
);
const HomePage = lazy(() =>
  import('./HomePage/HomePage' /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import('./MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    './MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movies-page-details" */
  )
);
const About = lazy(() =>
  import('./About/About' /* webpackChunkName: "about-page" */)
);
const NotFoundPage = lazy(() =>
  import('./NotFoundPage/NotFoundPage' /* webpackChunkName: "not-found-page" */)
);
const Cast = lazy(() =>
  import('./Cast/Cast' /* webpackChunkName: "cast-page" */)
);
const Crew = lazy(() =>
  import('./Crew/Crew' /* webpackChunkName: "film-crew-page" */)
);
const Reviews = lazy(() =>
  import('./Reviews/Reviews' /* webpackChunkName: "reviews-page" */)
);
const Loader = lazy(() =>
  import('./Loader/Loader' /* webpackChunkName: "loader" */)
);

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route index path="cast" element={<Cast />} />
              <Route index path="crew" element={<Crew />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

// Маршруты
// В приложении должны быть следующие маршруты. Если пользователь зашел по несуществующему маршруту, его необходимо перенаправлять на домашнюю страницу.

// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.
