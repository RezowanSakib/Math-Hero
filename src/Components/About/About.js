import React from "react";
import "./abut.css";
import img from "../../images/Sakib pic (1).jpg";
const About = () => {
  return (
    <div className="container ">
      <div className="row bg-light m-5 align-items-center">
        <div className="col-md-6 about-body">
          <h1>Hi........! </h1>

          <h3 > I am <span className="text-warning shadow-sm rounded">Sakib Md Rezowan</span> </h3>
          <p>I am a student. In my Free time I like to teach student. </p>
          <p>I have 2 year experience.I usually teach 1-10 class students.I am studing in Math but I love Programming</p>
        </div>
        <div className="col-6">
          <img src={img} className="img-fluid rounded-pill" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
