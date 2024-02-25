import React, { useState, useEffect } from "react";
import { Icon } from "../Icons";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goForward = () => {
    navigate(1);
  };

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
      <nav className="flex items-center gap-4 ">
        <button
          onClick={goBack}
          className="w-8 h-8  flex items-center justify-center rounded-full bg-footer"
        >
          <Icon name="prev" />
        </button>
        <button
          onClick={goForward}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-footer"
        >
          <Icon name="next" />
        </button>
      </nav>
    </>
  );
}
