import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [username, setName] = useState('');
  const [password, setPass] = useState('');
  const [redirect, setRedirect] = useState(false);

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
        console.log('res from server =', data);
        if (data.err) {
          setRedirect(false);
          setName('Username');
          setPass('Password');
        } else setRedirect(true);
      });
  };

  if (redirect)
    return (
      <Redirect
        to={{
          pathname: '/profile',
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
          <input
            id="button"
            className="login-button"
            type="submit"
            value="Login"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Login;
