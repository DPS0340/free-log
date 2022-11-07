import { Route, Routes } from "react-router-dom";
import { AuthChecker, CookieChecker } from "@utils";
import { Account, Posts, Profile, Search, Main } from "@pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CookieChecker />}>
        <Route path="account/*" element={<Account />} />
        <Route element={<AuthChecker />}>
          <Route path="post/*" element={<Posts />} />
          <Route path="profile/*" element={<Profile />} />
          <Route path="search/*" element={<Search />} />
          <Route path="main/*" element={<Main />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

// This line was added
