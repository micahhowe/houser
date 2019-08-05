import React, {Component} from 'react'
export default class House extends Component {
    render() {
        
        return (
        <div>
            <h1>House {this.props.id}</h1>
            <h2>{this.props.name}</h2>
            <p>{this.props.address}</p>
            <p>{this.props.state}</p>
            <p>{this.props.city}</p>
            <p>{this.props.zipcode}</p>
            <button>Delete</button>
        </div>
        )
    }
}