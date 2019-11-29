import React from 'react';

const DashList = ({ company, position, contact, phone, date, next, body }) => {
  return (
    <tr className="row">
      <td>{company}</td>
      <td>{position}</td>
      <td>{contact}</td>
      <td>{phone}</td>
      <td>{date}</td>
      <td>{next}</td>
      <td>{body}</td>
    </tr>
  );
};

export default DashList;
