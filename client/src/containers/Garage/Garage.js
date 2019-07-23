import React, { useState, useEffect, useReducer } from 'react';

import validateToken from './../../lib/userValidation';
import userReducer from './../../reducers/users';
import UserContext from './../../context/user-context';

const Garage = () => {
  const [user, userDispatch] = useReducer(userReducer, {
    username: 'Guest',
    cars: [],
    email: null,
    games: []
  });

  useEffect(() => {
    validateToken(userDispatch);
  });

  return (
    <UserContext.Provider>
      <h3>Hello {user.username}</h3>
    </UserContext.Provider>
  );
};

export { Garage as default };
