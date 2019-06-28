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
import RoomDisplay from './../components/RoomDisplay/RoomDisplay';
import Leaderboard from './../components/Leaderboard/Leaderboard';
// import ShowUsernames from './../components/ShowUsernames/ShowUsernames';
import EndGameButton from './../components/EndGameButtons/EndGameButtons';

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
      <Leaderboard leaderboard={props.leaderboard} />
      <EndGameButton />
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
      <RoomDisplay roomNumber={props.roomNumber} />
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
      position: 0
    };
  }

  componentDidMount() {
    // Deconstruct this.state.endpoint
    const { endpoint } = this.state;
    // Connect to the socket
    const socket = socketIOClient(endpoint);

    // socket.on('connect', () => {
    //   socket.emit(JSON.stringify({ user: this.state.user }), (data) => {
    //     console.log(data);
    //   })
    // })

    this.setState({
      socket
    });

    socket.on('welcome', message => {
      // console.log(message.description);
      // Display welcome message. Import the player's socket and room-player list from server.
      this.setState({
        playersInRoom: message.clients,
        playerSocket: message.socket,
        loading: false,
        roomNumber: message.roomNum
      });

      this.state.socket.emit('user-update', JSON.stringify({ user: this.state.user }));
      // console.log(`${this.state.playersInRoom} in room now`);
    });

    socket.on('new-user-join', message => {
      // console.log(message.description);
      // Display message when new player joins. Import updated room-player list from server.
      this.setState({
        playersInRoom: message.clients
      });
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

      carPositioning[message.socketId] = message.completion;

      this.setState({ carPositioning });

      const leaderboard = this.state.leaderboard;
      leaderboard[message.socketId] = message;

      this.setState({ leaderboard });

      const socketId = this.state.socket.id;

      const placings = [];
      for (const player in leaderboard) {
        placings.push({
          player,
          progress: leaderboard[player].completion.progress
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
    });

    socket.on('user-finish', message => {
      // console.log(message);
      const carPositioning = this.state.carPositioning;

      carPositioning[message.socketId] = message.completion;
      this.setState({
        carPositioning
      });

      const leaderboard = this.state.leaderboard;
      leaderboard[message.socketId] = message;

      this.setState({
        leaderboard
      });
    });

    socket.on('player-left', message => {
      // console.log(message.description);
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

    const { index, words, wordsCompleted } = this.state;

    // console.log(words[index], value);

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
      this.setState({ averageLength });
    }
  };

  onStartTimer = () => {
    if (!this.state.timerStart) {
      this.setState({ timerStart: true });
      this.interval = setInterval(() => {
        // timer
        this.setState(prevProps => {
          return { sec: prevProps.sec + 1, timer: prevProps.timer + 1 };
        });

        // WPM Calculation
        if (this.state.sec > 0) {
          const char =
            this.state.wordsCompleted.length + this.state.userInput.length;
          const wpm = Math.floor((char / 6 / this.state.sec) * 60);
          // console.log('WPM: ', wpm);

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
    this.calculateProgress();
    this.setState({
      timerFinished: true,
      timer: 0
    });
    this.state.socket.emit('game-finish', {
      wpm: this.state.wpm
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
            showUsername={values.playersInRoom}
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
