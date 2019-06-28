import React from 'react';
import { Table } from 'react-bootstrap';
import './ShowUsernames.scss';

export default({ showUsername }) => {

  // const usernamesTable = showUsername.map((username, index) => (
  //   <tr>
  //     <td>{index + 1}</td>
  //     <td>{username}</td>
  //   </tr>
  // ));
  console.log(showUsername);

  const keys = Object.keys(showUsername);

  const players = keys.map((key, index) => (
    <tr key={key}>
      <td>{index + 1}</td>
      <td>{showUsername[key].username}</td>
    </tr>
  ))

  return (
    <div className="ShowUsernames-container">
      <Table>
        <thead>
          <tr>
            <th>Lanes</th>
            <th>Players</th>
          </tr>
        </thead>
        <tbody>
          {players}
        </tbody>
      </Table>
    </div>
  );
};
