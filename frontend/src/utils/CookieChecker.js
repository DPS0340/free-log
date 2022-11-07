import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function CookieChecker() {
  useEffect(() => {
    console.log("cookie check");
  }, []);
  return <Outlet />;
}

export default CookieChecker;
