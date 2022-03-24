import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const getInsideWorkshops= createAsyncThunk ('address/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
    try{
      const token= getState().auth.token
      let res = await axios.get("http://162.0.237.5/api/v1/garage_owner/workshops/",{
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

  
  const insideWorkshopsSlice= createSlice({
    name:'discounts',
    initialState : {insideWorkShopLists:[], isLoading:false,addLoading:false, error:null},
    reducers:{

    },
    extraReducers:{
         // ............. start address ......................
        [ getInsideWorkshops
            .pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
          
       },
       [ getInsideWorkshops
        .fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
       
        state.insideWorkShopLists = action.payload
    
        
        },
        [ getInsideWorkshops
            .rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
    
    }
 


})
export default insideWorkshopsSlice.reducer
