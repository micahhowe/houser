import React, {Component} from 'react'
export default class House extends Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        
        return (
        <div>
            <h1>House {this.props.id}</h1>
            <h2>{this.props.name}</h2>
            <p>{this.props.address}</p>
            <p>{this.props.state}</p>
            <p>{this.props.city}</p>
            <p>{this.props.zipcode}</p>
            <button onClick={() => this.props.deleteHouse(this.props.id)}>Delete</button>
        </div>
        )
    }
}