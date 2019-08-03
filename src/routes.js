import React from "react"
import { Switch, Route } from "react-router-dom"
import Wizard from "./Components/Wizard/Wizard"
import Dashboard from "./Components/Dashboard/Dashboard"

export default (
  //I think this render will work I just don't think the data has a clear path yet
    <Switch>
      <Route 
      exact path="/" 
      component={Dashboard} 
      />
      <Route path="/wizard" component={Wizard} />
    </Switch>
    ) 

