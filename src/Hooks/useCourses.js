import React, { useEffect, useState } from "react";

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("services.json").then((res) =>
      res.json().then((data) => setCourses(data))
    );
  }, []);
  return {courses, setCourses};
};

export default useCourses;
