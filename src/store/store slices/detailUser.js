import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const getUserDetails= createAsyncThunk ('details/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
    try{
      const token= getState().auth.token
      let res = await axios.get("https://www.getgarage.me/api/v1/user/",{
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

  export const updateGrageOwner = createAsyncThunk ('userDetails/goedite',  async(editeData,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
    const token= getState().auth.token
    const config = {     
      headers: { 'content-type': 'application/json',
                 'Authorization': `Bearer ${token}`,
    }}
  try{
  if(editeData.oldEmail == editeData.email ){
    delete editeData.email
  
  }
  let data = editeData
  let body= JSON.stringify(data)
  let response = await axios.put("https://www.getgarage.me/api/v1/garage_owner/update/", body, config)
    if(response.status == 200) {
      return  ({...editeData, ...response.data}) 
    }
  }
  catch(e){
    return rejectWithValue(e.response.data)
    
  }
})
  const userDetails=createSlice({
    name:'details',
    initialState : {userDetails:cookies.get("userDetails")?cookies.get("userDetails"):[],updated:false, isLoading:false,addLoading:false, error:null},
    reducers:{
      clearUserstate:(state)=>{
        state.userDetails=[]
       

      }

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
       
        state.userDetails = action.payload
        cookies.set("userDetails", action.payload)
    
        
        },
        [ getUserDetails.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)

           
        }, 
        [ updateGrageOwner.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
          state.updated=false
          
        
     },
     [ updateGrageOwner.fulfilled ] :(state,action)=>{
      state.isLoading = false
      state.error= null
      state.updated=true
      },
      [ updateGrageOwner.rejected ] :(state,action)=>{
           state.isLoading = false
           state.error = action.payload
         console.log(action)
         state.updated=false
         
      }, 
    
    }
 


})
export const {clearUserstate} = userDetails.actions
export default userDetails.reducer
