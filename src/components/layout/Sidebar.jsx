import React, { useState, useEffect } from "react";
import logo from "../../assets/img/logo.svg";
import Menu from "../Sidebar/Menu";
import { Icon } from "../Icons";
import { NavLink, useLocation } from "react-router-dom";
import Playlist from "../Sidebar/Playlist";
import { useSelector } from "react-redux";
import SidebarCover from "../Sidebar/SidebarCover";
import { useDispatch } from "react-redux";
import { setData } from "../../redux/slices/playlists";

export default function Sidebar() {
  // const location = useLocation();
  // const [closeMenu, setCloseMenu] = useState(true);
  // const handleCloseMenu = () => {
  //   setCloseMenu(!closeMenu);
  // }; toggle siddebar vaxtn qalsa yaz
  const sidebar = useSelector((state) => state.player.sidebar);
  const dispatch = useDispatch();

  const onCreate = () => {
    //  post new playlist
    // get all playlist

    //navigate(`/playlist/${id}`)
    dispatch(setData([])); // gett all playlist
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
      <aside
        className="w-1/5 pt-2 flex flex-shrink-0 flex-col gap-x-1"
        style={{ minHeight: "100%" }}
      >
        <div className="w-50 bg-mainBg py-6 rounded-xl ml-2 mr-2">
          <a href="#">
            <img src={logo} alt="spotify" className="h-6 mb-4 ml-6" />
          </a>
          <Menu />
        </div>

        <div
          className="w-50 bg-mainBg py-6 rounded-xl ml-2 mr-2 mt-2 overflow-x-hidden "
          style={{ height: "100%" }}
        >
          <NavLink
            to={""}
            className="h-10  flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4"
            activeclassname="text-white font-bold"
          >
            <span>
              <Icon name="library" />
            </span>
            Your Library
          </NavLink>
          <nav className="">
            <ul>
              <li onClick={() => onCreate()}>
                <a
                  href="#"
                  className="flex hover:bg-hoverColor w-60 py-4 gap-6 ml-4  text-white items-center  text-sm font-semibold text-link "
                >
                  <span className="ml-3 ">
                    <Icon name="plus" />
                  </span>
                  Create Playlist
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex hover:bg-hoverColor py-2 gap-3 ml-4 p-2 text-white items-center text-sm font-semibold text-link "
                >
                  <span>
                    <Icon name="heart" />
                  </span>
                  Liked Songs
                </a>
              </li>
            </ul>
          </nav>
          <Playlist />
        </div>
        {sidebar && <SidebarCover />}
      </aside>
    </>
  );
}
