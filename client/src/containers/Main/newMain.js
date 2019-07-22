import React, { Component, useState, useEffect, useReducer } from 'react';

import userReducer from './../../reducers/users';
import instance from '../../lib/axios';

const Main = () => {
  const [user, userDispatch] = useReducer(userReducer, {
    username: '',
    cars: [],
    email: null,
    games: []
  });

  useEffect(() => {
    console.log('here');
    const validateToken = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          return;
        } else {
          const userValidation = await instance.get(`/auth/me/from/token`, {
            params: {
              token: JSON.parse(token)
            }
          });

          console.log(userValidation);
        }
      } catch (e) {
        console.error(e.message);
      }
    };

    validateToken();
  }, []);

  console.log(user);

  return <div>hello</div>;
};

export { Main as default };
