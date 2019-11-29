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
      phone: 'phone',
      due_date: 'due date',
      next: 'follow up',
      body: 'comment',
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
