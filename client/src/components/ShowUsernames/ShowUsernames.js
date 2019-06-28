import React from 'react';
import { Table } from 'react-bootstrap';
import './ShowUsernames.scss';

export default({ showUsername }) => {

  const usernamesTable = showUsername.map((username, index) => (
    <tr>
      <td>{index + 1}</td>
      <td>{username}</td>
    </tr>
  ));
  return (
    <div className="ShowUsernames-container">
      <Table responsive>
        <thead>
          <tr>
            <th>Lanes</th>
            <th>Players</th>
          </tr>
        </thead>
        <tbody>
          {usernamesTable}
        </tbody>
      </Table>
    </div>
  );
};
