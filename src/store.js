import {createStore} from 'redux'

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    houseList: []
}

export const UPDATE_NAME = "UPDATE_NAME"
export const UPDATE_ADDRESS = "UPDATE_ADDRESS"
export const UPDATE_CITY = "UPDATE_CITY"
export const UPDATE_STATE = "UPDATE_STATE"
export const UPDATE_ZIPCODE = "UPDATE_ZIPCODE"
export const ADD_HOUSE = "ADD_HOUSE"

function reducer(state = initialState, action) {
    switch(action.type){
        case UPDATE_NAME:
            //these are basically placing the current key value pairs into redux
            return {...state, name: action.payload}
        case UPDATE_ADDRESS:
            return {...state, address: action.payload}
        case UPDATE_CITY:
            return{...state, city: action.payload}
        case UPDATE_STATE:
            return{...state, state: action.payload}
        case UPDATE_ZIPCODE:
            return{...state, zipcode: action.payload}
        case ADD_HOUSE:
            const {
                name,
                address,
                city,
                state,
                zipcode
            } = state;
            const house = {
                name,
                address,
                city,
                state,
                zipcode
            }
            const newHouses = [...state.houseList, house]
            return {...state, houseList: newHouses}
        default:
            return 'state'
    }
}

 export default createStore(reducer, 
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())