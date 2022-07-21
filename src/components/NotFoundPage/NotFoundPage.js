import errorImage from './error.jpg';
import css from './NotFoundPage.module.css';

export default function NotFoundView() {
  return (
    <>
      <img className={css.error__img} src={errorImage} alt="всё пропало" />
      <h1 className={css.nf_text}>404 Страница не найдена :(</h1>;
    </>
  );
}
