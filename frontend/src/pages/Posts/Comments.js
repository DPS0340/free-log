import { useParams } from "react-router-dom";

function Comments() {
  const { postId } = useParams();

  return <div>post Id : {postId}'s comments</div>;
}

export default Comments;
