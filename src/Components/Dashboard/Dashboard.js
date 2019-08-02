import React, {Component} from 'react'
import House from '../House/House'
export default class Dashboard extends Component {
      
    
    render() {
        
        return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => this.props.history.push('/wizard')}>Add New Property</button>
            <House />
            {this.props.inventoryList.map(el => (
                <House
                id={el.id}
                name={el.name}
                image_url={el.image_url}
                price={el.price}
                key={el.product_id} 
                deleteProduct={this.props.deleteProduct}
                //I need to pass down everything that might need to be used by the meme component
                />
))}
        </div>
        )
    }
}