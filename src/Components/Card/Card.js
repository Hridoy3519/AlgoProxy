import React from "react";
import Rating from "react-rating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import "./Card.css";
const Card = (props) => {

  // Destructuring
  const { img, mode, difficulty, title, description, rating,price,key} = props.course;
  const setCart = props.setCart;
  const cart = props.cart;

  // Add Course on the cart, if this course is not already enrolled.
  const addCourse = () => {
    let alreadyExist = false;
    cart.forEach(element => {
      if(element.key===key){
        alreadyExist = true;
      }
    });

    if(!alreadyExist){
      const newCart = [...cart,props.course];
      setCart(newCart);
    }
  }
  return (
    // Bootstrap Column
    //Using Dynamic Data
    <div className="col">
      <div className="card h-100 product  course-card">
        <div>
          <img src={img} className="card-img-top course-image" alt="..."/>
          <div className="d-flex justify-content-between align-items-center course-info">
            <p>{mode}</p>
            <p><span className="circle">O</span>{difficulty}</p>
          </div>
        </div>

        <div className="card-body">
          <h4 className="card-title"> {title} </h4>
          <p className="course-description">
            {
              description.slice(0,150)
            }...
          </p>
        </div>
        <div className="card-footer">
          {/* Giving Ratings Dynamically using Font Awesome Icons & React Rating package */}
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
              <button onClick={addCourse} className='enroll-btn'> <FontAwesomeIcon icon={faCartArrowDown} /> Enroll Now </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
