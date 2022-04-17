import "./App.css";
import Header from "./Components/Header/Header";

import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./Components/Courses/Courses";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/courses" element={<Courses></Courses>}></Route>
       
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
