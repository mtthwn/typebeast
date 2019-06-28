import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default props => {
  const PageLink =
    props.link === '/play' ? (
      <a href="/play">{props.text}</a>
    ) : (
      <Link to={props.link}>{props.text}</Link>
    );

  return <Button variant={props.variant}>{PageLink}</Button>;
};
