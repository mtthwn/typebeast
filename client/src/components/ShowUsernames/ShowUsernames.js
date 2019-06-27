import React from 'react';
import { Table } from 'react-bootstrap';
import './ShowUsernames.scss';

const ShowUsernames = () => {
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
          <tr>
            <td>1</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ShowUsernames;
