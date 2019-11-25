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
