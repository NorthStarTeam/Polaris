import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from './AccState';

const SignUp = () => {
  const userObj = useContext(UserContext);
  const { username, setName, password, setPass, isLogin, setLogin } = userObj;

  const handleInputName = event => {
    setName(event.target.value);
  };
  const handleInputPass = event => {
    setPass(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/signup', {
      headers: { 'Content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('signup from server =', data);
        if (data.exist) {
          setLogin(false);
          setName('');
          setPass('');
        } else setLogin(true);
      });
  };

  if (isLogin)
    return (
      <Redirect
        to={{
          pathname: '/dashboard',
        }}
      />
    );

  return (
    <div className="div-signup">
      <h1>Sign Up</h1>
      <div className="signup-box">
        <form onSubmit={e => handleSubmit(e)} className="signup-form">
          <input
            className="signup-input"
            placeholder="Username"
            type="text"
            value={username}
            onChange={handleInputName}
          />
          <input
            className="signup-input"
            placeholder="Password"
            type="text"
            value={password}
            onChange={handleInputPass}
          />
          <input className="button" type="submit" value="Signup"></input>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
