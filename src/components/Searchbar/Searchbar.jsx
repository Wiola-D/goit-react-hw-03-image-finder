export const Searchbar = ({ onSubmit, query, setQuery }) => {
  const onChange = e => {
    const { name, value } = e.target;
    if (name === 'query') setQuery(value);
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={onSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          name="query"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
        />
      </form>
    </header>
  );
};
