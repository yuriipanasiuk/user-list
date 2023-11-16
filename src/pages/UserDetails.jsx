import { useEffect, useState, useRef } from "react";
import { useParams, NavLink, useLocation, Outlet } from "react-router-dom";
import { getOneUser } from "../ApiService/ApiService";
import Container from "../components/Container";
import BackLink from "../components/BackLink";

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
    <Container>
      <section className={styles.wraper}>
        <BackLink link={backLink} />
        <p className={styles.title}>User details</p>
        <p>
          <span>Name:</span> {user.name}
        </p>
        <p>
          <span>Phone:</span> {user.phone}
        </p>
        <p>
          <span> Website:</span> {user.website}
        </p>
        <p className={styles.info}>To look more click POSTS or ALBUMS</p>
        <nav className={styles.navigation}>
          <NavLink
            to="album"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Albums
          </NavLink>
          <NavLink
            to="post"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Posts
          </NavLink>
        </nav>
        <Outlet />
      </section>
    </Container>
  );
};

export default UserDetails;
