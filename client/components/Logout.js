import React, { useHistory } from 'react';

const Logout = () => {
  let history = useHistory();

  const userObj = useContext(UserContext);
  const { username, setName, password, setPass, isLogin, setLogin } = userObj;

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/login', {
      headers: { 'Content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })
      .then(res => res.json())
      .then(data => {
        // console.log('res from server =', data);
        if (data.err) {
          setLogin(false);
          setName('Username');
          setPass('Password');
        } else setLogin(true);
      });
  };

  if (isLogin)
    return (
      <Redirect
        to={{
          pathname: '/profile',
          // state: { from: location },
        }}
      />
    );

  return (
    <div>
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push('/'));
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default Logout;
