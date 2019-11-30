import React from 'react';
import DashRow from './DashRow';

const DashTable = ({ onTableUpdate, onRowAdd, onRowDel, company, filTxt }) => {
  const row = company.map(elem => {
    if (elem.position.indexOf(filTxt) === -1) return;
    return (
      <DashRow
        onTableUpdate={onTableUpdate}
        row={elem}
        onRowDel={onRowDel}
        key={elem.id}
      />
    );
  });

  return (
    <div>
      <button className="btn-Add" type="button" onClick={onRowAdd}>
        Add
      </button>
      <br></br>
      <table className="table">
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
        <tbody>{row}</tbody>
      </table>
    </div>
  );
};

export default DashTable;
