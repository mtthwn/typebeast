# TypeBeast 

TypeBeast is a typing game for the ages! A modern take on a classic game, TypeBeast aims to bring an immersive and addictive typing game experience to help you take your typing to the next level.

## The team

* [Justin Kwok](https://github.com/JSKwok)
* [Daniel Tran](https://github.com/DTran23)
* [Matthew An](https://github.com/my2an)

## Tech used

* MongoDB with Mongoose
* Express
* React
* Node.js (10.16.0)
* Socket.io

## Getting Started

Clone the repo and install the dependencies in the React server by running `yarn`. Then, install the api dependencies by running `npm install` in the typeserver directory.

## Running the app

MongoDB must be running in the background in order to start the API. You should also run the database seed script by executing `npm run seed` in the typeserver directory.

### Running the api

`cd typeserver` and `npm start`.

Server will run on `http://localhost:8081`

### Running the socket-server

`cd typeserver/socketserver` and `node server.js`

Server will run on `http://localhost:8080`

### Running the React App

`cd client && yarn start`

App will run on `localhost:3000`

### Code cleanup

Install Prettier and run ESLint to ensure the code follows the project's code styleguide.
