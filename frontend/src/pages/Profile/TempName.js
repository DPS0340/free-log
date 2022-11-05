import { useParams } from "react-router-dom";

function TempName() {
  const { userId } = useParams();

  return <div>user Id : {userId}'s profile</div>;
}

export default TempName;
