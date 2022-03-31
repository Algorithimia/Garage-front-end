import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const getWorkOrders = createAsyncThunk ('workorders/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
    try{
      const token= getState().auth.token
      let res = await axios.get("http://162.0.237.5/api/v1/vehicle_models/",{
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
    name:'model',
    initialState : {addressList:[], isLoading:false,addLoading:false, error:null},
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
export default modelSlice.reducer
