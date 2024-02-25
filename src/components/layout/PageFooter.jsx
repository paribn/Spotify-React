import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Icon } from "../Icons";

export default function PageFooter() {
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
      <div className="grid grid-cols-4 gap-4 py-8 px-8 mt-8 text-l font-semibold">
        <div>
          <ul className="mb-4">
            <li className="text-white  my-2">Company</li>
            <li className="hover:underline hover:text-white">About</li>
            <li className="hover:underline hover:text-white my-2">Jobs</li>
            <li className="hover:underline hover:text-white">For the Record</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-white my-2">Communities</li>
            <li className="hover:underline hover:text-white">For Artist</li>
            <li className="hover:underline hover:text-white my-2">
              Developers
            </li>
            <li className="hover:underline hover:text-white">Investors</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-4 my-2">
            <li className="w-10 h-10  bg-icon flex items-center justify-center rounded-full hover:bg-iconHover">
              <Icon name="instagram" size={16} />
            </li>
            <li className="w-10 h-10 bg-icon flex items-center justify-center rounded-full hover:bg-iconHover">
              <Icon name="tw" size={16} />
            </li>
            <li className="w-10 h-10 bg-icon flex items-center justify-center rounded-full hover:bg-iconHover">
              <Icon name="fb" size={16} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
