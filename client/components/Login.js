import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>We Login to Profile</h1>
      
      <div className='login-box'>
        <form className='login-form'>

          {/* Username Input */}
          <input className='login-input' placeholder='username' type='text' ></input>

          {/* Password Input */}
          <input className='login-input' placeholder='password' type='text'></input>

          {/* Submit Login Request */}
          <input className='login-button' type='submit' value='Login'></input>
        </form>
      </div>

    </div>
  );
};

export default Login;
