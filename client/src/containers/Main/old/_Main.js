import React, { useEffect, useReducer } from 'react';

import userReducer from './../../reducers/users';
import UserContext from './../../context/user-context';

import CarSlider from './../../components/CarSlider/CarSlider';
import SocialMedia from './../../components/SocialMedia/SocialMedia';
import PlayNow from './../../components/PlayNow/PlayNow';

import Header from './../../components/Header/Header';

import validateToken from './../../lib/userValidation'

const Main = () => {
  const [user, userDispatch] = useReducer(userReducer, {
    username: 'Guest',
    cars: [],
    email: null,
    games: []
  });

  useEffect(() => {
    validateToken(userDispatch);
  }, []);

  return (
    <UserContext.Provider value={{ user, currentCar: user.currentCar }}>
      <Header/>
      <div>
        <SocialMedia />
        <CarSlider />
        <PlayNow />
      </div>
    </UserContext.Provider>
  );
};

export { Main as default };
