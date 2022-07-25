import { lazy } from 'react';
// import PageHeading from '../PageHeading';
import css from './About.module.css';

const PageHeading = lazy(() => import('../PageHeading/PageHeading'));

function About() {
  return (
    <>
      <PageHeading text="About App" />
      <div className={css.about_container}>
        <h2 className={css.about_title}>Movie search app</h2>
        <p className={css.about_text}>
          # The Home page displays trending movies.
        </p>
        <p className={css.about_text}>
          # On the Movies page, a movie search is implemented.
        </p>
        <p className={css.about_text}>
          # By clicking on a movie card, detailed information about it opens.
          You can also study the Cast and read the Review about movie.
        </p>
      </div>

      <div className={css.about_container}>
        <h2 className={css.about_title}>Приложение для поиска Кино</h2>
        <p className={css.about_text}>
          # На главной странице отображается кино, находящееся в трендах.
        </p>
        <p className={css.about_text}>
          # На странице Movies реализован поиск кинофильма.
        </p>
        <p className={css.about_text}>
          # По клику на карточку кино открывается детальная информация о нем.
          Так же вы можете изучить актерский состав и ознакомится с ревью о
          кино.
        </p>
      </div>
    </>
  );
}

export default About;
