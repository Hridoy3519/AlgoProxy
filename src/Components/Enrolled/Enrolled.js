import React from 'react';
import './Enrolled.css';

const Enrolled = (props) => {
    const {img,title,price} = props.course;
    return (
        <div className="d-flex align-items-center mt-2">
            <img className="cart-course-img" src={img} alt="" />
            <div className="ms-2 cart-course-info">
                <p>{title}</p>
                <p className="price-info">Price: ৳{price}</p>
            </div>
        </div>
    );
};

export default Enrolled;