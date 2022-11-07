import { Route, Routes } from "react-router-dom";
import { AuthChecker, CookieChecker } from "@utils";
import { Account, Posts, Profile, Search, Main } from "@pages";
import { ErrorPage } from "./pages/Error";
import Post from "./pages/Posts/Post";
import ModifyPost from "./pages/Posts/ModifyPost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CookieChecker />}>
          <Route path="posts/:postId">
              <Route index element={<Post />} />
              <Route path="comments" element={<Profile />} />
              <Route path="modify" element={<ModifyPost />} />
          </Route>
        </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
