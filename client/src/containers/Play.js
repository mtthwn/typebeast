import React, { Component } from 'react';
import './GameUI.scss';
// import DisplayQuote from './GameUI/GameUI';
import Background from './../components/Background/Background';
import DisplayQuoteArea from './../components/Quote/Quote';
import CarWPMGauge from './../components/Guages/WPMGuage';
import Minimap from './../components/Minimap/Minimap';
import DisplayQuoteInput from './../components/GameInput/GameInput';
import NosGauge from './../components/Guages/NOSGuage';
import socketIOClient from 'socket.io-client';

const renderGame = props => {
  return props.timerFinished ? (
    <div className="DisplayQuote-container">
      <div className="DisplayQuote-previewQuote">
        <h1 className="DisplayQuote-h1">Congrats mffferr</h1>
      </div>
    </div>
  ) : (
    <div className="DisplayQuoteUI-container">
      <CarWPMGauge second={props.sec} char={props.char} socket={props.socket} />
      <div className="DisplayQuote-container">
        <Minimap />
        <DisplayQuoteArea
          fullPhrase={props.fullPhrase}
          userInput={props.userInput}
        />
        <DisplayQuoteInput onUserInputChange={props.onUserInputChange} />
      </div>
      <NosGauge />
    </div>
  );
};

class PlayGameLogic extends Component {
  constructor() {
    super();

    this.state = {
      words: [],
      index: 0,
      fullPhrase:
        'Your self-image is the result of all you have given your subconscious mind as a database, so regardless of your background, what you are willing to become is the only reality that counts.',
      userInput: '',
      char: 0,
      sec: 0,
      carPositioning: 0,
      timer: 0,
      timerStart: false,
      timerFinished: false,
      finishLine: false,
      // Socket related properties:
      endpoint: 'http://127.0.0.1:8080',
      gameStart: false,
      playersInRoom: [],
      playerSocket:'',
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
      })
      console.log(`${this.state.playersInRoom} in room now`)
    });

    socket.on('new-user-join', message => {
      console.log(message.description);
      // Display message when new player joins. Import updated room-player list from server.
      this.setState({
        playersInRoom: message.clients,
      })
      console.log(`${this.state.playersInRoom} in room now`)
    });

    socket.on('game-start', message => {
      console.log(message.description);
      // Display message saying game will start soon

      // Set a countdown and render the typing content
      let timerCount = 5;
      let that = this;

      function countdown() {
        setTimeout(() => {
          if (timerCount === 0) {
            console.log('Game start.');
            // finished = true;
            timerStuff();
            // return true;
          } else {
            console.log(timerCount);
            timerCount--;
            countdown();
          }
        }, 1000);
      }

      function timerStuff() {
        console.log('START');
        that.onStartTimer();
        that.setState({ timerStart: true });
        that.interval = setInterval(() => {
          that.setState(prevProps => {
            return { sec: prevProps.sec + 1, timer: prevProps.timer + 1 };
          });
        }, 1000);
      }

      countdown();

      // this.onFinishTimer(value);
    });

    socket.on('progress-broadcast', message => {
      console.log(message);
    });

    socket.on('player-left', message => {
      console.log(message.description);
    });
  }

  render() {
    return this.props.children({
      ...this.state,
      onUserInputChange: this.onUserInputChange
    });
  }

  onUserInputChange = e => {
    let value = e.target.value;

    if (this.state.timerFinished) {
      e.target.value = '';
    }

    this.onStartTimer();
    this.onFinishTimer(value);
    this.setState({
      userInput: value,
      char: this.calculateCorrectChars(value),
      carPositioning: this.calculateCorrectChars(value) * 10
    });
  };

  calculateCorrectChars(userInput) {
    //remove whitespace
    const text = this.state.fullPhrase.replace(' ', '');
    //remove whitespace from user input and turn into array
    userInput = userInput.replace(' ', '').split('');
    //return how many characters user is typing correctly
    return userInput.filter((char, i) => char === text[i]).length;
  }

  onStartTimer() {
    if (!this.state.timerStart) {
      this.setState({ timerStart: true });
      this.interval = setInterval(() => {
        this.setState(prevProps => {
          return { sec: prevProps.sec + 1 };
        });
      }, 1000);
    }
  }

  onFinishTimer(userInput) {
    if (userInput === this.state.fullPhrase) {
      clearInterval(this.interval);
      this.setState({
        timerFinished: true
      });
    }
  }
}

export default () => {
  return (
    <PlayGameLogic>
      {values => (
        <div className="PlayGame">
          <Background
            carPositioning={values.carPositioning}
            onFinish={values.timerFinished}
          />

          {renderGame({
            ...values
          })}
        </div>
      )}
    </PlayGameLogic>
  );
};
