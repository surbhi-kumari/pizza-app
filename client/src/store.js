import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  getAllPizzasReducer,
  addPizzaReducer,
  getPizzaByIdReducer,
  editPizzaReducer,
} from './reducer/pizzaReducer';
import { cartReducer } from './reducer/cartReducer';
import { registerUserReducer } from './reducer/userReducer';
import { loginUserReducer, getAllUsersReducer } from './reducer/userReducer';
import {
  placeOrderReducer,
  getUserOrdersReducer,
  getAllOrdersReducer,
} from './reducer/orderReducer';

const finalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  addPizzaReducer: addPizzaReducer,
  getPizzaByIdReducer: getPizzaByIdReducer,
  editPizzaReducer: editPizzaReducer,
  getAllOrdersReducer: getAllOrdersReducer,
  getAllUsersReducer: getAllUsersReducer,
});
const cartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const currentUser = localStorage.getItem('currentuser')
  ? JSON.parse(localStorage.getItem('currentuser'))
  : null;
const initialState = {
  cartReducer: { cartItems },
  loginUserReducer: { currentUser },
};
const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
