import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div>
      <h1>We create new user account</h1>

      <div className="signup-box">
        <form className="signup-form">
          {/* Input Signup Username */}
          <input className="userName" name="username" placeholder="Username" />

          {/* Input Signup Password */}
          <input className="password" name="password" placeholder="Password" />

          {/* Submit Signup Request */}
          <input className="signup-button" type="submit" value="Signup"></input>
        </form>
      </div>
      <Link to="/login">Already have account, signin</Link>
    </div>
  );
};

export default SignUp;
