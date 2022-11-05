import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function AuthChecker() {
  useEffect(() => {
    console.log("auth check");
  }, []);
  return <Outlet />;
}

export default AuthChecker;
