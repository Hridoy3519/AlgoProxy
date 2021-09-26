import React from "react";
import "./Card.css";
const Card = (props) => {
  const { img, mode, difficulty, title, description} = props.course;
  return (
    <div className="col">
      <div className="card h-100 product">
        <div>
          <img className="product-image" src={img} class="card-img-top product-image" alt="..."/>
          <div className="d-flex justify-content-between align-items-center course-info">
            <p>{mode}</p>
            <p><span className="circle">O</span>{difficulty}</p>
          </div>
        </div>

        <div class="card-body">
          <h4 class="card-title"> {title} </h4>
          <p className="course.description">
            {
              description.slice(0,150)
            }...
          </p>
        </div>
        <div class="card-footer d-flex justify-content-evenly"></div>
      </div>
    </div>
  );
};

export default Card;
