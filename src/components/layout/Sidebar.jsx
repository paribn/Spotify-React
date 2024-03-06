import React, { useState, useEffect } from "react";
import logo from "../../assets/img/logo.svg";
import Menu from "../Sidebar/Menu";
import { Icon } from "../Icons";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Playlist from "../Sidebar/Playlist";
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

    //  post new playlist
    // get all playlist

    //navigate(`/playlist/${id}`)
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
                Create your first playlist
              </p>
              <span className="text-white text-sm font-semibold">
                It's easy we'll help you
              </span>
              <div className=" bg-white w-32 mt-4 h-8 text-center px-2 rounded-2xl font-semibold ">
                <NavLink to={"/signin"}>
                  <button>Create playlist</button>
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
                <li>
                  <button
                    className="flex hover:bg-hoverColor w-60 py-4 gap-6 ml-2  text-white items-center  text-sm font-semibold text-link 
                    px-6 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all
                    
                    duration-150 
                    
                    "
                    type="button"
                    onClick={() => setShowModal(true)}
                  >
                    <span className="">
                      <Icon name="plus" />
                    </span>
                    Create Playlist
                  </button>

                  {showModal ? (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[34.375rem] h-[18.75rem] bg-mainBg outline-none focus:outline-none ">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                              <h3 className="text-3xl font-semibold">
                                Create Playlist
                              </h3>
                              <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                              >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  ×
                                </span>
                              </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                              <label
                                for="default-input"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Name
                              </label>
                              <input
                                onChange={handleInputNameChange}
                                type="text"
                                id="default-input"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              ></input>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                              <button
                                className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                              >
                                Close
                              </button>
                              <button
                                className="bg-greenPlay text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  setShowModal(false);
                                  onCreate();
                                }}
                              >
                                Save Changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                </li>
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
            <Playlist />
          </div>
          {sidebar && <SidebarCover />}
        </aside>
      </>
    );
  }
}
