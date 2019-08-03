import React, {Component} from 'react';
import { HashRouter } from 'react-router-dom'
import './App.css';
import routes from './routes'
import Header from './Components/Header/Header'
//import axios from 'axios'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      houseList: []
    }
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
