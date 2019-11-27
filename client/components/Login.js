import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from './AccState';

const Login = () => {
  const userObj = useContext(UserContext);
  const {
    username,
    setName,
    password,
    setPass,
    isLogin,
    setLogin,
    dash,
    setDash,
  } = userObj;

  const handleInputName = event => {
    setName(event.target.value);
  };
  const handleInputPass = event => {
    setPass(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/login', {
      headers: { 'Content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('res json from server =', data);
        if (data.err) {
          setLogin(false);
          setName('Username');
          setPass('Password');
        } else {
          setLogin(true);
          setDash(data); // display data to dashboard
        }
      });
  };

  if (isLogin)
    return (
      <Redirect
        to={{
          pathname: '/dashboard',
          // dashboard
          // state: { from: location },
        }}
      />
    );

  return (
    <div className="div-login">
      <h1>Log In</h1>
      <div className="login-box">
        <form onSubmit={e => handleSubmit(e)} className="login-form">
          <input
            className="login-input"
            placeholder="Username"
            type="text"
            value={username}
            onChange={handleInputName}
          ></input>
          <input
            className="login-input"
            placeholder="Password"
            type="text"
            value={password}
            onChange={handleInputPass}
          ></input>
          {/* Submit Login Request */}
          <input className="button" type="submit" value="Login"></input>
        </form>
      </div>
    </div>
  );
};

export default Login;
