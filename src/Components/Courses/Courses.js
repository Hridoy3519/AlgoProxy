import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./courses.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <div className="my-5 row mx-1">
        <div className="col-md-9">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {
              courses.map(course => <Card course={course}></Card>)
            }
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Courses;
