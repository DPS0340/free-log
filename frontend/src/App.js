import { Route, Routes } from "react-router-dom";
import { Test } from "@pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
    </Routes>
  );
}

export default App;
