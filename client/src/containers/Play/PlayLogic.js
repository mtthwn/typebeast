import React, { Component } from 'react';

import socketIOClient from 'socket.io-client';

import tokenValidationHelper from './../../lib/tokenValidationHelper';

export default class PlayGameLogic extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        username: '',
        car: ''
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

  async componentDidMount() {
    // Set user in state via localStorage
    const user = await tokenValidationHelper();

    this.setState({ user });

    // Deconstruct this.state.endpoint
    const { endpoint } = this.state;
    // Connect to the socket
    const socket = socketIOClient(endpoint);

    socket.on('connect', () => {
      socket.emit('user-info', JSON.stringify({ user: this.state.user }));

      this.setState({
        socket,
        loading: false
      });
    });

    socket.on('room-number', message => {
      this.setState({
        roomNumber: message.roomNum
      });
    });

    socket.on('user-broadcast', data => {
      const formattedData = JSON.parse(data);
      const leaderboard = this.state.leaderboard;
      const carPositioning = this.state.carPositioning;

      for (const user in formattedData) {
        leaderboard[user] = {
          ...formattedData[user],
          completion: { progress: 0 },
          completed: false
        };
        carPositioning[user] = { progress: 0 };
      }
      this.setState(carPositioning);
      this.setState(leaderboard);
    });

    socket.on('game-start', message => {
      this.onStartCountdown();
      this.onSetQuote(message.quote);
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

        // Set completed boolean for the leaderboard.
        if (leaderboard[message.socketId].completion === true) {
          leaderboard[message.socketId].completed = true;
        } else {
          leaderboard[message.socketId].completed = false;
        }
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
      // alert('Please reload your page');
      this.setState({
        leaderboard: {},
        placings: [],
        progress: 0,
        carPositioning: {}
      });
    });
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.location.pathname !== prevProps.location.pathname) {
  //     console.log("Route change!", this.props.location.pathname);
  //   }
  // }

  componentWillUnmount() {
    if (this.state.socket) {
      this.state.socket.disconnect();
    }
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

      if (!Number.isNaN(averageLength) && averageLength !== 0) {
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
          const wpm = Math.floor(
            (char / this.state.averageLength / this.state.sec) * 60
          );

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
      const wpm = Math.floor(
        (char / this.state.averageLength / this.state.sec) * 60
      );

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
