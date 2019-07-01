import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import HeaderButton from './../Button/HeaderButton';

import './Header.scss';
import Register from '../AuthenticationForms/Register';
import Login from '../AuthenticationForms/Login';

const renderButtons = username => {
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
      <HeaderButton
        className={'sign-up'}
        buttonText={`Welcome ${username}`}
      />
      <HeaderButton className='login' buttonText='Logout' />
    </div>
  );
};

const Header = ({ user }) => {
  const renderButtons =
    user.username === 'Guest' ? (
      <div inline="true" className="Header-signup">
        <Register className="sign-up" />
        <Login className="login" />
      </div>
    ) : (
      <div inline="true" className="Header-signup">
        <HeaderButton
          className={'sign-up'}
          buttonText={`Welcome ${user.username}`}
        />
        <HeaderButton className={'login'} buttonText={'Logout'} />
      </div>
    );

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="Navbar" variant="dark">
        <Navbar.Brand className="Navbar-brand">
          <Link to="/" className="nav-link">
            Typebeast
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="NavLinks mr-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/garage" className="nav-link">
              Garage
            </Link>
            <Link to="/shop" className="nav-link">
              Shop
            </Link>
            <Link to="/play" className="nav-link">
              Play Now
            </Link>
          </Nav>
          {renderButtons}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
