import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";
//toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <div className="wrapper">
          <Sidebar />
          <Main />
        </div>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
