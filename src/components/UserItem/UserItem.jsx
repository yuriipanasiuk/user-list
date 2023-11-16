import { Link } from "react-router-dom";
import styles from "./UserItem.module.scss";

const UserItem = ({ item, from }) => {
  const { username, id } = item;

  return (
    <li className={styles.item}>
      <Link to={`user/${id}`} state={{ from }} className={styles.link}>
        username: {username}
      </Link>
    </li>
  );
};

export default UserItem;
