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
    <div className="DisplayQuote-container">
      <div className="DisplayQuote-previewQuote">
        <h1 className="DisplayQuote-h1">Congrats mffferr</h1>
      </div>
      <div>WPM: {props.wpm}</div>
    </div>
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
        <Minimap />
        {gameStart}
      </div>
      <NosGauge />
    </div>
  );
};

class PlayGameLogic extends Component {
  constructor() {
    super();

    this.state = {
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
      playersInRoom: [],
      playerSocket: '',
      playerProgress: 0,
      wpm: 0,
      wordsCompleted: '',
      socket: ''
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

    socket.on('welcome', message => {
      console.log(message.description);
      // Display welcome message. Import the player's socket and room-player list from server.
      this.setState({
        playersInRoom: message.clients,
        playerSocket: message.socket
      });
      console.log(`${this.state.playersInRoom} in room now`);
    });

    socket.on('new-user-join', message => {
      console.log(message.description);
      // Display message when new player joins. Import updated room-player list from server.
      this.setState({
        playersInRoom: message.clients
      });
      console.log(`${this.state.playersInRoom} in room now`);
    });

    socket.on('game-start', message => {
      console.log(message.description);
      console.log(message.quote)

      // let that = this;
      this.onStartCountdown();
      this.onSetQuote(message.quote);

      // Display message saying game will start soon

    });

    socket.on('progress-broadcast', message => {
      const carPositioning = this.state.carPositioning;

      carPositioning[message.socketId] = message.completion;
      // console.log(message);
      this.setState({ carPositioning });
      console.log(this.state.carPositioning);
    });

    socket.on('player-left', message => {
      console.log(message.description);
    });

    const wordsArray = this.state.fullPhrase.split(' ');

    this.setState({
      words: wordsArray.map((word, index) => {
        if (index < wordsArray.length - 1) {
          return word + ' ';
        }

        return word;
      }),
      loading: false
    });

    // this.setState({ re})
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

    if (this.state.sec > 0) {
      const wpm = Math.floor(((this.state.index + 1) / this.state.sec) * 60);

      this.setState({ wpm });
    } else {
      this.setState({ wpm: 0 });
    }

    if (value.length > words[index].length) {
      return;
    } else {
      this.setState({ userInput: value });
    }

    if (index === words.length - 1 && value === words[index]) {
      console.log(index + 1, words.length, 'here');
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
    // console.log(value);

    // if (this.state.timerFinished) {
    //   e.target.value = '';
    // }

    // this.onStartTimer();
    // this.onFinishTimer(value);
    // this.setState({
    //   userInput: value,
    //   char: this.calculateCorrectChars(value),
    //   carPositioning: this.calculateCorrectChars(value) * 10
    // });
  };

  calculateProgress() {
    let progressPercent = this.state.index / this.state.words.length;
    console.log(this.state.index, this.state.words.length);

    this.setState({
      playerProgress: progressPercent
    });
  }

  // calculateCorrectChars(userInput) {
  //   //remove whitespace
  //   const text = this.state.fullPhrase.replace(' ', '');
  //   //remove whitespace from user input and turn into array
  //   userInput = userInput.replace(' ', '').split('');
  //   //return how many characters user is typing correctly
  //   return userInput.filter((char, i) => char === text[i]).length;
  // }

  onEmitStart = () => {
    this.state.socket.emit('initiate')
  }

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

  onSetQuote = (phrase) => {
    if (!this.state.fullPhrase && !this.state.remainingPhrase) {
      this.setState({fullPhrase: phrase})
      this.setState({remainingPhrase: phrase})
    }
  }

  onStartTimer = () => {
    if (!this.state.timerStart) {
      this.setState({ timerStart: true });
      this.interval = setInterval(() => {
        this.setState(prevProps => {
          return { sec: prevProps.sec + 1 };
        });
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
      timerFinished: true
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
