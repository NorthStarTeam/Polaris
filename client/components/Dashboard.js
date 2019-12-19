import React, { useContext } from 'react';
import { UserContext } from '../context/AccState';
import DashTable from './DashTable/DashTable';
import SearchBar from './DashTable/SearchBar';

const Dashboard = () => {
  const userObj = useContext(UserContext);
  const { company, setCompany, filTxt, setFilTxt } = userObj;

  const handleUserInput = filterText => setFilTxt(filterText);

  const handleRowDel = product => {
    const index = company.indexOf(product);
    company.splice(index, 1);
    setCompany([...company]);
  };

  const handleAddEvent = evt => {
    const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    const newRow = {
      id: id,
      company: '',
      position: '',
      contact: '',
      phone: '',
      due_date: '',
      next: '',
      body: '',
    };
    setCompany([...company, newRow]);
  };

  const handleTable = e => {
    const products = company.slice();
    const newProducts = products.map(elem => {
      for (let key in elem) {
        if (key === e.target.name && elem.id === e.target.id) {
          console.log('inside =>', elem.id, e.target.id, e.target.value);
          elem[key] = e.target.value;
        }
        // e.preventDefault();
        // fetch('/message', {
        //   headers: { 'Content-type': 'application/json' },
        //   method: 'PUT',
        //   body: JSON.stringify({ id: e.target.id }),
        // })
        //   .then(res => res.json())
        //   .then(data => {
        //     console.log('data from server =', data);
        //     setCompany([...newProducts]);
        //     console.log('new-company', company);
        //   });
      }
      return elem;
    });
    setCompany([...newProducts]);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <SearchBar filTxt={filTxt} onUserInput={handleUserInput} />
      <DashTable
        onTableUpdate={handleTable}
        onRowAdd={handleAddEvent}
        onRowDel={handleRowDel}
        company={company}
        filTxt={filTxt}
      />
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

{
  /* <table className="dash-table">
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
      </table> */
}

// const DashList = ({ company, position, contact, phone, date, next, body }) => {
//   return (
//     <tr className="row">
//       <td>{company}</td>
//       <td>{position}</td>
//       <td>{contact}</td>
//       <td>{phone}</td>
//       <td>{date}</td>
//       <td>{next}</td>
//       <td>{body}</td>
//     </tr>
//   );
// };

// export default DashList;
