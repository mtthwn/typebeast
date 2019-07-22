import React, { Component, useState, useEffect, useReducer } from 'react';

import userReducer from './../../reducers/users';
import UserContext from './../../context/user-context';

import CarSlider from './../../components/CarSlider/CarSlider';
import SocialMedia from './../../components/SocialMedia/SocialMedia';
import PlayNow from './../../components/PlayNow/PlayNow';

import Header from './../../components/Header/Header';

import axios from 'axios';

const Main = () => {
  const [user, userDispatch] = useReducer(userReducer, {
    username: 'Guest',
    cars: [],
    email: null,
    games: []
  });

  useEffect(() => {
    const validateToken = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          return;
        } else {
          const { data } = await axios.get(
            `http://127.0.0.1:8081/api/auth/me/from/token`,
            {
              params: {
                token: JSON.parse(token)
              }
            }
          );

          if (!data.success) {
            return;
          } else {
            userDispatch({ type: 'UPDATE_USER', user: data.user });

            localStorage.setItem('token', data.token);
          }
        }
      } catch (e) {
        localStorage.removeItem('token');
        console.log(e.message);
      }
    };

    validateToken();
  }, []);

  return (
    <UserContext.Provider value={{user, currentCar: user.currentCar}}>
      <Header user={user} />
      <div>
        <SocialMedia />
        <CarSlider />
        <PlayNow currentCar={user.currentCar} />
      </div>
    </UserContext.Provider>
  );
};

export { Main as default };
