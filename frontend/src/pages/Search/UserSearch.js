import { useParams } from "react-router-dom";

function UserSearch() {
  const { searchKeyword } = useParams();

  return <div>search user : {searchKeyword}</div>;
}

export default UserSearch;
