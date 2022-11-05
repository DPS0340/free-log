import { useParams } from "react-router-dom";

function Post() {
  const { postId } = useParams();

  return <div>post Id : {postId}</div>;
}

export default Post;
