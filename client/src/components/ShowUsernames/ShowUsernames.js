import React from 'react';
import { Table } from 'react-bootstrap';
import './ShowUsernames.scss';

const ShowUsernames = ({ showUsername }) => {
  console.log(showUsername);
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
          <tr>
            <td>1</td>
            <td>{showUsername[0]}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{showUsername[1]}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{showUsername[2]}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{showUsername[3]}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ShowUsernames;
