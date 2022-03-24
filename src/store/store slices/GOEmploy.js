import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const createEmploy = createAsyncThunk ('auth/createEmploy', 
    async(createData ,thunkAPI) =>{
        const {rejectWithValue , getState} = thunkAPI
  
     try{
          const token= getState().auth.token
      const body= JSON.stringify(createData)
      const response = await axios.post("http://162.0.237.5/api/v1/workshop/employee/create/", body, {
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`
        }})
        return (response.data) 
       
    }
    catch (e) {
     
      return rejectWithValue(e.response.data);
      
  }
})

const GoEmploye = createSlice({
    name: 'auth',
    initialState: {  createemploy: false ,isLoading:false, error:null},
    reducers:{
    }
    ,
    extraReducers:{
        [createEmploy.pending]:(state,action)=>{
           
            state.isLoading = true
            state.error = null
            state.create= false
    
        },
        [createEmploy.fulfilled]:(state,action)=>{
         
            state.isLoading = false
            state.error= null
            state.createemploy= true
         
    
        },
        [createEmploy.rejected]:(state,action)=>{
            state.isLoading = false
            state.create= false
            state.error = action.payload
            console.log(action.payload+'esraa')
            
    
        },
     

    }

})




export default GoEmploye.reducer