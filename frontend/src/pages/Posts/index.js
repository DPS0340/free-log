import { Route, Routes } from "react-router-dom";
import Post from "./Post";
import Comments from "./Comments";
import ModifyPost from "./ModifyPost";

function Posts() {
  // 여기에 이제 login으로 보내는거

  return (
    <Routes>
      <Route path="/:postId">
        <Route index element={<Post />} />
        <Route path="comments" element={<Comments />} />
        <Route path="modify" element={<ModifyPost />} />
      </Route>
    </Routes>
  );
}

export default Posts;
