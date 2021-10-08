import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../action/userAction';
import Error from '../components/Error';
import Loading from '../components/Loading';
const Loginscreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginstate;
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('currentuser')) {
      window.location.href = '/';
    }
  }, []);
  function login() {
    const user = { email, password };
    console.log(user);
    dispatch(loginUser(user));
  }
  return (
    <div className="login">
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="text-center m-2" style={{ fontSize: '35px' }}>
            Login
          </h2>
          {loading && <Loading />}
          {error && <Error error="Invalid Credential" />}
          <div>
            <input
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="btn mt-3 mb-3" onClick={login}>
              Login
            </button>
            <br />
            <a style={{ color: 'black' }} href="/register">
              Click here to Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginscreen;
