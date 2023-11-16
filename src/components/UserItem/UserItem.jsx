import { Link } from "react-router-dom";

const UserItem = ({ item, from }) => {
  const { username, id } = item;

  return (
    <li>
      <Link to={`user/${id}`} state={{ from }}>
        username: {username}
      </Link>
    </li>
  );
};

export default UserItem;
