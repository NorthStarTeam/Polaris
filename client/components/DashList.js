import React, { useContext } from 'react';

const DashList = ({ name, price }) => {
  return (
    <div>
      <ul>
        <li>{name}</li>
      </ul>
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

export default DashList;
