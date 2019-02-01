import React, { Component } from 'react';
import Header from './Component/Header/Header'
// import Dashboard from './Component/Dashboard/Dashboard'
// import Wizard from './Component/Wizard/Wizard'
import { Provider } from 'react-redux'
import store from './ducks/store'
import {HashRouter as Router} from 'react-router-dom';
import './App.css';
import routes from './routes'

class App extends Component {
  // constructor(){
  //   super();
  // }
  render() {
    return (
      <Provider store={store}>
        <Router>
        <div className="App">
          <Header/>
            <div className="body-display">
            {routes}
          </div>
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
