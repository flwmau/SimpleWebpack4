import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import Layouts from '../Examples/Layouts';
import TodoJquery from '../todo-list-jquery/todo-jquery';

export default class App extends React.Component {
   constructor(props) {
      super();
   }

   render() {
     return (
       <div className="app__container">
         <Header/>
         <TodoJquery/>
       </div>
     );
   }
}

ReactDOM.render(<App/>, document.getElementById('app'));

/*
ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('app')
);*/
