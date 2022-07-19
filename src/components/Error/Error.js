import errorImage from './error.jpg';
import './Error.css';

export default function ErrorView() {
  return (
    <div>
      <img className="error__img" src={errorImage} alt="всё пропало" />
      <h2 className="error__text">Извините. Сайт в процессе разработки</h2>
    </div>
  );
}
