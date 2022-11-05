import { Route, Routes } from "react-router-dom";
import TempName from "./TempName";

function Profile() {
  // 여기에 이제 login으로 보내는거

  return (
    <Routes>
      <Route path="/:userId">
        <Route index element={<TempName />} />
      </Route>
    </Routes>
  );
}

export default Profile;
