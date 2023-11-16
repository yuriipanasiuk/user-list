import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserAlbum } from "../../ApiService/ApiService";
import styles from "./UserAlbums.module.scss";

const UserAlbums = () => {
  const [albums, setAlbums] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const result = await getUserAlbum(id);
      setAlbums(result);
    })();
  }, []);

  return (
    <div>
      <p className={styles.title}>User Albums</p>
      <p>
        <span>Title:</span> {albums.title}
      </p>
    </div>
  );
};

export default UserAlbums;
