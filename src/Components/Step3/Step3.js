import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Step3 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            imgUrl: '',
            mortgage: '',
            rent: ''
          }
      }
    handleMortgageChange(e) {
          this.setState({ mortgage: e.target.value })
          console.log(e.target.value)
    }
    handleRentChange(e) {
          this.setState({ rent: e.target.value })
          console.log(e.target.value)
    }
    goToDash = () => this.props.history.push('/')
    //This is step 4 
    addHouse() {
        //This whole thing is a mystery to me because they both want an axios call and put them in the body
       const body = {
           name: this.state.name,
           address: this.state.address,
           city: this.state.city,
           state: this.state.state,
           zipcode: this.state.zipcode
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
                <button onClick={() => this.props.history.push('/wizard/step2')}>Previous Step</button>
                <button onClick={() => this.addHouse()}>Complete</button>
        </div>
        )
    }
}

