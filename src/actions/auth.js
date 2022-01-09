import axios from 'axios'
import {OWNER_REGISTER_SUCCESS, OWNER_REGISTER_FAIL, OWNER_LOGIN_SUCCESS, OWNER_LOGIN_FAIL} from './types'
//register owner
export const ownerregister =({workshopname,workshopAddress, name,phone , email, password}) => async dispatch =>{
    const config ={
        headers:{
            'Content-Type': 'application/json'
        }
    }
    const body= JSON.stringify({ workshopname,workshopAddress, name,phone , email, password})
    try{
    // const res= await axios.post('/api/users', body, config)
     dispatch({
         type:OWNER_REGISTER_SUCCESS,
     //    payload:res.data
           payload:body 
     })
    
    
    }catch(e){
        const errors = e.response.data.errors
        if(errors){
            errors.forEach(error => console.log(error.msg))
        }
        dispatch({
            type:OWNER_REGISTER_FAIL
        })

    }

}