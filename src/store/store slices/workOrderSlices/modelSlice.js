import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const getModels = createAsyncThunk ('models/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
    try{
      const token= getState().auth.token
      let res = await axios.get("https://www.getgarage.me/api/v1/vehicle_models/",{
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
  const modelSlice= createSlice({
    name:'models',
    initialState : {models:[], isLoading:false,addLoading:false, error:null},
    reducers:{

    },
    extraReducers:{
         // ............. start address ......................
        [ getModels.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
          
       },
       [ getModels.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.models = action.payload
    
        
        },
        [ getModels.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
    
    }
 


})
export default modelSlice.reducer
