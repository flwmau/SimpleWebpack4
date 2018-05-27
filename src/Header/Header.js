import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

import './Header.css';

export default class Header extends React.Component {
  constructor(props) {
    super();
  }


  render() {
    return <div className="header__todo">
      <h1>Простой TODO список</h1>
    </div>;
  }
}