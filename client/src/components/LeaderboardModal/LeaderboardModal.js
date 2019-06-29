import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Spinner, Modal, Table } from 'react-bootstrap';
// import EndGameButton from './../EndGameButtons/EndGameButtons';
import './LeaderboardModal.scss';

const LeaderboardModal = props => {
  const socketIds = Object.keys(props.leaderboard);
  const playerStats = socketIds.map((socketId, index) => {
    const playerProgress = props.leaderboard[socketId].completion.progress;
    const wpm = props.leaderboard[socketId].wpm ? (
      <td>{props.leaderboard[socketId].wpm} </td>
    ) : (
      <td>
        <Spinner animation="border" variant="success" />
      </td>
    );
    return (
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
      <Modal show={true} dialogClassName="modal-100w" centered>
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
          <Button className="PlayAgain-btn" variant="primary">
            <Link to="/play">Play Again</Link>
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LeaderboardModal;
