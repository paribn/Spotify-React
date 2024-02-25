import React from "react";
import Navbar from "./layout/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";
import NotFound from "./pages/NotFound";
import Register from "./Account/Register";
import SignIn from "./Account/SignIn";
import CardDetails from "./pages/CardDetails";
import PageFooter from "./layout/PageFooter";
import ForgotPassword from "./Account/ForgotPassword";

export default function Main() {
  return (
    <>
      <main className="flex-auto  bg-mainBg  rounded-xl mt-2 mr-2  overflow-auto ">
        <Navbar />
        <div className="px-8">
          <Routes>
            <Route index path="/" element={<Home />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/library" element={<Library />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
            <Route path="/cardDetails/:id" element={<CardDetails />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <PageFooter />
      </main>
    </>
  );
}
