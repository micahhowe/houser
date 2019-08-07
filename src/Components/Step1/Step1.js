import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import  store, {UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIPCODE, RESET_INPUTS } from '../../store'
//import store from '../../store'
//console.log(store)

export default class Step1 extends Component {
    constructor(props) {
        super(props)
      
        const reduxState = store.getState()
        this.state = {
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zipcode: reduxState.zipcode,
        };
        
        }
      
    handleNameChange(e) {
        store.dispatch({
            type: UPDATE_NAME,
            payload: e.target.value
          })
    }
    handleAddressChange(e) {
        store.dispatch({
            type: UPDATE_ADDRESS,
            payload: e.target.value
          })
    }
    handleCityChange(e) {
        store.dispatch({
            type: UPDATE_CITY,
            payload: e.target.value
          })
    }
    handleStateChange(e) {
        store.dispatch({
            type: UPDATE_STATE,
            payload: e.target.value
          })
    }
    handleZipChange(e) {
        store.dispatch({
            type: UPDATE_ZIPCODE,
            payload: e.target.value
          })
    }
    buttonActions(){
        store.dispatch({
            type: UPDATE_NAME,
            payload: this.state.name
        })
        store.dispatch({
            type: UPDATE_ADDRESS,
            payload: this.state.address
        })
        store.dispatch({
            type: UPDATE_CITY,
            payload: this.state.city
        })
        store.dispatch({
            type: UPDATE_STATE,
            payload: this.state.houseState
        })
        store.dispatch({
            type:UPDATE_ZIPCODE,
            payload: this.state.zip_code
        })
        //() => this.props.history.push('/wizard/step2')
    }
    resetInputs() {
        store.dispatch({
            type: RESET_INPUTS
        })
    }
    //goToDash = () => this.props.history.push('/')
    componentDidMount(){
            store.subscribe(() => {
              const reduxState = store.getState();
              this.setState({
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.houseState,
                zipcode: reduxState.zipcode,
              })
            })
            console.log(this.state)
          }
    render() {
        //console.log(this.state.zipcode)
        return (
        <div>
            <div className="wiz-input">
                <h2>Name</h2>
                <input type="text" id="text" onChange={e => this.handleNameChange(e)}/>
                <h2>Address</h2>
                <input type="text" id="text1" onChange={e => this.handleAddressChange(e)}/>
                <h2>City</h2>
                <input type="text" id="text2" onChange={e => this.handleCityChange(e)}/>
                <h2>State</h2>
                <input type="text" id="text3" onChange={e => this.handleStateChange(e)}/>
                <h2>Zipcode</h2>
                <input type="text" id="text4" onChange={e => this.handleZipChange(e)}/>
            </div>
            {/* Replace the next line with Next Step */}
            <Link to='/wizard/step2'>
                <button onClick={() => this.buttonActions()}>Next Step</button>
            </Link>
        </div>
        )
    }
}

