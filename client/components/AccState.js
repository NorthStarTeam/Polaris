import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = props => {
  const [username, setName] = useState('');
  const [password, setPass] = useState('');
  const [isLogin, setLogin] = useState(false);

  const userObj = {
    username,
    setName,
    password,
    setPass,
    isLogin,
    setLogin,
  };

  return (
    <UserContext.Provider value={userObj}>
      {props.children}
    </UserContext.Provider>
  );
};
