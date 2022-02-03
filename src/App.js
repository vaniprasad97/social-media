import { Routes, Route, Navigate} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Posts from "./pages/Posts";
import PostsDetails from "./pages/PostsDetails";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/posts"
          element={
            <ProtectedRoute>
              <Posts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/postsDetails"
          element={
            <ProtectedRoute>
              <PostsDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

function ProtectedRoute(props) {
  const userAuth = JSON.parse(localStorage.getItem("selectedUser"));

  if (
    userAuth &&
    userAuth.username &&
    userAuth.username.length > 0 &&
    userAuth.email
  ) {
    return props.children;
  } else {
    return <Navigate to="/" />;
  }
}
