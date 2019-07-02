import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Spinner, Modal, Table } from 'react-bootstrap';
import './LeaderboardModal.scss';
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import raceResultsIcon from './../../img/result-icon.png';

const LeaderboardModal = ({ leaderboard }) => {
  const socketIds = Object.keys(leaderboard);

  const playerStats = socketIds.map((socketId, index) => {
    const position = leaderboard[socketId].position ? (
      <td>{leaderboard[socketId].position}</td>
    ) : (
      <td>
        <Spinner animation="border" variant="success" />
      </td>
    );

    const wpm = leaderboard[socketId].wpm ? (
      <td>{leaderboard[socketId].wpm} </td>
    ) : (
      <td>
        <Spinner animation="border" variant="success" />
      </td>
    );

    const completed = leaderboard[socketId].completed ? (
      <td>Completed</td>
    ) : (
      <td>In Progress</td>
    );

    return (
      <tr>
        {position}
        <td> {leaderboard[socketId].username} </td>
        <td>
          {' '}
          {`${Math.floor(
            leaderboard[socketId].completion.progress * 100
          )}%`}{' '}
        </td>
        {completed}
        {wpm}
      </tr>
    );
  });

  return (
    <div className="Leaderboard-Modal">
      <Modal show={true} dialogClassName="modal-100w" centered>
        <Modal.Header>
          <Modal.Title id="RaceResults">Race Results</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="Result-wrapper">
            <img src={raceResultsIcon} />
          </div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Ranking</th>
                <th>Username</th>
                <th>Completed</th>
                <th>Completion</th>
                <th>WPM</th>
              </tr>
            </thead>
            <tbody>{playerStats}</tbody>
          </Table>
          <Button variant="none" href="/play" className="PlayAgain-btn">
            Play Again
          </Button>
          <Link to={'/'}>
            <Button variant="none" className="Home-btn">
              Home
            </Button>
          </Link>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LeaderboardModal;
