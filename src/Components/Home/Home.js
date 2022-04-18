import React from "react";

import Courses from "../Courses/Courses";
import Extra from "../Extra/Extra";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>

      <Courses></Courses>

      <Extra></Extra>
    </div>
  );
};

export default Home;
