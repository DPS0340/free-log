import { Route, Routes } from "react-router-dom";
import { AuthChecker, CookieChecker } from "@utils";
import { Account } from "@pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CookieChecker />}>
        <Route path="account/*" element={<Account />} />
        <Route element={<AuthChecker />}>
          <Route path="main" element={<Account />} />
          <Route path="post" element={<Account />} />
          <Route path="search" element={<Account />} />
          <Route path="profile" element={<Account />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
