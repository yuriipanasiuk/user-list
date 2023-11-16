import { useEffect, useState } from "react";
import { getUserAlbum } from "../../ApiService/ApiService";
import { useParams } from "react-router-dom";

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
      <h2>User Albums</h2>
      <p>Title: {albums.title}</p>
    </div>
  );
};

export default UserAlbums;
