import React, { useState, useEffect, useReducer } from 'react';

import Header from './../../components/Header/Header';
import GarageSlider from './../../components/GarageSlider/GarageSlider'
// Helper functions
import validateToken from './../../lib/userValidation';
import userReducer from './../../reducers/users';
import UserContext from './../../context/user-context';
import instance from './../../lib/axios';

const Garage = () => {
  const [user, userDispatch] = useReducer(userReducer, {
    username: 'Guest',
    email: null
  });
  const [cars, setCars] = useState([]);

  useEffect(() => {
    validateToken(userDispatch);
  }, []);

  useEffect(() => {
    const getUserCars = async () => {
      try {
        const { data } = await instance.get('/cars/user');
        const userCars = data.cars

        setCars(userCars);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserCars();
  }, [user]);

  return (
    <UserContext.Provider value={{ user, cars }}>
      <Header />
      <GarageSlider />
    </UserContext.Provider>
  );
};

export { Garage as default };
