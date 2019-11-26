import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = props => {
  // const [username, setName] = useState([]);
  const [num, setNum] = useState(0);

  const [user, setUser] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: 23124,
    },
  ]);
  return (
    <UserContext.Provider value={([user, setUser], [num, setNum])}>
      {props.children}
    </UserContext.Provider>
  );
};
