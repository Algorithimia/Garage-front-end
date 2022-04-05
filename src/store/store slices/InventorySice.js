import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const getSpareParts = createAsyncThunk ('spareparts/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
    try{
      const token= getState().auth.token
      let res = await axios.get("https://www.getgarage.me/api/v1/workshop/2/spare_parts/",{
        headers: {
      'Content-Type': 'application/json', 
       'Authorization': `Bearer ${token}`}
      
      }) 
  
    return await res.data.results

}

  catch(e){
    return rejectWithValue(e.response.data)
  }
  
  })
  const inventorySlice= createSlice({
    name:'inventory',
    initialState : {spareParts:[], isLoading:false,addLoading:false, error:null},
    reducers:{

    },
    extraReducers:{
         // ............. start address ......................
        [ getSpareParts.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
          
       },
       [ getSpareParts.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.spareParts = action.payload
    
        
        },
        [ getSpareParts.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
    
    }
 


})
export default inventorySlice.reducer
