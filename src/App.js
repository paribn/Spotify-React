import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";
import NotFound from "./components/pages/NotFound";
import Register from "./components/Account/Register";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import Library from "./components/pages/Library";
import Navbar from "./components/layout/Navbar";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <Router>
        {/* <main className="flex-auto  bg-mainBg py-6 rounded-xl mt-2 mr-2  overflow-auto ">
          <Navbar />
          <div className="px-8">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/search" element={<Search />}></Route>
              <Route path="/library" element={<Library />}></Route>
              <Route path="/register" element={<Register />}></Route>

              <Route path="/*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </main> */}

        <div className="wrapper">
          <Sidebar />
          <Main />
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
