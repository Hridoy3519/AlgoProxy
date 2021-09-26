import React from "react";
import Rating from "react-rating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import "./Card.css";
const Card = (props) => {
  const { img, mode, difficulty, title, description, rating,price} = props.course;
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
          <p className="course-description">
            {
              description.slice(0,150)
            }...
          </p>
        </div>
        <div class="card-footer">
          <div className="d-flex justify-content-between align-items-center">
              <Rating
                initialRating={rating}
                readonly
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
              />
              <h3 className="price"> ৳{price} </h3>
            </div>
            <hr />
            <h5 className="text-center reg-status">Registration is going on</h5>
            <hr />
            <div className="d-flex justify-content-center py-2">
              <button className='enroll-btn'> <FontAwesomeIcon icon={faCartArrowDown} /> Enroll Now </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
