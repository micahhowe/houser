import React, {Component} from 'react'
import { Link } from 'react-router-dom'
//import Dashboard from '../../routes'
export default class Wizard extends Component {
    constructor() {
        super()
      
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
          }
      }
    handleNameChange(e) {
          this.setState({ name: e.target.value })
          console.log(e.target.value)
    }
    handleAddressChange(e) {
        this.setState({ address: e.target.value })
        console.log(e.target.value)
    }
    handleCityChange(e) {
        this.setState({ city: e.target.value })
        console.log(e.target.value)
    }
    handleStateChange(e) {
        this.setState({ state: e.target.value })
        console.log(e.target.value)
    }
    handleZipChange(e) {
        this.setState({ zipcode: e.target.value })
        console.log(e.target.value)
    }
    render() {
        console.log(this.state.zipcode)
        return (
        <div>
            <h1>Add new listing</h1>
            <Link to='/'><button>Cancel</button></Link>
            <div className="wiz-input">
                <h2>Name</h2>
                <input type="text" onChange={e => this.handleNameChange(e)}/>
                <h2>Address</h2>
                <input type="text" onChange={e => this.handleAddressChange(e)}/>
                <h2>City</h2>
                <input type="text" onChange={e => this.handleCityChange(e)}/>
                <h2>State</h2>
                <input type="text" onChange={e => this.handleStateChange(e)}/>
                <h2>Zipcode</h2>
                <input type="text" onChange={e => this.handleZipChange(e)}/>
            </div>
        </div>
        )
    }
}