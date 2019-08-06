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
        this.deleteHouse = this.deleteHouse.bind(this)

     }
    //  componentDidMount(){
    //     store.subscribe(() => {
    //       const reduxState = store.getState();
    //       this.setState({
    //         houseList: reduxState.houseList
    //       })
    //     })
    //   }
    //goToDash = () => this.props.history.push('/')
    deleteHouse(id){
        axios.delete(`/api/houses/${id}`).then(res => {
            this.getHouses()
            //I need this to pull in the houses or refresh the page
          }).catch(function() {
            console.log('Awww Jeez Rick ... could not delete house');
          })
    }
    getHouses(){
        axios.get('/api/houses').then(res => {
            this.setState({
              houseList: res.data
            })
          }).catch(function() {
            console.log('SQL table not found. Alert the authorities'); // "oh, no!"
          })
    } 
    componentDidMount() {
        this.getHouses()
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
            <button onClick={() => this.props.history.push('/wizard/step1')}>Add New Property</button>
            <div className="house-list">{this.state.houseList.map(el => (
            <House
            id={el.id}
            name={el.name}
            address={el.address}
            city={el.city}
            state={el.state}
            zipcode={el.zipcode}
            key={el.id}
            deleteHouse={this.deleteHouse}
            />))}
            </div>   
        </div>
        )
    }
}

export default Dashboard;