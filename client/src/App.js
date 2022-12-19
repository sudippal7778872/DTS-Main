import Navbar from "./components/common/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/common/PageNotFound";
import About from "./components/About";
// import HeadTail from "./components/HeadTail";
import CareerForm from "./components/CareerForm";
import Login from "./components/Login"
import Signup from "./components/Signup";
import LocationDetails from "./components/LocationDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <br />
        <Routes>
          <Route exact path="/" element={<LocationDetails />} />
          <Route exact path="/home" element={<LocationDetails />} />
          <Route exact path="/locationdetails" element={<LocationDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <br />
    </div>
  );
}

export default App;
