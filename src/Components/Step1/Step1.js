import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class Step1 extends Component {
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
    
    render() {
        //console.log(this.state.zipcode)
        return (
        <div>
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
            {/* Replace the next line with Next Step */}
                <button onClick={() => this.props.history.push('/wizard/step2')}>Next Step</button>
        </div>
        )
    }
}

