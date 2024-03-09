import React, { useState, useEffect } from "react";
import logo from "../../assets/img/logo.svg";
import Menu from "../Sidebar/Menu";
import { Icon } from "../Icons";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SidebarCover from "../Sidebar/SidebarCover";
import { useDispatch } from "react-redux";
import { setData } from "../../redux/slices/playlists";
import { useSetState } from "react-use";

export default function Sidebar() {
  const navigate = useNavigate();

  const sidebar = useSelector((state) => state.player.sidebar);
  const isLoggedIn = useSelector((state) => state.account.token !== null);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(false);
  const { email } = useSelector((state) => state.account);
  const [input, setInput] = useSetState(null);

  const onCreate = () => {
    fetch(`${process.env.REACT_APP_API}/PlayList`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    }).then((x) => console.log(x));

    dispatch(setData([])); // gett all playlist
  };
  const handleInputNameChange = (e) => {
    let name = e.target.value;
    setInput((prev) => ({ ...prev, name }));
  };

  const [isAuth, setIsAuth] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setIsAuth(
      location.pathname.includes("signin") ||
        location.pathname.includes("register") ||
        location.pathname.includes("ForgotPassword") ||
        location.pathname.includes("resetpassword")
    );
  }, [location.pathname]);

  if (isAuth) return;

  if (!isLoggedIn)
    return (
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
          <button
            to={""}
            className="h-10  flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4"
            activeclassname="text-white font-bold"
          >
            <span>
              <Icon name="library" />
            </span>
            Your Library
          </button>

          <div className="px-2">
            <div className="bg-search h-32 gap-x-4 px-4 p-2 rounded-xl text-black mt-5">
              <p className="text-white font-semibold">
                Choose your favorite songs
              </p>
              <span className="text-white text-sm font-semibold">
                It's easy we'll help you
              </span>
              <div className=" bg-white w-36 mt-4 h-8 text-center px-2 rounded-2xl font-semibold ">
                <NavLink to={"/signin"}>
                  <button>Create liked song</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {sidebar && <SidebarCover />}
      </aside>
    );
  else {
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
              className="h-10  flex gap-x-4 items-center text-[1rem] font-semibold text-link ml-4 hover:text-white px-4"
              activeclassname="text-white font-bold"
            >
              <span>
                <Icon name="library" />
              </span>
              Your Library
            </NavLink>

            <nav className="">
              <ul>
                <li onClick={() => navigate(`/likedSongs`)}>
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
            {/* <Playlist /> */}
          </div>
          {sidebar && <SidebarCover />}
        </aside>
      </>
    );
  }
}
