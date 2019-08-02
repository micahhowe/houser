import React, {Component} from 'react';
import { HashRouter } from 'react-router-dom'
import './App.css';
//import Dashboard from './Components/Dashboard/Dashboard'
//import Wizard from './Components/Wizard/Wizard'
import routes from './routes'
import Header from './Components/Header/Header'

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
          {/* <Link to="/" className='links'>Dashboard</Link>
          <Link to="/wizard" className='links'>Wizard</Link> */}
          {/* These links above are unneccessary since there is no nav bar in this app  */}
        </div>
        {routes}
      </HashRouter>
    );
  }
}
