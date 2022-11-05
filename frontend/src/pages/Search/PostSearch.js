import { useParams } from "react-router-dom";

function PostSearch() {
  const { searchKeyword } = useParams();

  return <div>search post : {searchKeyword}</div>;
}

export default PostSearch;
