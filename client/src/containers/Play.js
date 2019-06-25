import React, { Component } from 'react';
import './Game.scss';
import './GameUI.scss'
// import DisplayQuote from './GameUI/GameUI';
import Background from './../components/Background/Background';
import DisplayQuoteArea from './../components/Quote/Quote';
import CarWPMGauge from './../components/Guages/WPMGuage';
import Minimap from './../components/Minimap/Minimap'
import DisplayQuoteInput from './../components/GameInput/GameInput';
import NosGauge from './../components/Guages/NOSGuage'
import socketIOClient from 'socket.io-client';

export default class PlayGame extends Component {
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
      playerCount: 0,
      gameStart: false,
      playerProgress: {
        progress: 0,
        wpm: 0
      }
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
      // Display welcome message. This should render so I want to set the state
    });

    socket.on('new-user-join', message => {
      console.log(message.description);
      // Display join message, this should also set state
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
    const displayQuote = this.state.timerFinished ? (
      <div className="DisplayQuote-container">
        <div className="DisplayQuote-previewQuote">
          <h1 className="DisplayQuote-h1">Congrats mffferr</h1>
        </div>
      </div>
    ) : (
      <div className="DisplayQuoteUI-container">
        <CarWPMGauge
          second={this.state.sec}
          char={this.state.char}
          socket={this.state.socket}
        />
        <div className="DisplayQuote-container">
          <Minimap />
          <DisplayQuoteArea
            fullPhrase={this.state.fullPhrase}
            userInput={this.state.userInput}
          />
          <DisplayQuoteInput onUserInputChange={this.onUserInputChange} />
        </div>
        <NosGauge />
      </div>
    );

    return (
      <div className="PlayGame">
        <Background
          carPositioning={this.state.carPositioning}
          onFinish={this.state.timerFinished}
        />

        {displayQuote}
      </div>
    );
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
