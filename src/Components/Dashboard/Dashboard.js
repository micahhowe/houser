import React, {Component} from 'react'
import House from '../House/House'
import store from '../../store'


export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        const reduxState = store.getState()
        this.state = {
        houseList: reduxState.houseList
        };
     }
     componentDidMount(){
        store.subscribe(() => {
          const reduxState = store.getState();
          this.setState({
            houseList: reduxState.houseList
          })
        })
      }
    render() {
        const houseList = this.state.houseList.map((houseList, i) => {
            return <li key={i}>{houseList}</li>;
          });
        return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => this.props.history.push('/wizard')}>Add New Property</button>
            <House />
            <div>
            <ol className='list'>{houseList}</ol> 
            </div>
            {/* {this.props.houseList.map(el => (
                <House
                id={el.id}
                name={el.name}
                address={el.address}
                city={el.city}
                state={el.state}
                zipcode={el.zipcode} */}
                 {/* key={el.product_id} 
                I need to pass down everything that might need to be used by the House component */}
                />
))}
        </div>
        )
    }
}