import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../action/userAction';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';
const Registerscreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const registerscreen = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerscreen;
  const dispatch = useDispatch();
  function register() {
    if (password !== cpassword) {
      alert('password not matched');
    } else {
      const user = { name, email, password };
      console.log(user);
      dispatch(registerUser(user));
    }
  }

  return (
    <div className="register">
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
          {loading && <Loading />}
          {success && <Success success="User Registered Successfully" />}
          {error && <Error error="Email already registered" />}
          <h2 className="text-center m-2" style={{ fontSize: '35px' }}>
            Register
          </h2>
          <div>
            <input
              type="text"
              placeholder="name"
              className="form-control"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="email"
              className="form-control"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="password"
              className="form-control"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="confirm password"
              className="form-control"
              required
              value={cpassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
            <button onClick={register} className="btn mt-3 mb-3">
              REGISTER
            </button>
            <br />
            <a style={{ color: 'black' }} href="/login">
              Click here to Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registerscreen;
