import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
