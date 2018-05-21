import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import Layouts from '../Examples/Layouts';

export default class App extends React.Component {
   constructor(props) {
      super();
   }

   render() {
     return (
       <div className="app__container">
         <Header/>
       </div>
     );
   }
}

ReactDOM.render(<Layouts/>, document.getElementById('app'));

/*
ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('app')
);*/
