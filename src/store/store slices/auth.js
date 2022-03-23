import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const grageOwnerRegister = createAsyncThunk ('auth/grageOwnerRegister', 
    async(registerData ,thunkAPI) =>{
    const {rejectWithValue} = thunkAPI
    try{

      const body= JSON.stringify(registerData)
      const response = await axios.post("https://test-beau-wow.herokuapp.com/api/v1/admin/users/admins/create/", body, {
        headers: {
          'Content-Type': 'application/json', 
        }})
        return (response.data) 
       
    }
    catch (e) {
      return rejectWithValue(e.message);
  }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: { loggedIn: false, isLoading:false, error:null, token:''},
    reducers:{
      logOut:(state)=>{
        state.token='';
       
    
       
      },
    }
    ,
    extraReducers:{
        [grageOwnerRegister.pending]:(state,action)=>{
           
            state.isLoading = true
            state.error = null
    
        },
        [grageOwnerRegister.fulfilled]:(state,action)=>{
         
            state.isLoading = false
            state.error= null
         
    
        },
        [grageOwnerRegister.rejected]:(state,action)=>{
            state.isLoading = false
        
            state.error = action.payload
            
    
        }

    }

})

export const { logOut } = authSlice.actions;


export default authSlice.reducer