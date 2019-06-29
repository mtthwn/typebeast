import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Spinner, Modal, Table } from 'react-bootstrap';
// import EndGameButton from './../EndGameButtons/EndGameButtons';
import './LeaderboardModal.scss';

const handleHide = e => {
  e.preventDefault();
  return `show={false}`;
};

const LeaderboardModal = props => {
  const socketIds = Object.keys(props.leaderboard);
  const playerStats = socketIds.map((socketId, index) => {
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

  return (
    <div>
      <Modal
        show={true}
        onHide={handleHide}
        dialogClassName="modal-100w"
        centered
      >
        <Modal.Header>
          <Modal.Title id="RaceResults">Race Results</Modal.Title>
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
          <Link to="/play">
            <Button onClick={handleHide} className="PlayAgain-btn">
              Play Again
            </Button>
          </Link>
          <Link to={'/'}>
            <Button className="Home-btn">Home</Button>
          </Link>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LeaderboardModal;
