import React, { useState, createContext, useReducer } from 'react';
import { AccReducer } from './reducers';

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

  const [company, setCompany] = useState([
    {
      id: 0,
      company: 'company1',
      position: 'position1',
      contact: 'contact1',
      phone: 'phone1',
      due_date: 'due date1',
      next: 'follow up1',
      body: 'comment1',
    },
    {
      id: 1,
      company: 'company2',
      position: 'position2',
      contact: 'contact2',
      phone: 'phone2',
      due_date: 'due date2',
      next: 'follow up2',
      body: 'comment2',
    },
    {
      id: 2,
      company: 'company3',
      position: 'position3',
      contact: 'contact3',
      phone: 'phone3',
      due_date: 'due date3',
      next: 'follow up3',
      body: 'comment3',
    },
  ]);

  const [filTxt, setFilTxt] = useState('');

  const userObj = {
    username,
    setName,
    password,
    setPass,
    isLogin,
    setLogin,
    dash,
    setDash,
    company,
    setCompany,
    filTxt,
    setFilTxt,
  };

  return (
    <UserContext.Provider value={userObj}>
      {props.children}
    </UserContext.Provider>
  );
};
