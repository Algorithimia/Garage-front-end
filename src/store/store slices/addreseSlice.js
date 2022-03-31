import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const getaddress = createAsyncThunk ('address/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
  try{
    const token= getState().auth.token
  
    let res = await axios.get(`http://162.0.237.5/api/v1/addresses/`,{
      headers: {
       'Content-Type': 'application/json',
      
      }
    
    
    })
    console.log(token)
  
    return await res.data

}

  catch(e){
    return rejectWithValue(e.message)
  }
  
  })

  const addressesSlice= createSlice({
    name:'address',
    initialState : {addressList:[], isLoading:false, error:null},
    reducers:{

    },
    extraReducers:{
         // ............. start address ......................
        [ getaddress.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
          
       },
       [ getaddress.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.addressList = action.payload
    
        
        },
        [ getaddress.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
    
    }
 


})
export default addressesSlice.reducer
