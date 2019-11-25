import React, { useContext } from 'react';
import { UserContext } from './UserState';

const Text = () => {
  const [user] = useContext(UserContext);
  return (
    <div>
      <p>Testing context: {user[0].name}</p>
    </div>
  );
};

export default Text;
