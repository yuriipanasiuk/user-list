import { useSearchParams } from "react-router-dom";
import styles from "./SearchField.module.scss";

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
        className={styles.searchInput}
      />
    </form>
  );
};

export default SearchField;
