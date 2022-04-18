import React from "react";
import useCourses from "../../Hooks/useCourses";
import Course from "../Course/Course";

const Courses = () => {
  const { courses } = useCourses();
 
  return (
    <div className="container bg-light">
      <h3>All Courses({courses.length})</h3>
      <div className="row g-5 mt-4">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
