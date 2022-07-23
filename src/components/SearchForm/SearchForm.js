import { useState } from 'react';
import css from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <div className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchForm_button}>
          <span className={css.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={css.SearchForm_input}
          value={query}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          placeholder="search..."
        />
      </form>
    </div>
  );
};

export default SearchForm;
