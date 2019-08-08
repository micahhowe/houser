import React, {Component} from 'react'
export default class House extends Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        
        return (
        <div className="house-tile">
            <div className="house-image">
                <img src={this.props.img} alt='Beautiful Home'/>
            </div>
           
            <div className="house-info"><h2>Property Name: {this.props.name}</h2>
            <p>Address: {this.props.address}</p>
            <p>City: {this.props.city}</p>
            <p>State: {this.props.unitedState}</p>
            <p>Zip: {this.props.zipcode}</p></div>
            <div className="house-cost"><p>Monthly Mortgage: ${this.props.monthly_mortgage_amount / 10}</p>
            <p>Monthly Rent: ${this.props.desired_rent / 10}</p>
            <button onClick={() => this.props.deleteHouse(this.props.id)}>Delete</button></div>
        </div>
        )
    }
}