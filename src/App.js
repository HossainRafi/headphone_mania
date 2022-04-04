import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Reviews from "./Reviews/Reviews";
import Dashboard from "./Dashboard/Dashboard";
import Blogs from "./Blogs/Blogs";
import About from "./About/About";
import Error from './Error/Error';
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
