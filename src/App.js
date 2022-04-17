import "./App.css";
import Header from "./Components/Header/Header";

import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./Components/Courses/Courses";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import Blogs from "./Components/Blogs/Blogs";
import CheckOut from "./Components/Checkout/CheckOut";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/course/:serviceID"
          element={<CheckOut></CheckOut>}
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="/about" element={<About></About>}></Route>
        <Route path="/courses" element={<Courses></Courses>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
