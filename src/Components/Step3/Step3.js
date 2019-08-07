import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import store, { UPDATE_MORTGAGE, UPDATE_RENT } from '../../store';

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
            state: reduxState.state,
            zipcode: reduxState.zipcode,
            img: reduxState.img,
            monthly_mortgage_amount: this.state.monthly_mortgage_amount * 100,
            desired_rent: this.state.desired_rent * 100,
        }
       axios.post('/api/houses', body).then(res => {
        //this.setState({houseList: res.data})
        this.goToDash()
      })
       //this.props.addHouse(body) > This is accomplished by the axios right above
       //this.resetText()
      }
       
    render() {
        //console.log(this.state.zipcode)
        return (
        <div>
            <div className="wiz-input">
                <h2>Monthly Mortgage Amount</h2>
                <input type="text" id="text" onChange={e => this.handleMortgageChange(e)}/>
                <h2>Desired Monthly Rent</h2>
                <input type="text" id="text" onChange={e => this.handleRentChange(e)}/>
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

