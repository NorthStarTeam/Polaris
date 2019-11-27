import React, { useHistory } from 'react';

const Logout = () => {
  let history = useHistory();
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
