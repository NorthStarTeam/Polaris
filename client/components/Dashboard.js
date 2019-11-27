import React, { useContext } from 'react';
import { UserContext } from './AccState';
import DashList from './DashList';

const Dashboard = () => {
  const userObj = useContext(UserContext);
  const { dash, setDash } = userObj;
  return (
    <div>
      <h1>Dashboard</h1>
      {/* {dash.map(item => (
        <DashList name={item.name} price={item.price} key={item.id} />
      ))} */}
    </div>
  );
};

// {
//   company: 'company',
//   position: 'title',
//   contact: 'contact',
//   phone: 'phone',
//   email: 'email',
//   stage: 'stage',
//   dueDate: 'due date',
//   comment: 'comments',
// },

export default Dashboard;
