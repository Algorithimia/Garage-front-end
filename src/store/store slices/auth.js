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
     
        return {...response.data , ['remember']:loginData.remember}
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
        localStorage.clear();
        state.token='';
        state.loggedIn=false;
        

    
       
      },
      clearstate:(state)=>{
        state.error= false
        state.create= false
      }
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
            state.loggedIn=true
            state.token=action.payload.access
            // let remember=action.payload.remember
            // let date= new Date()
            // let expire =remember ? new Date(new Date().setDate(date.getDate()+7)) : ''
           console.log(action.payload)
           cookies.remove("login")
           cookies.remove("token")
           cookies.remove("workshop")
            cookies.set("token", action.payload.access)
            cookies.set("login", true)
            
         
       
        },
        [grageOwnerRegister.rejected]:(state,action)=>{
            state.isLoading = false
            state.create= false
            state.loggedIn=false
            state.error = action.payload
           
          
            
    
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
          let remember=action.payload.remember
          let date= new Date()
          let expire = new Date(new Date().setDate(date.getDate()+1))
         console.log(action.payload)
         cookies.remove("login")
         cookies.remove("token")
         cookies.remove("workshop")
          cookies.set("token", action.payload.access, {expires : expire})
          cookies.set("login", true,{expires :expire})
     
         
       
  
      },
      [login.rejected]:(state,action)=>{
          state.isLoading = false
          state.loggedIn=false
          state.error = action.payload
         
  
      },


    }

})

export const { logOut } = authSlice.actions;
export const {clearstate} = authSlice.actions


export default authSlice.reducer