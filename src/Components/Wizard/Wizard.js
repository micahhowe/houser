import React, {Component} from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Step1 from '../Step1/Step1'
import Step2 from '../Step2/Step2'
import Step3 from '../Step3/Step3'
//import Dashboard from '../../routes'
//import axios from 'axios'
export default class Wizard extends Component {
    constructor(props) {
        super(props)
      
      }
    
    goToDash = () => this.props.history.push('/')
    
    render() {
        return (
        <div>
            {/* These next two lines are the reason that it is displaying twice */}
            <h1>Add new listing</h1>
            <Link to='/'><button>Cancel</button></Link>
            <Switch>
                <Route path="/wizard/step1" component={Step1}/>
                <Route path="/wizard/step2" component={Step2}/>
                <Route path="/wizard/step3" component={Step3}/>
            </Switch>
        </div>
        )
    }
}

