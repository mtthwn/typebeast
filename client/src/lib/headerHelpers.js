import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Register from './../components/AuthenticationForms/Register';
import Login from './../components/AuthenticationForms/Login';
import HeaderButton from './../components/Button/HeaderButton';

const logoutHandler = () => {
  localStorage.removeItem('token');
  window.location.reload();
};

export const renderButtons = username => {
  if (!username) {
    return (
      <div inline="true" className="Header-signup">
        <HeaderButton className="sign-up" buttonText="" />
        <HeaderButton className="login" buttonText="" />
      </div>
    );
  } else if (username === 'Guest') {
    return (
      <div inline="true" className="Header-signup">
        <Register className="sign-up" />
        <Login className="login" />
      </div>
    );
  }

  return (
    <div inline="true" className="Header-signup">
      <HeaderButton className={'sign-up'} buttonText={`Welcome ${username}`} />
      <HeaderButton cb={logoutHandler} className="login" buttonText="Logout" />
    </div>
  );
};

export const renderLinks = username => {
  if (username === 'Guest' || !username) {
    return;
  }

  return (
    <Fragment>
      <Link to="/garage" className="nav-link">
        Garage
      </Link>
      <Link to="/shop" className="nav-link">
        Shop
      </Link>
    </Fragment>
  );
};
