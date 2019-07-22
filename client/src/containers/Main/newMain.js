import React, { Component, useState, useEffect, useReducer } from 'react';

import userReducer from './../../reducers/users';

import CarSlider from './../../components/CarSlider/CarSlider';
import SocialMedia from './../../components/SocialMedia/SocialMedia';
import PlayNow from './../../components/PlayNow/PlayNow';

import Header from './../../components/Header/Header';

import axios from 'axios';

const Main = () => {
  const [user, userDispatch] = useReducer(userReducer, {
    username: '',
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
        console.error(e.message);
      }
    };

    validateToken();
  }, []);

  console.log('here', user);

  return (
    <div>
      <Header user={user} />
      <div>
        <SocialMedia />
        <CarSlider />
        <PlayNow currentCar={user.currentCar} />
      </div>
    </div>
  );
};

export { Main as default };
