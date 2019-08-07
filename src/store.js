import {createStore} from 'redux'

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    price: '',
    img: '',
    monthly_mortgage_amount: '',
    desired_rent: '',
}


export const UPDATE_NAME = "UPDATE_NAME"
export const UPDATE_ADDRESS = "UPDATE_ADDRESS"
export const UPDATE_CITY = "UPDATE_CITY"
export const UPDATE_STATE = "UPDATE_STATE"
export const UPDATE_ZIPCODE = "UPDATE_ZIPCODE"
export const UPDATE_PRICE = "UPDATE_PRICE"
export const UPDATE_IMAGE = "UPDATE_IMAGE"
export const UPDATE_MORTGAGE = "UPDATE_MORTGAGE"
export const UPDATE_RENT = "UPDATE_RENT"
export const RESET_INPUTS = "RESET_INPUTS"

function reducer(reduxState = initialState, action) {
    //console.log(reduxState)
    switch(action.type){
        case UPDATE_NAME:
            //these are basically placing the current key value pairs into redux
            return {...reduxState, name: action.payload}
        case UPDATE_ADDRESS:
            return {...reduxState, address: action.payload}
        case UPDATE_CITY:
            return{...reduxState, city: action.payload}
        case UPDATE_STATE:
            return{...reduxState, state: action.payload}
        case UPDATE_ZIPCODE:
            return{...reduxState, zipcode: action.payload}
        case UPDATE_IMAGE:
            return {...reduxState, img: action.payload}
        case UPDATE_MORTGAGE:
            return {...reduxState, monthly_morgage_amount: action.payload}
        case UPDATE_RENT:
            return {...reduxState, desired_rent: action.payload}
        case RESET_INPUTS:
            return {...reduxState,
                name:'',
                address:'',
                city:'',
                zipcode:0,
                state:'',
                img:'',
                monthly_morgage_amount:0,
                desired_rent:0,
            }
        default:
            return reduxState
    }
}

 export default createStore(reducer, 
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())