import React, { Component } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import './LeaderboardModal.scss';

let socketIds;
let playerStats;
let wpm;

class LeaderboardModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true
    };

    this.handleShow = () => {
      this.setState({ show: true });
    };

    this.handleHide = () => {
      this.setState({ show: false });
    };

    socketIds = Object.keys(this.props.leaderboard);
    playerStats = socketIds.map(socketId => {
      wpm = this.props.leaderboard[socketId].wpm ? (
        <li> WPM: {this.props.leaderboard[socketId].wpm} </li>
      ) : (
        ''
      );
      return (
        <tr>
          <td> User: {this.props.leaderboard[socketId].username} </td>
          <td>
            Completion:
            {`${Math.floor(
              this.props.leaderboard[socketId].completion.progress * 100
            )}%`}
          </td>
          {wpm}
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Show Stats
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
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
  }
}

export default LeaderboardModal;
