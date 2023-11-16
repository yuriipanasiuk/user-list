import { useEffect, useState, useRef } from "react";
import {
  useParams,
  NavLink,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";
import { getOneUser } from "../ApiService/ApiService";

import styles from "./UserDetails.module.scss";

const UserDetails = () => {
  const [user, setUser] = useState("");

  const { id } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? `/`);

  useEffect(() => {
    (async () => {
      const res = await getOneUser(id);
      setUser(res);
    })();
  }, []);

  return (
    <div>
      <Link to={backLink.current}>Back to user</Link>
      <h2>User details</h2>
      <p>Name: {user.name}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <div style={{ display: "flex", gap: "12px" }}>
        <NavLink to="album" className={styles.actives}>
          Albums
        </NavLink>
        <NavLink to="post" className={styles.actives}>
          Posts
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default UserDetails;
