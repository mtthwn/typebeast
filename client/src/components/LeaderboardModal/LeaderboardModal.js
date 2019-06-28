import React, { Component } from 'react';
import { Spinner, Modal, Table } from 'react-bootstrap';
import './LeaderboardModal.scss';

const LeaderboardModal = props => {
  const socketIds = Object.keys(props.leaderboard);
  const playerStats = socketIds.map((socketId, index) => {
    const playerProgress = props.leaderboard[socketId].completion.progress;
    const wpm = props.leaderboard[socketId].wpm ? (
      <td>{props.leaderboard[socketId].wpm} </td>
    ) : (
      <td>
        <Spinner animation="border" variant="danger" />
      </td>
    );
    return playerProgress === 1 ? (
      <tr>
        <td>{index + 1}</td>
        <td> {props.leaderboard[socketId].username} </td>
        <td>
          {`${Math.floor(
            props.leaderboard[socketId].completion.progress * 100
          )}%`}
        </td>
        {wpm}
      </tr>
    ) : (
      <tr>
        <td>{index + 1}</td>
        <td> {props.leaderboard[socketId].username} </td>
        <td>
          {`${Math.floor(
            props.leaderboard[socketId].completion.progress * 100
          )}%`}
        </td>
        {wpm}
      </tr>
    );
  });

  console.log('Placing is', props.placings);
  return (
    <div>
      {/* <Button variant="primary" onClick={this.handleShow}>
        Show Stats
      </Button> */}
      <Modal
        show={true}
        // onHide={this.handleHide}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Race Results
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Ranking</th>
                <th>Username</th>
                <th>Completion</th>
                <th>WPM</th>
              </tr>
            </thead>
            <tbody>{playerStats}</tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LeaderboardModal;
