import Navigation from 'components/Navigation';
import css from './AppBar.module.css';

export default function Appbar() {
  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
}
