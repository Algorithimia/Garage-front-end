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



export const getemploys = createAsyncThunk ('employs/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
    try{
      const token= getState().auth.token
      let res = await axios.get("http://162.0.237.5/api/v1/workshop/2/employees/",{
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
const GoEmploye = createSlice({
    name: 'auth',
    initialState: { employs:[], gocreateemploy: false ,isLoading:false, error:null},
    reducers:{
    }
    ,
    extraReducers:{
        [getemploys.pending]:(state,action)=>{
           
            state.isLoading = true
            state.error = null
           
    
        },
        [getemploys.fulfilled]:(state,action)=>{
            
            state.isLoading = false
            state.error= null
            state.employs= action.payload.results

            
         
    
        },
        [getemploys.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
            state.gocreateemploy= false
            console.log(action.payload+'esraa')
            
    
        },
        [createEmploy.pending]:(state,action)=>{
           
            state.isLoading = true
            state.error = null
            state.gocreateemploy= false
    
        },
        [createEmploy.fulfilled]:(state,action)=>{
         
            state.isLoading = false
            state.error= null
            state.gocreateemploy= setTimeout(true, 3000);
            state.employs= [...state.employs,action.payload]
         
    
        },
        [createEmploy.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
            state.gocreateemploy= false
            console.log(action.payload+'esraa')
            
    
        },
     

    }

})




export default GoEmploye.reducer