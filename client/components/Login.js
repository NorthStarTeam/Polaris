import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setName] = useState('');
  const [password, setPass] = useState('');

  const handleInputName = event => {
    // console.log('EVENT name', event.target.value);
    setName(event.target.value);
  };

  const handleInputPass = event => {
    // console.log('EVENT pass', event.target.value);
    setPass(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/login', {
      headers: { 'Content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })
      .then(db => db.json())
      .then(res => {
        console.log(`username is: ${username}`);
        console.log('res', res);
        // this.setState({ loggedin: res });
      });
  };

  return (
    <div>
      <h1>Log In</h1>

      <div className="login-box">
        <form onSubmit={e => handleSubmit(e)} className="login-form">
          <input
            className="login-input"
            placeholder="Username"
            type="text"
            // value={props.name}
            onChange={handleInputName}
          ></input>
          <input
            className="login-input"
            placeholder="Password"
            type="text"
            // value={props.name}
            onChange={handleInputPass}
          ></input>

          {/* Submit Login Request */}
          <input className="login-button" type="submit" value="Login"></input>
        </form>
      </div>
      {/* <Link to="/signup">Need an account? Sign Up here</Link> */}
    </div>
  );
};

export default Login;

// handleSubmit(event) {
//     const data = {username: this.state.username, password: this.state.password};
//   // console.log('am I here in this universe');
//   fetch('http://localhost:3000/login',{
//       method:'POST',
//       headers:{
//           'Content-Type':'application/json'
//       },
//       body:JSON.stringify(data)
//   }).then(response => response.json())
//   .then(data => {
//       // console.log("we are outside the conditional ", data);

//       if(data.username){
//           this.setState({ redirectToGame: true })
//       } else {
//           alert('that was a bad combo')
//       }

//   });

//   event.preventDefault();
// }
