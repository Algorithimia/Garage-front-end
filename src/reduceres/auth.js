import {OWNER_LOADED, OWNER_REGISTER_SUCCESS, OWNER_REGISTER_FAIL, OWNER_LOGIN_SUCCESS, OWNER_LOGIN_FAIL} from '../actions/types'
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated:null,
    loading: true,
    user:null
}

export default function( state = initialState, action){
    const {type, payload} = action

    switch(type){

        case OWNER_LOADED: 
        return{
            ...state,
            isAuthenticated:true,
            loading:false,
            user:  payload,
        }

        case OWNER_REGISTER_SUCCESS:
        case OWNER_LOGIN_SUCCESS:
            localStorage.setItem('token',payload.token)
            return{
                ...state,
                ...payload,
                isAuthenticated:true,
                loading:false
            }
  
    default:
        return state


    }
   
}