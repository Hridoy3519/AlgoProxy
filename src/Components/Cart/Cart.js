import React from 'react';
import Enrolled from '../Enrolled/Enrolled';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((totalPrice,cart) => totalPrice+cart.price,0);

    return (
        <div>
            <div className="cart-header">
                <h4 className="m-0">Your Courses</h4>
                <div className="underline"></div>
            </div>
            <div className="mt-3">
                {
                    cart.map(enrolledCourse => <Enrolled course={enrolledCourse}></Enrolled>)
                }
            </div>
            {
                totalPrice >0 ? <div className="mt-3">
                    <h3 className="total-price">Total: ৳{totalPrice}</h3> 
                        <div className="d-flex justify-content-center">
                            <button className='enroll-btn'>  Checkout </button>
                        </div>
                    </div> : ''
            }
        </div>
    );
};

export default Cart;