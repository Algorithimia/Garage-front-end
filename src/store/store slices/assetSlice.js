import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

import axios from 'axios';

export const getAssets = createAsyncThunk ('assets/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
    try{
      const token= getState().auth.token
      const cookies = new Cookies();
      let workshopId= cookies.get("workshop").id
      let res = await axios.get(`https://www.getgarage.me/api/v1/workshop/${workshopId}/assets/`,{
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
  export const getAssettypes = createAsyncThunk ('assets/typesget',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
    try{
      const token= getState().auth.token
      let res = await axios.get(`https://www.getgarage.me/api/v1/asset_types/`,{
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
const assetsSlice = createSlice({
    name: 'assets',
    initialState: { assets:[],types:[], created: false ,isLoading:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.created= false
        state.error= false

      }
    }
    ,
    extraReducers:{
        [getAssets.pending]:(state,action)=>{
           
            state.isLoading = true
            state.error = null
         
           
    
        },
        [getAssets.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.error = null
            state.assets= action.payload.results
        },
        [getAssets.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
    
        },
        [getAssettypes.pending]:(state,action)=>{
           
         
          state.error = null
       
         
  
      },
      [getAssettypes.fulfilled]:(state,action)=>{
          state.isLoading = false;
          state.error = null
          state.types= action.payload
      },
      [getAssettypes.rejected]:(state,action)=>{
          state.isLoading = false
          state.error = action.payload
  
      },
    
      

    }

})


export const {clearstate} = assetsSlice.actions
export default assetsSlice.reducer