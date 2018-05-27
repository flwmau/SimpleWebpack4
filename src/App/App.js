import React from 'react';
import ReactDOM from 'react-dom';
import { Progress } from 'reactstrap';

export default class App extends React.Component {
   constructor(props) {
      super();
   }

   render() {
      return <div>React Worked</div>;
   }
}

ReactDOM.render(<App />, document.getElementById('app'));