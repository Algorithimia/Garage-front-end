import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const grageOwnerRegister = createAsyncThunk ('auth/grageOwnerRegister', 
    async(registerData ,thunkAPI) =>{
    const {rejectWithValue} = thunkAPI
    try{

      const body= JSON.stringify(registerData)
      const response = await axios.post("https://www.getgarage.me/api/v1/garage_owner/create/", body, {
        headers: {
          'Content-Type': 'application/json', 
        
        }})
        return (response.data) 
       
    }
    catch (e) {
     
      return rejectWithValue(e.response.data);
      
  }
})
export const login = createAsyncThunk ('auth/login', 
    async(loginData ,thunkAPI) =>{
    const {rejectWithValue} = thunkAPI
    try{
      const body= JSON.stringify(loginData)
      const response = await axios.post("https://www.getgarage.me/api/v1/login/", body, {
        headers: {
          'Content-Type': 'application/json', 
       
        }})
      //  console.log(response.headers)
        return ( await response.data)
      }
      
      catch (e) {
        return rejectWithValue(e.response.data);
    }
})


const authSlice = createSlice({
    name: 'auth',
    initialState: { loggedIn:cookies.get("login")?cookies.get("login"):false, create: false ,isLoading:false, error:null, token:cookies.get("token")? cookies.get("token"):""},
    reducers:{
      logOut:(state)=>{
        cookies.remove("login")
        cookies.remove("token")
        cookies.remove("workshop")
        state.token='';
        state.loggedIn=false;
        

    
       
      },
    }
    ,
    extraReducers:{
        [grageOwnerRegister.pending]:(state,action)=>{
           
            state.isLoading = true
            state.error = null
            state.create= false
    
        },
        [grageOwnerRegister.fulfilled]:(state,action)=>{
         
            state.isLoading = false
            state.error= null
            state.create= true
         
    
        },
        [grageOwnerRegister.rejected]:(state,action)=>{
            state.isLoading = false
            state.create= false
            state.error = action.payload
            console.log(action.payload+'esraa')
            
    
        },
        [login.pending]:(state,action)=>{
          state.loggedIn=false
          state.isLoading = true
          state.error = null
  
      },
      [login.fulfilled]:(state,action)=>{
          state.loggedIn=true
          state.isLoading = false
          state.error= null
          state.token=action.payload.access
         
          cookies.set("token", action.payload.access)
          cookies.set("login", true)
     
         
       
  
      },
      [login.rejected]:(state,action)=>{
          state.isLoading = false
          state.loggedIn=false
          state.error = action.payload
         
  
      },


    }

})

export const { logOut } = authSlice.actions;


export default authSlice.reducer