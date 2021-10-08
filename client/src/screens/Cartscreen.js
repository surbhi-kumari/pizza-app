import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../action/cartAction';
import { deleteFromCart } from '../action/cartAction';
import Checkout from '../components/Checkout';
const Cartscreen = () => {
  AOS.init();
  const cartstate = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  return (
    <div>
      <div className="row justify-content-center p-2" data-aos="fade-down">
        <div className="col-md-6">
          <h2 style={{ fontSize: '40px' }}>My Cart</h2>
          {cartItems.map((item) => {
            console.log(item);
            return (
              <div className="flex-container">
                <div className="text-left m-1 w-100">
                  <h1>
                    {item.name} [{item.varient}]
                  </h1>
                  <h1>
                    Price: {item.quantity} * {item.prices[0][item.varient]} =
                    {item.price}
                  </h1>
                  <h1 style={{ display: 'inline' }}>Quantity :</h1>
                  <i
                    className="fas fa-plus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity + 1, item.varient)
                      );
                    }}
                  ></i>
                  <b>{item.quantity}</b>
                  <i
                    className="fas fa-minus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity - 1, item.varient)
                      );
                    }}
                  ></i>
                  <hr />
                </div>
                <div className="m-1 w-100">
                  <img
                    src={item.image}
                    style={{ height: '80px', width: '80px' }}
                    alt="loading"
                  />
                </div>
                <div className="m-1 w-100">
                  <i
                    className="fas fa-trash mt-5"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-4 text-right">
          <h4 style={{ fontSize: '45px' }}>SubTotal: {subtotal} /-</h4>
          <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
};

export default Cartscreen;
