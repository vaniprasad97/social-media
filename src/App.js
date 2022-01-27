import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Posts from "./pages/Posts";
import PostsDetails from "./pages/PostsDetails";
import Profile from "./pages/Profile";
import "./styles/App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/postsDetails" element={<PostsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
