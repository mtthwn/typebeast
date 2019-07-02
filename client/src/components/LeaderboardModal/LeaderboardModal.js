import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Spinner, Modal, Table } from 'react-bootstrap';
import './LeaderboardModal.scss';
import raceResultsIcon from './../../img/result-icon.png';
import firstPlace from './../../img/first.png';
import secondPlace from './../../img/second.png';
import thirdPlace from './../../img/third.png';
import fourthPlace from './../../img/parti.png';

const LeaderboardModal = ({ leaderboard }) => {
  const socketIds = Object.keys(leaderboard);

  const playerStats = socketIds.map((socketId, index) => {
    const position = leaderboard[socketId].position ? (
      <td>
        {leaderboard[socketId].position === 1 && <img src={firstPlace} />}
        {leaderboard[socketId].position === 2 && <img src={secondPlace} />}
        {leaderboard[socketId].position === 3 && <img src={thirdPlace} />}
        {leaderboard[socketId].position > 3 && <img src={fourthPlace} />}
      </td>
    ) : (
      <td>
        <Spinner animation="border" variant="success" />
      </td>
    );

    const wpm = leaderboard[socketId].wpm ? (
      <td>{leaderboard[socketId].wpm} </td>
    ) : (
      <td style={{ color: '#04ad67' }}>In Progress</td>
    );

    const completed = leaderboard[socketId].completed ? (
      <td>Completed</td>
    ) : (
      <td style={{ color: '#04ad67' }}>In Progress</td>
    );

    return (
      <tr style={position ? { backgroundColor: '#04ad67' } : ''}>
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
        <Modal.Body>
          <div className="Result-wrapper">
            <img src={raceResultsIcon} />
          </div>
          <Table variant="dark">
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
