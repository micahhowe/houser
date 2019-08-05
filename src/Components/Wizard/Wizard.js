import React, {Component} from 'react'
import { Link } from 'react-router-dom'
//import Dashboard from '../../routes'
import axios from 'axios'
export default class Wizard extends Component {
    constructor(props) {
        super(props)
      
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
    goToDash = () => this.props.history.push('/')
    //This is step 4 
    addHouse() {
       const body = {
           name: this.state.name,
           address: this.state.address,
           city: this.state.city,
           state: this.state.state,
           zipcode: this.state.zipcode
       }
       //I need to pass this down on props (through route > I'm still not sure how to do that)
       this.props.addHouse(body)
       this.resetText()
       this.goToDash()
      }
      resetText() {
        let text = document.getElementById('text')
        let text1 = document.getElementById('text1')
        let text2 = document.getElementById('text2')
        let text3 = document.getElementById('text3')
        let text4 = document.getElementById('text4')
        text.value = ''
        text1.value = ''
        text2.value = ''
        text3.value = ''
        text4.value = ''
    }
    render() {
        //console.log(this.state.zipcode)
        return (
        <div>
            <h1>Add new listing</h1>
            <Link to='/'><button>Cancel</button></Link>
            <div className="wiz-input">
                <h2>Name</h2>
                <input type="text" id="text" onChange={e => this.handleNameChange(e)}/>
                <h2>Address</h2>
                <input type="text" id="text1" onChange={e => this.handleAddressChange(e)}/>
                <h2>City</h2>
                <input type="text" id="text2" onChange={e => this.handleCityChange(e)}/>
                <h2>State</h2>
                <input type="text" id="text3" onChange={e => this.handleStateChange(e)}/>
                <h2>Zipcode</h2>
                <input type="text" id="text4" onChange={e => this.handleZipChange(e)}/>
            </div>
                <button onClick={() => this.addHouse()}>Complete</button>
        </div>
        )
    }
}

