function SearchForm({
  handleSubmit,
  query,
  setQuery,
  setValidationError,
  validationError,
}) {
  return (
    <form onSubmit={handleSubmit} className="header__search">
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          if (e.target.value.trim()) setValidationError("");
        }}
        type="search"
        name="search"
        className="header__search-field"
        id="search-topic"
        placeholder="Enter topic"
        aria-describedby={validationError ? "search-error" : undefined}
      />
      <button type="submit" className="header__search-button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
