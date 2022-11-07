import { useParams } from "react-router-dom";

function MainPage() {
  const { tempName } = useParams();

  return <div>MainPage : {tempName}</div>;
}

export default MainPage;
