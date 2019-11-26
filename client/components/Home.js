import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // const redirectToGame = this.state.redirectToGame;
  // if (redirectToGame) return <Redirect to="/game" />;
  //   <Redirect to="/Home" />;
  return (
    <div>
      <h1>We on Home Page</h1>
      <Link to="/login">Go to Login</Link>
      <br></br>
      <Link to="/signup">Go to Signup</Link>
    </div>
  );
};

export default Home;

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
