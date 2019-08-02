import React, {Component} from 'react'
import House from '../House/House'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        
        }
    
    render() {
        
        return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => this.props.history.push('/wizard')}>Add New Property</button>
            <House />
            {/* This is not pulling down houseList because i am not familiar with passing props through routes
            I will focus on redux */}
            {/* {this.props.houseList.map(el => (
                <House
                id={el.id}
                name={el.name}
                address={el.address}
                city={el.city}
                state={el.state}
                zipcode={el.zipcode}
                key={el.product_id} 
                deleteProduct={this.props.deleteProduct}
                //I need to pass down everything that might need to be used by the meme component
                />
))} */}
        </div>
        )
    }
}