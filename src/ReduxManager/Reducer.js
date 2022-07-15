import { ADD_USER, REMOVE_USER,PROFILE_DATA } from "./Action";
const initialState = {
    user:{},
    profile:{}
}

export const userReducer= (state =initialState, action )=>{
    switch (action.type){
        case  ADD_USER:
            return {...state,user:action.payload}
        case REMOVE_USER:
            return {...state,user:{}}
        case PROFILE_DATA:
            return {...state,profile:action.payload}
        default:
            return state
    }
}