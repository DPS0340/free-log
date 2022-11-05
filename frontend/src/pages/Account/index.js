import { Route, Routes } from "react-router-dom";
import FindId from "./FindId";
import FindPassword from "./FindPassword";
import Login from "./Login";
import SignUp from "./Signup";

function Account() {
  // 여기에 이제 login으로 보내는거

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="find/*">
        <Route path="id" element={<FindId />} />
        <Route path="password" element={<FindPassword />} />
      </Route>
    </Routes>
  );
}

export default Account;
