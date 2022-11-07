import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";

function Main() {
  // 여기에 이제 login으로 보내는거

  return (
    <Routes>
      <Route path=":tempName" element={<MainPage />} />
    </Routes>
  );
}

export default Main;
