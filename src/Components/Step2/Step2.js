import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class Step2 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            imgUrl: ''
          }
      }
    handleImageChange(e) {
          this.setState({ imgUrl: e.target.value })
          console.log(e.target.value)
    }
    goToDash = () => this.props.history.push('/')
    //This is step 4 
   
       
    render() {
        //console.log(this.state.zipcode)
        return (
        <div>
            <div className="wiz-input">
                <h2>Image Url</h2>
                <input type="text" id="text" onChange={e => this.handleImageChange(e)}/>
            </div>
                        {/* Replace the next line with Next Step & Previous Step */}
                    <button onClick={() => this.props.history.push('/wizard/step1')}>Previous Step</button>
                    <button onClick={() => this.props.history.push('/wizard/step3')}>Next Step</button>
        </div>
        )
    }
}

