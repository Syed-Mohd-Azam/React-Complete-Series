/* eslint-disable react/prop-types */
const SearchItem = ({ search, setSearch }) => {
  return (
    <>
      <div className="searchForm">
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          placeholder="Search Items"
          role="searchbox"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
};
export default SearchItem;
