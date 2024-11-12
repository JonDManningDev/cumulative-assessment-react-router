import Header from "./common/Header";
import User from "./user/User";
import UserProfile from "./user/UserProfile";
import PostList from "./user/PostList";
import Post from "./user/Post";
import CardList from "./home/CardList";
import NotFound from "./common/NotFound";
import { Routes, Route } from "react-router-dom";
import NoPostSelectedMessage from "./user/NoPostSelectedMessage";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<CardList />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/users/:userId" element={<User />}>
        <Route index element={<UserProfile />} />
        <Route path="posts" element={<PostList />}>
          <Route index element={<NoPostSelectedMessage />} />
          <Route path=":postId" element={<Post />} />
        </Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;