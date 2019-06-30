import React, { Component, Fragment } from 'react';
import './GameUI.scss';
// import DisplayQuote from './GameUI/GameUI';
import Background from './../components/Background/Background';
import DisplayQuoteArea from './../components/Quote/Quote';
import CarWPMGauge from './../components/Guages/WPMGuage';
import Minimap from './../components/Minimap/Minimap';
import DisplayQuoteInput from './../components/GameInput/GameInput';
import NosGauge from './../components/Guages/NOSGuage';
import socketIOClient from 'socket.io-client';
import StartGameButton from './../components/StartGameButton/StartGameButton';
import LeaderboardModal from './../components/LeaderboardModal/LeaderboardModal';

const renderGame = props => {
  const countdown = props.countdown ? (
    <h1>{props.countdownCount}</h1>
  ) : (
    <StartGameButton emitStart={props.onEmitStart} />
  );

  const gameStart = props.timerStart ? (
    <Fragment>
      <DisplayQuoteArea
        completed={props.wordsCompleted}
        input={props.userInput}
        currentWord={props.words[props.index]}
        remaining={props.remainingPhrase}
      />
      <DisplayQuoteInput onUserInputChange={props.onUserInputChange} />
    </Fragment>
  ) : (
    <DisplayQuoteArea
      completed={''}
      input={''}
      currentWord={''}
      remaining={'Please wait for the game to start'}
    />
  );

  return props.timerFinished ? (
    <Fragment>
      <LeaderboardModal
        leaderboard={props.leaderboard}
        placings={props.placings}
      />
    </Fragment>
  ) : (
    <div className="DisplayQuoteUI-container">
      <CarWPMGauge
        wpm={props.wpm}
        second={props.sec}
        char={props.char}
        socket={props.socket}
      />
      <div className="DisplayQuote-container">
        {countdown}
        <Minimap playerProgress={props.playerProgress} />
        {gameStart}
      </div>
      <NosGauge position={props.position} />
    </div>
  );
};

class PlayGameLogic extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        username: 'Guest',
        car: 'default'
      },
      countdownCount: 5,
      countdown: false,
      loading: true,
      words: [],
      userInput: '',
      remainingPhrase: '',
      index: 0,
      fullPhrase: '',
      char: 0,
      sec: 0,
      carPositioning: {},
      timer: 0,
      timerStart: false,
      timerFinished: false,
      finishLine: false,
      // Socket related properties:
      endpoint: 'http://127.0.0.1:8080',
      gameStart: false,
      roomNumber: 0,
      playersInRoom: [],
      playerSocket: '',
      playerProgress: 0,
      wpm: 0,
      wordsCompleted: '',
      socket: '',
      leaderboard: {},
      averageLength: 5,
      position: 0,
      placings: []
    };
  }

  componentDidMount() {
    // Deconstruct this.state.endpoint
    const { endpoint } = this.state;
    // Connect to the socket
    const socket = socketIOClient(endpoint);

    this.setState({
      socket
    });

    socket.on('connect', () => {
      this.state.socket.emit(
        'user-update',
        JSON.stringify({ user: this.state.user })
      );
    });

    socket.on('welcome', message => {
      this.setState({
        playersInRoom: message.clients,
        playerSocket: message.socketId,
        loading: false,
        roomNumber: message.roomNum
      });

      // this.state.socket.emit('user-update', JSON.stringify({ user: this.state.user }));
    });

    socket.on('user-update', data => {
      const formattedData = JSON.parse(data);
      const leaderboard = this.state.leaderboard;
      const carPositioning = this.state.carPositioning;

      // formattedData.forEach(user => {
      //   leaderboard[user] = formattedData[user];
      // })

      for (const user in formattedData) {

        leaderboard[user] = {
          ...formattedData[user],
          completion: { progress: 0 },
          completed: false
        }
        carPositioning[user] = { progress: 0 }
      }
      this.setState(carPositioning);
      this.setState(leaderboard);

    });

    socket.on('new-user-join', message => {
      // console.log(message.description);
      // Display message when new player joins. Import updated room-player list from server.
      this.setState({
        playersInRoom: message.clients
      });

      // console.log(message);
      // console.log(`${this.state.playersInRoom} in room now`);
    });

    socket.on('game-start', message => {
      // console.log(message.description);
      // console.log(message.quote);

      this.onStartCountdown();
      this.onSetQuote(message.quote);

      // Display message saying game will start soon
    });

    socket.on('progress-broadcast', message => {
      const carPositioning = this.state.carPositioning;

      if (carPositioning[message.socketId]) {
        carPositioning[message.socketId] = message.completion;
      }

      this.setState({ carPositioning });

      const leaderboard = this.state.leaderboard;

      if (leaderboard[message.socketId]) {
        leaderboard[message.socketId].completion = message.completion;
      }

      if (leaderboard[message.socketId].completion === true) {
        leaderboard[message.socketId].completed = true
      } else {
        leaderboard[message.socketId].completed = false
      }

      this.setState({ leaderboard });

      const socketId = this.state.socket.id;

      const placings = [];
      for (const player in leaderboard) {
        placings.push({
          player,
          progress: leaderboard[player].completion
            ? leaderboard[player].completion.progress
            : 0
        });
      }

      placings.sort((a, b) => {
        return b.progress - a.progress;
      });

      for (let i = 0; i < placings.length; i++) {
        if (placings[i].player === socketId) {
          this.setState({ position: i + 1 });
        }
      }

      this.setState({ placings });
    });

    socket.on('user-finish', message => {
      // console.log(message);
      const carPositioning = this.state.carPositioning;

      carPositioning[message.socketId] = message.completion;
      this.setState({
        carPositioning
      });

      const leaderboard = this.state.leaderboard;
      leaderboard[message.socketId].wpm = message.wpm;
      leaderboard[message.socketId].completion = message.completion;
      leaderboard[message.socketId].completed = true;
      leaderboard[message.socketId].position = message.position;

      this.setState({
        leaderboard
      });
    });

    socket.on('player-left', message => {
      const formattedClients = message.formattedClients;
      const leaderboard = this.state.leaderboard;
      const clients = Object.keys(leaderboard);
      const carPositioning = this.state.carPositioning;

      if (formattedClients) {
        clients.forEach(client => {
          if (!formattedClients[client] && leaderboard[client]) {
            delete leaderboard[client];
          }

          // Deleting car positioning removes cars from render prior to countdown, but not during game.
          if (!formattedClients[client] && carPositioning[client]) {
            delete carPositioning[client];
          }
        });

        this.setState({ leaderboard, carPositioning });
      }

    });

    socket.on('disconnect', () => {
      alert('Please reload your page');
      this.setState({ leaderboard: {}, placings: [], progress: 0, carPositioning: {} });
    });
  }

  render() {
    return this.props.children({
      ...this.state,
      onUserInputChange: this.onUserInputChange,
      onStartCountdown: this.onStartCountdown,
      onEmitStart: this.onEmitStart
    });
  }

  onUserInputChange = e => {
    e.preventDefault();

    let value = e.target.value;

    const {
      index,
      words,
      wordsCompleted,
      averageLength,
      sec,
      userInput
    } = this.state;

    // if (sec >= 1) {
    //   const char = wordsCompleted.length + userInput.length;
    //   const wpm = Math.floor((char / averageLength / sec) * 60);
    //   this.setState({ wpm });
    // }

    if (value.length > words[index].length) {
      e.target.value = value.slice(0, words[index].length);
    }

    if (value.length > words[index].length) {
      return;
    } else {
      this.setState({ userInput: value });
    }

    if (index === words.length - 1 && value === words[index]) {
      // console.log(index + 1, words.length, 'here');
      this.onFinishTimer();
      return;
    }

    if (value === words[index]) {
      this.setState({ wordsCompleted: wordsCompleted + value });
      this.setState({ index: index + 1 });
      this.setState({
        remainingPhrase: this.state.remainingPhrase.substring(
          words[index].length
        )
      });
      this.setState({ userInput: '' });

      e.target.value = '';
    }

    this.calculateProgress();
  };

  calculateProgress() {
    let progressPercent = this.state.index / this.state.words.length;
    // console.log(this.state.index, this.state.words.length);

    this.setState({
      playerProgress: progressPercent
    });
  }

  onEmitStart = () => {
    this.state.socket.emit('initiate');
  };

  onStartCountdown = () => {
    if (!this.state.countdown) {
      this.setState({ countdown: true });
      this.interval = setInterval(() => {
        if (this.state.countdownCount === 1) {
          clearInterval(this.interval);

          this.setState({ countdownCount: '' });
          this.onStartTimer();
          return;
        }
        this.setState(prevProps => {
          return { countdownCount: prevProps.countdownCount - 1 };
        });
      }, 1000);
    }
  };

  onSetQuote = phrase => {
    const wordsArray = phrase.split(' ');

    if (!this.state.fullPhrase && !this.state.remainingPhrase) {
      this.setState({ fullPhrase: phrase });
      this.setState({ remainingPhrase: phrase });

      this.setState({
        words: wordsArray.map((word, index) => {
          if (index < wordsArray.length - 1) {
            return word + ' ';
          }

          return word;
        })
      });

      const averageLength = Math.floor(
        this.state.words.reduce((acc, curr) => {
          return acc + curr.length;
        }, 0) / this.state.words.length
      );

      if (!Number.isNaN(averageLength) && (averageLength !== 0)) {
        this.setState({ averageLength });
      }
    }
  };

  onStartTimer = () => {
    this.setState({ wpm: 0 });
    if (!this.state.timerStart) {
      this.setState({ timerStart: true });
      this.interval = setInterval(() => {
        // Timer
        this.setState(prevProps => {
          return { sec: prevProps.sec + 1, timer: prevProps.timer + 1 };
        });

        // WPM Calculation
        if (this.state.sec > 0) {
          const char =
            this.state.wordsCompleted.length + this.state.userInput.length;
          const wpm = Math.floor((char / this.state.averageLength / this.state.sec) * 60);

          this.setState({ wpm });
        } else {
          this.setState({ wpm: 0 });
        }

        // Progress update to server
        this.state.socket.emit('progress-update', {
          progress: this.state.playerProgress
        });
      }, 1000);
    }
  };

  onFinishTimer = () => {
    clearInterval(this.interval);
    // WPM Calculation
    if (this.state.sec > 0) {
      const char =
        this.state.wordsCompleted.length + this.state.userInput.length;
      const wpm = Math.floor((char / this.state.averageLength / this.state.sec) * 60);

      this.setState({ wpm });
    }
    this.calculateProgress();
    this.setState({
      timerFinished: true,
      timer: 0
    });
    this.state.socket.emit('game-finish', {
      wpm: this.state.wpm,
      position: this.state.position
    });
  };
}

export default () => {
  return (
    <PlayGameLogic>
      {values => (
        <div className="PlayGame">
          <Background
            playerSocket={values.playerSocket}
            carPositioning={values.carPositioning}
            onFinish={values.timerFinished}
            onStart={values.timerStart}
            timer={values.timer}
            showUsername={values.leaderboard}
            roomNumber={values.roomNumber}
            leaderboard={values.leaderboard}
            placings={values.placings}
          />

          {!values.loading
            ? renderGame({
                ...values
              })
            : 'loading'}
        </div>
      )}
    </PlayGameLogic>
  );
};
