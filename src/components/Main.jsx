import React from "react";
import Navbar from "./layout/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import Register from "./Account/Register";
import SignIn from "./Account/SignIn";
import CardDetails from "./pages/CardDetails";
import PageFooter from "./layout/PageFooter";
import ForgotPassword from "./Account/ForgotPassword";
import CategoryDetails from "./pages/CategoryDetails";
import LikedSongPage from "./layout/LikedSongPage";
import ResetPassword from "./Account/ResetPassword";

export default function Main() {
  return (
    <>
      <main className="flex-auto  bg-mainBg  rounded-xl mt-2 mr-2  overflow-auto ">
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route
            path="/categoryDetails/:id"
            element={<CategoryDetails />}
          ></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/likedSongs" element={<LikedSongPage />}></Route>
          <Route path="/resetpassword" element={<ResetPassword />}></Route>
          <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/cardDetails/:id" element={<CardDetails />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
        <PageFooter />
      </main>
    </>
  );
}
