import Main from "./components/Main";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
