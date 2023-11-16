import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserPost } from "../../ApiService/ApiService";

import styles from "./UserPost.module.scss";

const UserPosts = () => {
  const [posts, setPosts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const result = await getUserPost(id);
      setPosts(result);
    })();
  }, []);

  return (
    <div>
      <p className={styles.title}>User Posts</p>
      <p>
        <span>Title:</span> {posts.title}
      </p>
      <p>
        <span>Text:</span> {posts.body}
      </p>
    </div>
  );
};

export default UserPosts;
