import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Spinner, Modal, Table } from 'react-bootstrap';
// import EndGameButton from './../EndGameButtons/EndGameButtons';
import './LeaderboardModal.scss';

// const LeaderboardModal = ({ leaderboard, placings, modalShow, modalHide }) => {
//   const socketIds = Object.keys(leaderboard);

//   const playerStats = socketIds.map((socketId, index) => {
//     const wpm = leaderboard[socketId].wpm ? (
//       <td>{leaderboard[socketId].wpm} </td>
//     ) : (
//       <td>
//         <Spinner animation="border" variant="success" />
//       </td>
//     );
//     return (
//       <tr>
//         <td>{index + 1}</td>
//         <td> {leaderboard[socketId].username} </td>
//         <td>
//           {`${Math.floor(leaderboard[socketId].completion.progress * 100)}%`}
//         </td>
//         {wpm}
//       </tr>
//     );
//   });

//   return (
//     <div>
//       <Modal
//         show={modalShow}
//         onHide={modalHide}
//         dialogClassName="modal-100w"
//         centered
//       >
//         <Modal.Header>
//           <Modal.Title id="RaceResults">Race Results</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Table striped bordered hover variant="dark">
//             <thead>
//               <tr>
//                 <th>Ranking</th>
//                 <th>Username</th>
//                 <th>Completion</th>
//                 <th>WPM</th>
//               </tr>
//             </thead>
//             <tbody>{playerStats}</tbody>
//           </Table>
//           {/* <Link to="/play"> */}
//           <Button onClick={modalHide} className="PlayAgain-btn">
//             Play Again
//           </Button>
//           {/* </Link> */}
//           <Link to={'/'}>
//             <Button className="Home-btn">Home</Button>
//           </Link>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };
let socketIds;
let playerStats;
let wpm;
class LeaderboardModal extends Component {
  constructor(props, context) {
    super(props, context);

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

    playerStats = socketIds.map((socketId, index) => {
      wpm = this.props.leaderboard[socketId].wpm ? (
        <td>{this.props.leaderboard[socketId].wpm} </td>
      ) : (
        <td>
          <Spinner animation="border" variant="success" />
        </td>
      );
      return (
        <tr>
          <td>{index + 1}</td>
          <td> {this.props.leaderboard[socketId].username} </td>
          <td>
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
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
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
            <Button
              href="/play"
              onClick={this.handleHide}
              className="PlayAgain-btn"
            >
              Play Again
            </Button>
            <Link to={'/'}>
              <Button className="Home-btn">Home</Button>
            </Link>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default LeaderboardModal;
