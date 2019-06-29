import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Spinner, Modal, Table } from 'react-bootstrap';
import './LeaderboardModal.scss';

const LeaderboardModal = ({ leaderboard }) => {
  const socketIds = Object.keys(leaderboard);

  const playerStats = socketIds.map((socketId, index) => {
    const wpm = leaderboard[socketId].wpm ? (
      <td>{leaderboard[socketId].wpm} </td>
    ) : (
      <td>
        <Spinner animation="border" variant="success" />
      </td>
    );

    const completion = leaderboard[socketId] ? (
      <td>
        {`${Math.floor(leaderboard[socketId].completion.progress * 100)}%`}
      </td>
    ) : (
      <td>
        {`${Math.floor(leaderboard[socketId].completion.progress * 100)}%`}
        [Disconnected]
      </td>
    )
    return (
      <tr>
        <td>{index + 1}</td>
        <td> {leaderboard[socketId].username} </td>
        {completion}
        {wpm}
      </tr>
    );
  });

  return (
    <div>
      <Modal show={true} dialogClassName="modal-100w" centered>
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
          <Button href="/play" className="PlayAgain-btn">
            Play Again
          </Button>
          <Link to={'/'}>
            <Button className="Home-btn">Home</Button>
          </Link>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LeaderboardModal;
