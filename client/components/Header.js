import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './AccState';

const Header = () => {
  const userObj = useContext(UserContext);
  const { isLogin } = userObj;

  const headerLeft = () => {
    return (
      <ul className="link-left">
        <li>
          <Link to="/">Polaris</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    );
  };

  if (isLogin) {
    return (
      <div className="div-ul">
        {headerLeft()}
        <ul className="link-right">
          <li>
            <Link to="/logout">LogOut</Link>
          </li>
          <li>
            <Link to="/setting">Settings</Link>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="div-ul">
        {headerLeft()}
        <ul className="link-right">
          <li>
            <Link to="/signup">Join</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    );
  }
};

export default Header;

// <div class="card card-body text-center">
//   <h1>
//     <i class="fa fa-sticky-note"></i> MiNote
//   </h1>
//   <p>Create an account or login</p>
//   <a href="/users/register" class="btn btn-primary btn-block mb-2">
//     Register
//   </a>
//   <a href="/users/login" class="btn btn-secondary btn-block">
//     Login
//   </a>

//   <a href="/users/auth/github" class="btn btn-info btn-block">
//     <i class="fa fa-github-alt"></i> Login with Github
//   </a>
//   <a href="/users/auth/fb" class="btn btn-primary btn-block">
//     <i class="fa fa-facebook-official"></i> Login with Facebook
//   </a>
//   <a href="/users/auth/gg" class="btn btn-warning btn-block">
//     <i class="fa fa-facebook-official"></i> Login with Google
//   </a>
// </div>;
