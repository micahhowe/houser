import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import store, { UPDATE_IMAGE } from '../../store';

export default class Step2 extends Component {
    constructor(props) {
        super(props)
      
        const reduxState = store.getState()
        this.state = {
        img: reduxState.img,
      }
    }
    handleImageChange(e) {
        store.dispatch({
            type: UPDATE_IMAGE,
            payload: e.target.value
          })  
          //This line is very important, otherwise we are never setting state
        this.setState({
            img:e.target.value
        })
    }
    goToDash = () => this.props.history.push('/')
    
   buttonActions() {
    store.dispatch({
        type: UPDATE_IMAGE,
        payload: this.state.img
})
        
   }
       
    render() {
        //console.log(this.state.zipcode)
        return (
        <div>
            <div className="wiz-input">
                <h2>Image Url</h2>
                <input type="text" id="text" onChange={e => this.handleImageChange(e)}/>
            </div>
                        {/* Replace the next line with Next Step & Previous Step */}
                <Link to='/wizard/step1'>
                    <button onClick={() => this.buttonActions()}>Previous Step</button>
                </Link>
                <Link to='/wizard/step3'>
                    <button onClick={() => this.buttonActions()}>Next Step</button>
                </Link>
        </div>
        )
    }
}

