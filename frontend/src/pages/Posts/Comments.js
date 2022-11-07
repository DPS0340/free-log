import { useParams } from "react-router-dom";

function Profile() {
  const { postId } = useParams();

  return <div>user Id : {postId}'s Profile</div>;
}

export default Profile;
