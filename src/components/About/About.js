import PageHeading from '../PageHeading';
import css from './About.module.css';

function About() {
  return (
    <>
      <PageHeading text="О приложении" />
      <h2 className={css.about_title}>Приложение для поиска Кино</h2>
      <p className={css.about_text}>
        # На главной странице отображается кино, находящееся в трендах.
      </p>
      <p className={css.about_text}>
        # На странице Movies реализован поиск кинофильма.
      </p>
      <p className={css.about_text}>
        # По клику на карточку кино открывается детальная информация о нем. Там
        вы можете изучить актерский состав и ознакомится с ревью о кино.
      </p>
    </>
  );
}

export default About;
