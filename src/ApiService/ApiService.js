import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const getAllUsers = async () => {
  const { data } = await axios("/users");

  return data;
};

export const getOneUser = async (id) => {
  const { data } = await axios(`/users/${id}`);

  return data;
};

export const getUserPost = async (id) => {
  const { data } = await axios(`/posts/${id}`);

  return data;
};

export const getUserAlbum = async (id) => {
  const { data } = await axios(`/albums/${id}`);

  return data;
};
