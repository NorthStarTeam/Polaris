import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  const handleInputName = event => {
    console.log(event, 'EVENT TARGET', event.target.value);
    // this.setState({ name: event.target.value });
  };

  const handleInputPassword = event => {
    console.log(event, 'EVENT TARGET', event.target.value);
    // this.setState({ password: event.target.value });
  };

  const handleSubmit = e => {
    event.preventDefault();
    console.log('e.target', e.target);
    //   fetch('/login', {
    //     headers: { 'Content-type': 'application/json' },
    //     method: 'POST',
    //     body: JSON.stringify({
    //       name: this.state.name,
    //       roomName: this.state.roomName,
    //       password: this.state.password,
    //       socketId: this.state.socketId,
    //     }),
    //   })
    //     .then(db => db.json())
    //     .then(res => {
    //       console.log(`${this.state.name} is in room: ${this.state.roomName}`);
    //       this.setState({ loggedin: res });
    //     });
  };
  return (
    <div>
      <h1>We Login to Profile</h1>

      <div className="login-box">
        <form onSubmit={e => handleSubmit(e)} className="login-form">
          <input
            className="login-input"
            placeholder="username"
            type="text"
            // value={props.name}
            onChange={handleInputName}
          ></input>

          {/* Password Input */}
          <input
            className="login-input"
            placeholder="password"
            type="text"
          ></input>

          {/* Submit Login Request */}
          <input className="login-button" type="submit" value="Login"></input>
        </form>
      </div>
      <Link to="/signup">Need an account? Sign Up here</Link>
    </div>
  );
};

export default Login;

// <div className="loginBox">
//   <form onSubmit={props.handleSubmit}>
//     <div className="inputBoxOnLoginComponent">
//       <label>
//         {/* Username input field */}
//         <input
//           placeholder="Username"
//           type="text"
//           value={props.name}
//           onChange={props.handleChangeName}
//         />
//       </label>
//       <label>
//         {/* Room name input field */}
//         <input
//           placeholder="Room Name"
//           type="text"
//           value={props.roomName}
//           onChange={props.handleChangeRoom}
//         />
//       </label>
//       <label>
//         {/* Password input field */}
//         <input
//           placeholder="Password"
//           type="text"
//           value={props.password}
//           onChange={props.handleChangePassword}
//         />
//       </label>
//       {/* Main submit button */}
//       <input id="loginButton" type="submit" value="Login" />
//     </div>
//   </form>
//   <img id="scribbleLogo" src="scribble-svgrepo-com.svg" alt="" />
// </div>;
