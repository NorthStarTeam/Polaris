import React from 'react';

const EditCell = ({ onTableUpdate, cellData }) => {
  return (
    <td>
      <input
        type="text"
        name={cellData.type}
        id={Math.floor(Math.random() * 999999) + cellData.id}
        value={cellData.value}
        onChange={onTableUpdate}
      />
    </td>
  );
};

export default EditCell;
