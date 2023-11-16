import React from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetails from "./pages/UserDetails";
import UserPosts from "./components/UserPosts";
import UserAlbums from "./components/UserAlbums";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetails />}>
          <Route path="album" element={<UserAlbums />} />
          <Route path="post" element={<UserPosts />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
