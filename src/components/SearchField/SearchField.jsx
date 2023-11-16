import { useSearchParams } from "react-router-dom";

const SearchField = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getQuery = (data) => {
    setSearchParams(data !== "" ? { value: data } : {});
  };

  const value = searchParams.get("value") ?? "";

  const handleSearch = (e) => {
    getQuery(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={handleSearch}
        placeholder="write username for search"
        autoFocus
      />
    </form>
  );
};

export default SearchField;
