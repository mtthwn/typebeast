# TypeBeast 

TypeBeast is a typing game for the ages! A modern take on a classic game, TypeBeast aims to bring an immersive and addictive typing game experience to help you take your typing to the next level.


## Final Product 
###### Welcome to TypeBeast! Register, login or play as a guest!
![home screen"](https://github.com/my2an/typebeast/blob/master/client/docs/guest.jpg)

###### Race with friends! Room numbers ensures everyone is in the same room. Words per minute, percentage completed, and current race position are updated realtime.
![home screen"](https://github.com/my2an/typebeast/blob/master/client/docs/race.jpg)
###### Leaderboard displays race rankings and players' words per minute, as well tracks progress of players who haven't completed the race.
![home screen"](https://github.com/my2an/typebeast/blob/master/client/docs/leader_progress.jpg)

###### Register and Login to get access features such as the shop and garage!
![home screen"](https://github.com/my2an/typebeast/blob/master/client/docs/register.jpg)
![home screen"](https://github.com/my2an/typebeast/blob/master/client/docs/login.jpg)
![home screen"](https://github.com/my2an/typebeast/blob/master/client/docs/logged_in.jpg)

###### Coin system to purchase new cars!
![home screen"](https://github.com/my2an/typebeast/blob/master/client/docs/shop.jpg)
![home screen"](https://github.com/my2an/typebeast/blob/master/client/docs/purchase_success.jpg)

###### Head over to the garage to use your new shiny car!
![home screen"](https://github.com/my2an/typebeast/blob/master/client/docs/garage.jpg)
![home screen"](https://github.com/my2an/typebeast/blob/master/client/docs/car_updated.jpg)
![home screen"](https://github.com/my2an/typebeast/blob/master/client/docs/logged_in.jpg)

###### Now race your friends with your sweet new ride!
![home screen"](https://github.com/my2an/typebeast/blob/master/client/docs/sprite_updated.jpg)

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
