import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = props => {
  const [username, setName] = useState('');
  const [password, setPass] = useState('');
  const [isLogin, setLogin] = useState(false);
  const [dash, setDash] = useState([
    {
      company: 'company',
      position: 'position',
      contact: 'contact',
      // phone: 'phone',
      // email: 'email',
      // stage: 'stage',
      next: 'next',
      body: 'body',
      dueDate: 'due date',
      // comment: 'comments',
    },
  ]);

  const userObj = {
    username,
    setName,
    password,
    setPass,
    isLogin,
    setLogin,
    dash,
    setDash,
  };

  return (
    <UserContext.Provider value={userObj}>
      {props.children}
    </UserContext.Provider>
  );
};
