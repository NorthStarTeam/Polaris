import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // const redirectToGame = this.state.redirectToGame;
  // if (redirectToGame) return <Redirect to="/game" />;
  //   <Redirect to="/Home" />;
  return (
    <div>
      <h1>We on Home Page</h1>
      <Link to="/profile">Go to profile</Link>
    </div>
  );
};

export default Home;
