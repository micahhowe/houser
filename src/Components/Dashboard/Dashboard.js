import React, {Component} from 'react'
import House from '../House/House'
//import store from '../../store'
import axios from 'axios'


class Dashboard extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            houseList: []
        }
        this.deleteHouse = this.deleteHouse.bind(this)

     }
    
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
        //console.log(this.state.houseList)
        console.log('house > US state:', this.props.unitedState)
        console.log('house > img:', this.props.img)
        return (
        <div className="page-content">
            <div className="dashboard">
                <h1>Dashboard</h1>
                <button onClick={() => this.props.history.push('/wizard/step1')}>Add New Property</button>
            </div>
            <hr></hr>
            <h3>Home Listings</h3>
            <div className="house-list">{this.state.houseList.map(el => (
            <House
            img={el.img}
            id={el.id}
            name={el.name}
            address={el.address}
            city={el.city}
            //you need to make sure that the name off of sql is all lowercase because postgres doesn't recognize CASE
            unitedState={el.unitedstate}
            zipcode={el.zipcode}
            monthly_mortgage_amount = {el.monthly_mortgage_amount}
            desired_rent = {el.desired_rent}
            key={el.id}
            deleteHouse={this.deleteHouse}
            />))}
            </div>   
        </div>
        )
    }
}

export default Dashboard;