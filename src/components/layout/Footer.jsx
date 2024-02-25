import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Player from "./Player";

export default function Footer() {
  const [isAuth, setIsAuth] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setIsAuth(
      location.pathname.includes("signin") ||
        location.pathname.includes("register")
    );
  }, [location.pathname]);

  if (isAuth) return;

  return (
    <>
      <div className="h-24">
        <Player />
      </div>
    </>
  );
}
