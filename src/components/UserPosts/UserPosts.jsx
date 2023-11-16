import { useEffect, useState } from "react";
import { getUserPost } from "../../ApiService/ApiService";
import { useParams } from "react-router-dom";

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
      <h2>User Posts</h2>
      <p>Title: {posts.title}</p>
      <p>Text: {posts.body}</p>
    </div>
  );
};

export default UserPosts;
