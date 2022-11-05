import { useParams } from "react-router-dom";

function ModifyPost() {
  const { postId } = useParams();

  return <div>mod post Id : {postId}</div>;
}

export default ModifyPost;
