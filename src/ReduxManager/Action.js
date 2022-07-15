export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const PROFILE_DATA = 'PROFILE_DATA'
export const addUser=(user)=>{
    return{
        type:ADD_USER,
        payload:user
    }
}
export const removeUser=()=>{
    return{
        type:REMOVE_USER
    }
}
export const addProfile=(profile)=>{
    return{
        type:PROFILE_DATA,
        payload:profile
    }
}