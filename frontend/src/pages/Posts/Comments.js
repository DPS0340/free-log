import { useParams } from "react-router-dom";

function Profile() {
  const { userId } = useParams();

  return <div>user Id : {userId}'s Profile</div>;
}

export default Profile;
