import React, { useContext } from 'react';
import { UserContext } from './AccState';
import DashList from './DashList';
import DashTable from './DashTable/DashTable';
import SearchBar from './DashTable/SearchBar';

const Dashboard = () => {
  const userObj = useContext(UserContext);
  const { company, setCompany, filTxt, setFilTxt } = userObj;

  const handleUserInput = filterText => {
    setFilTxt(filterText);
  };
  const handleRowDel = product => {
    const index = company.indexOf(product);
    company.splice(index, 1);
    setCompany([...company]);
  };
  const handleAddEvent = evt => {
    const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    const product = {
      id: id,
      company: '',
      position: '',
      contact: '',
      phone: '',
      due_date: '',
      next: '',
      body: '',
    };
    setCompany([...company, product]);
  };

  const handleTable = evt => {
    const item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value,
      // company: evt.target.company,
      // position: evt.target.position,
      // contact: evt.target.contact,
      // phone: evt.target.phone,
      // due_date: evt.target.due_date,
      // next: evt.target.next,
      // body: evt.target.body,
    };
    const products = company.slice();
    const newProducts = products.map(elem => {
      for (let key in elem) {
        if (key === item.name && elem.id === item.id) {
          elem[key] = item.value;
        }
      }
      return elem;
    });
    setCompany([...newProducts]);
    console.log('new-company', company);
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
