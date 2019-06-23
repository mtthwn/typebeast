import React from 'react';
import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialMedia.scss';
library.add(fab);

const SocialMedia = () => {
  return (
    <div>
      <Nav defaultActiveKey="/home" className="SocialMedia flex-column">
        <Nav.Link href="/home">
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </Nav.Link>
        <Nav.Link eventKey="link-1">
          {' '}
          <FontAwesomeIcon icon={['fab', 'facebook']} />
        </Nav.Link>
        <Nav.Link eventKey="link-2">
          {' '}
          <FontAwesomeIcon icon={['fab', 'youtube']} />
        </Nav.Link>
        <Nav.Link eventKey="link-3">
          {' '}
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default SocialMedia;
