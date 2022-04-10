import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const AddSparePart = createAsyncThunk ('workordrSpareParts/add', 
    async(addData ,thunkAPI) =>{
        const {rejectWithValue , getState} = thunkAPI
  
     try{
          const token= getState().auth.token
      const body= JSON.stringify(addData)
      const response = await axios.post("https://www.getgarage.me/api/v1/workshop/work_order/spare_part/add/", body, {
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`
        }})
        return ({...addData, ...response.data}) 
       
    }
    catch (e) {
     
      return rejectWithValue(e.response.data);
      
  }
})

const UsedSpareParts = createSlice({
    name: 'usedSpareParts',
    initialState: { usedSpareParts:[], isLoading:false, error:null},
    reducers:{
   
    }
    ,
    extraReducers:{

        [AddSparePart.pending]:(state,action)=>{
           
            state.isLoading = true
            state.error = null
           
    
        },
        [AddSparePart.fulfilled]:(state,action)=>{
         
            state.isLoading = false
            state.error= null
            state.usedSpareParts= [...state.usedSpareParts,action.payload]
            
         
    
        },
        [AddSparePart.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
           
            console.log(action.payload+'esraa')
            
    
        },
   
     

    }

})




export default UsedSpareParts.reducer