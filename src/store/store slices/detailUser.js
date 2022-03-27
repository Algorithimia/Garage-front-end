import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const getUserDetails= createAsyncThunk ('details/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
    try{
      const token= getState().auth.token
      let res = await axios.get("http://162.0.237.5/api/v1/user/",{
        headers: {
      'Content-Type': 'application/json', 
       'Authorization': `Bearer ${token}`}
      
      })
  
    return await res.data

}

  catch(e){
    return rejectWithValue(e.message)
  }
  
  })

  
  const userDetails=createSlice({
    name:'discounts',
    initialState : {insideWorkShopLists:[], isLoading:false,addLoading:false, error:null},
    reducers:{

    },
    extraReducers:{
         // ............. start address ......................
        [ getUserDetails.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
          
       },
       [ getUserDetails.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
       
        state.insideWorkShopLists = action.payload.workshops
    
        
        },
        [ getUserDetails.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
    
    }
 


})
export default userDetails.reducer
