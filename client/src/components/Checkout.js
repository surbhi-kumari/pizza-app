import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../action/orderAction';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';
const Checkout = ({ subtotal }) => {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }
  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="Your Order Placed Successfully" />}
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51Jd6VFSIRywPh097HOcmeviG3MJlKERhRM8vl4lXQPVXHPcX0jyt3ynjtlPkU1OSyrpifNSHh0KuEIi4jK6FWDah00BZ7UtfiP"
        currency="INR"
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </div>
  );
};

export default Checkout;
