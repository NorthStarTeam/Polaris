import React from 'react';
import EditCell from './EditCell';

const DashRow = ({ onTableUpdate, row, onRowDel }) => {
  const onDelEvent = () => onRowDel(row);

  return (
    <tr className="eachRow">
      <EditCell
        onTableUpdate={onTableUpdate}
        cellData={{
          type: 'company',
          value: row.company,
          id: row.id,
        }}
      />
      <EditCell
        onTableUpdate={onTableUpdate}
        cellData={{
          type: 'position',
          value: row.position,
          id: row.id,
        }}
      />
      <EditCell
        onTableUpdate={onTableUpdate}
        cellData={{
          type: 'contact',
          value: row.contact,
          id: row.id,
        }}
      />
      <EditCell
        onTableUpdate={onTableUpdate}
        cellData={{
          type: 'phone',
          value: row.phone,
          id: row.id,
        }}
      />
      <EditCell
        onTableUpdate={onTableUpdate}
        cellData={{
          type: 'due_date',
          value: row.due_date,
          id: row.id,
        }}
      />
      <EditCell
        onTableUpdate={onTableUpdate}
        cellData={{
          type: 'next',
          value: row.next,
          id: row.id,
        }}
      />
      <EditCell
        onTableUpdate={onTableUpdate}
        cellData={{
          type: 'body',
          value: row.body,
          id: row.id,
        }}
      />
      <td className="del-cell">
        <input
          type="button"
          onClick={onDelEvent}
          value="X"
          className="del-btn"
        />
      </td>
    </tr>
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

export default DashRow;
