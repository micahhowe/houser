import React, {Component} from 'react';
import { HashRouter } from 'react-router-dom'
import './App.css';
import routes from './routes'
import Header from './Components/Header/Header'

export default class App extends Component {
  constructor() {
    super()
  
  }
  
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
        </div>
        {routes}
      </HashRouter>
    );
  }
}
