// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

const Navigation = () => (
  <div className="navigation-component">
    <Link to="/">Root</Link>
    <Link to="/profile">Dashboard</Link>
  </div>
);

export default Navigation;
