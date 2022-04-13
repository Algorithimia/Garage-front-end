import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

import axios from 'axios';

export const getAllbusiness = createAsyncThunk ('business/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
    try{
      const token= getState().auth.token
      let res = await axios.get(`https://www.getgarage.me/api/v1/workshops/`,{
        headers: {
      'Content-Type': 'application/json', 
       'Authorization': `Bearer ${token}`}
      
      })
  
    return await res.data

}

  catch(e){
    return rejectWithValue(e.response.data)
  }
  
  })
  export const Favbusiness = createAsyncThunk ('favbusiness/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
    try{
      const token= getState().auth.token
      const cookies = new Cookies();
      let workshopId= cookies.get("workshop").id
      let res = await axios.get(`https://www.getgarage.me/api/v1/workshop/${workshopId}/favorites/`,{
        headers: {
      'Content-Type': 'application/json', 
       'Authorization': `Bearer ${token}`}
      
      })
  
    return await res.data

}

  catch(e){
    return rejectWithValue(e.response.data)
  }
  
  })

  const businesses = createSlice({
    name: 'businesses',
    initialState: { bussinesses:[], favbussinesses:[],isLoading:false, error:null},
    reducers:{
    
    }
    ,
    extraReducers:{
        [getAllbusiness.pending]:(state,action)=>{
           
            state.isLoading = true
            state.error = null
         
           
    
        },
        [getAllbusiness.fulfilled]:(state,action)=>{
            
            state.isLoading = false;
            state.error = null
            state.bussinesses= action.payload.results
           

            
         
    
        },
        [getAllbusiness.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
        
            
    
        },
        [Favbusiness.pending]:(state,action)=>{
           
          state.isLoading = true
          state.error = null
       
         
  
      },
      [Favbusiness.fulfilled]:(state,action)=>{
          
          state.isLoading = false;
          state.error = null
          state.favbussinesses= action.payload[0].favorites
         

          
       
  
      },
      [Favbusiness.rejected]:(state,action)=>{
          state.isLoading = false
          state.error = action.payload
      
          
  
      },
      

    }

})



export default businesses.reducer