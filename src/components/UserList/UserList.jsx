import { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

import { getAllUsers } from "../../ApiService/ApiService";
import UserItem from "../UserItem";
import SearchField from "../SearchField";
import Container from "../Container";

import styles from "./UserList.module.scss";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [sorted, setSorted] = useState(true);

  const [searchParams, _] = useSearchParams("");
  const searchQuery = searchParams.get("value");
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const users = await getAllUsers();
      setUsers(users);
    })();
  }, []);

  const sortedUsers = [...users].sort((a, b) => {
    const comparison = a.username.localeCompare(b.username);
    return sorted ? comparison : -comparison;
  });

  const visibleUsers = sortedUsers.filter(({ username }) =>
    searchQuery
      ? username.toLowerCase().includes(searchQuery.toLowerCase())
      : true
  );

  const handleSortChange = (event) => {
    const selectedValue = event.target.value;
    setSorted(selectedValue === "asc");
  };

  return (
    <Container>
      <section className={styles.section}>
        <div className={styles.wraper}>
          <SearchField />

          <select
            className={styles.sortButton}
            onChange={handleSortChange}
            value={sorted ? "asc" : "desc"}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <p className={styles.title}>User list</p>
        {visibleUsers.length > 0 ? (
          <ul>
            {visibleUsers.map((user) => (
              <UserItem key={user.id} item={user} from={location} />
            ))}
          </ul>
        ) : (
          <p>user not found</p>
        )}
      </section>
    </Container>
  );
};

export default UserList;
