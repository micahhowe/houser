import {createStore} from 'redux'

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    price: '',
    monthly_morgage_amount: '',
    desired_rent: '',
    houseList: []
}


export const UPDATE_NAME = "UPDATE_NAME"
export const UPDATE_ADDRESS = "UPDATE_ADDRESS"
export const UPDATE_CITY = "UPDATE_CITY"
export const UPDATE_STATE = "UPDATE_STATE"
export const UPDATE_ZIPCODE = "UPDATE_ZIPCODE"
export const UPDATE_PRICE = "UPDATE_PRICE"
export const ADD_HOUSE = "ADD_HOUSE"

function reducer(reduxState = initialState, action) {
    console.log(reduxState)
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
        case ADD_HOUSE:
            const {
                name,
                address,
                city,
                state,
                zipcode
            } = reduxState;
            const house = {
                name,
                address,
                city,
                state,
                zipcode
            }
            const newHouses = [...reduxState.houseList, house]
            return {...reduxState, houseList: newHouses}
        default:
            return reduxState
    }
}

 export default createStore(reducer, 
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())