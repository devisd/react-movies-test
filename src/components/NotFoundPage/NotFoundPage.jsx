import errorImage from '../../image/error.jpg';
import css from './NotFoundPage.module.css';

export default function NotFoundView() {
  return (
    <div className={css.container}>
      <img className={css.error__img} src={errorImage} alt="всё пропало" />
      <h2 className={css.nf_text}>Страница не найдена :(</h2>;
    </div>
  );
}
