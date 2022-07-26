import PropTypes from 'prop-types';
import css from './PageHeading.module.css';

export default function PageHeading({ text }) {
  return <h1 className={css.title}>{text}</h1>;
}

PageHeading.propTypes = {
  text: PropTypes.string.isRequired,
};
