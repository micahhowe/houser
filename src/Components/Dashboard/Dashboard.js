import React, {Component} from 'react'
import House from '../House/House'
//import store from '../../store'
import axios from 'axios'


class Dashboard extends Component {
    constructor(props) {
        super(props)
        //I will need this when I get to redux but i got a little ahead of myself
        // const reduxState = store.getState()
        // this.state = {
        // houseList: reduxState.houseList
        // };
        this.state = {
            houseList: []
        }
     }
    //  componentDidMount(){
    //     store.subscribe(() => {
    //       const reduxState = store.getState();
    //       this.setState({
    //         houseList: reduxState.houseList
    //       })
    //     })
    //   }
    componentDidMount() {
        axios.get('/api/houses').then(res => {
          this.setState({
            houseList: res.data
          })
        }).catch(function() {
          console.log('SQL table not found. Alert the authorities'); // "oh, no!"
        })
      }
    render() {
        console.log(this.state.houseList)
        // const houseList = this.state.houseList.map((houseList) => {
        //     return <li key={i}>{houseList}</li>;
        //   });
        //console.log(this.state.route.houseList)
        return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => this.props.history.push('/wizard')}>Add New Property</button>
            <div className="house-list">{this.state.houseList.map(el => (
            <House
            id={el.id}
            name={el.name}
            address={el.address}
            city={el.city}
            state={el.state}
            zipcode={el.zipcode}
            key={el.id}
            />))}
            </div>   
        </div>
        )
    }
}

export default Dashboard;