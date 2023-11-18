/* eslint-disable react/prop-types */
const SearchItem = ({ search, setSearch }) => {
  return (
    <>
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input
          type="search"
          id="search"
          placeholder="Search Items"
          role="searchbox"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </>
  );
};
export default SearchItem;
