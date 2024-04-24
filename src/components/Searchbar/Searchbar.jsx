import { useState } from 'react';

export const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const onSearch = e => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSearch}>
        <button className="SearchForm-button" type="submit">
          <span>Search</span>
        </button>

        <input
          className="SearchForm-input"
          onChange={e => {
            setInputValue(e.target.value);
          }}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
