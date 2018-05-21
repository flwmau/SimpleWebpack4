import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

import './Header.css';

export default class Header extends React.Component {
  constructor(props) {
    super();
  }

  render1() {
    return (
      <div className="header container-fluid">
        <div className="navbar-header">
          <div className="navbar-brand">EXTEND TODO LIST</div>
        </div>
        <Link to="/planned">Планируемые</Link>
        <Link to="all">Все</Link>
        <Link to="/tools">Инструменты</Link>
      </div>
    );
  }

  render() {
    return (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">EXTENDED TODO LIST</a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}