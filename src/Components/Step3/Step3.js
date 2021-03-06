import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import store, { RESET_INPUTS } from '../../store';

export default class Step3 extends Component {
    constructor(props) {
        super(props)
      
        const reduxState = store.getState()
        this.state = {
            monthly_mortgage_amount: reduxState.monthly_mortgage_amount,
            desired_rent: reduxState.monthly_mortgage_amount
        }
      }
    handleMortgageChange(e) {
        this.setState({
            monthly_mortgage_amount: e.target.value
        })
    }
    handleRentChange(e) {
        this.setState({
            desired_rent: e.target.value
        })
    }
    goToDash = () => this.props.history.push('/')
    addHouse() {
        const reduxState = store.getState()
        
        const body = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            unitedState: reduxState.unitedState,
            zipcode: reduxState.zipcode,
            img: reduxState.img,
            monthly_mortgage_amount: this.state.monthly_mortgage_amount * 10,
            desired_rent: this.state.desired_rent * 10,
        }
       axios.post('/api/houses', body).then(res => {
        //this gotoDash is a problem because it isn't fully reloading the page
        //this.goToDash()
      })
       //this.props.addHouse(body) > This is accomplished by the axios right above
       //this.resetText()
       this.resetInputs()
      }
      resetInputs() {
        store.dispatch({
            type: RESET_INPUTS
        })
    } 
    render() {
        //console.log(this.state.zipcode)
        return (
        <div>
            <div className="wiz-input">
                <h2>Monthly Mortgage Amount</h2>
                <input type="text" id="text" value={this.state.monthly_mortgage_amount} onChange={e => this.handleMortgageChange(e)}/>
                <h2>Desired Monthly Rent</h2>
                <input type="text" id="text" value={this.state.desired_rent} onChange={e => this.handleRentChange(e)}/>
            </div>
            {/* This is the real complete and we do need to add the previous step */}
            <Link to='/wizard/step2'>
                <button onClick={() => this.props.history.push('/wizard/step2')}>Previous Step</button>
            </Link>
            <Link to='/'>
                <button onClick={() => this.addHouse()}>Complete</button>
            </Link>
        </div>
        )
    }
}

