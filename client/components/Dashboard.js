import React, { useContext } from 'react';
import { UserContext } from './AccState';
import DashList from './DashList';

const Dashboard = () => {
  const userObj = useContext(UserContext);
  const { dash, setDash } = userObj;
  return (
    <div>
      <h1>Dashboard</h1>
      <table className="dash-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>Contact</th>
            <th>Phone</th>
            <th>Due Date</th>
            <th>Follow Up</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {dash.map(item => (
            <DashList
              company={item.company}
              position={item.position}
              contact={item.contact}
              phone={item.phone}
              date={item.due_date}
              next={item.next}
              body={item.body}
              key={item.id * 1}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Company</td>
            <td>Position</td>
            <td>Contact</td>
            <td>Phone</td>
            <td>Due Date</td>
            <td>Follow Up</td>
            <td>Comment</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

// [ { id: 1,
//     username: 'foo',
//     password: 'bar',
//     email: 'ben.ray@gmail.com',
//     name: 'polaris admin',
//     updated_at: 2019-11-26T04:42:01.297Z,
//     url: 'http://google.com',
//     position: 'Senior Software Engineer',
//     company: 'Google',
//     contact: 'Ben Ray',
//     phone: '333-666-9999',
//     stage: 1,
//     next: 'Call',
//     due_date: 2019-11-26T04:41:56.308Z,
//     application_id: 1,
//     message_id: null,
//     body: 'Follow up email content.' } ]

export default Dashboard;
