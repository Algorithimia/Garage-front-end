import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

import axios from 'axios';

export const createEmploy = createAsyncThunk ('goemploy//createEmploy', 
    async(createData ,thunkAPI) =>{
        const {rejectWithValue , getState} = thunkAPI
  
     try{
          const token= getState().auth.token
      const body= JSON.stringify(createData)
      const response = await axios.post("https://www.getgarage.me/api/v1/workshop/employee/create/", body, {
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`
        }})
        return ({...createData, ...response.data}) 
       
    }
    catch (e) {
     
      return rejectWithValue(e.response.data);
      
  }
})
export const editeEmploy = createAsyncThunk ('goemploy/updateemploy',  async(editedEmployData,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
  const token= getState().auth.token
  const config = {     
    headers: { 'content-type': 'application/json',
               'Authorization': `Bearer ${token}`,
  }}
try{
if(editedEmployData.oldEmail == editedEmployData.email ){
  delete editedEmployData.email

}
let data = editedEmployData
let body= JSON.stringify(data)
let response = await axios.put("https://www.getgarage.me/api/v1/workshop/employee/update1/", body, config)

  if(response.status == 200) {
    return  ({...editedEmployData, ...response.data}) 
  }


 
}
catch(e){
  return rejectWithValue(e.response.data)
  
}


})



export const getemploys = createAsyncThunk ('employs/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
    try{
      const token= getState().auth.token
      const cookies = new Cookies();
      let workshopId= cookies.get("workshop").id
      let res = await axios.get(`https://www.getgarage.me/api/v1/workshop/${workshopId}/employees/`,{
        headers: {
      'Content-Type': 'application/json', 
       'Authorization': `Bearer ${token}`}
      
      })
  
    return await res.data

}

  catch(e){
    return rejectWithValue(e.response.data)
  }
  
  })
const GoEmploye = createSlice({
    name: 'go-employ',
    initialState: { employs:[], gocreateemploy: false, goEditeemploy:false ,isLoading:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.gocreateemploy= false
        state.goEditeemploy=false
        state.error= false

      }
    }
    ,
    extraReducers:{
        [getemploys.pending]:(state,action)=>{
           
            state.isLoading = true
            state.error = null
         
           
    
        },
        [getemploys.fulfilled]:(state,action)=>{
            
            state.isLoading = false;
            state.error = null
            state.employs= action.payload.results
           

            
         
    
        },
        [getemploys.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
           
            console.log(action.payload+'esraa')
            
    
        },
        [createEmploy.pending]:(state,action)=>{
           
            state.isLoading = true
            state.error = null
            state.gocreateemploy= false
            state.goEditeemploy=false
    
        },
        [createEmploy.fulfilled]:(state,action)=>{
         
            state.isLoading = false
            state.error= null
            state.gocreateemploy= true;
            state.goEditeemploy=false
            state.employs= [...state.employs,action.payload]
            
         
    
        },
        [createEmploy.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
            state.gocreateemploy= false
            state.goEditeemploy=false
            console.log(action.payload+'esraa')
            
    
        },
        [ editeEmploy.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
          state.gocreateemploy= false
          state.goEditeemploy=false
       
        
     },
     [ editeEmploy.fulfilled ] :(state,action)=>{
      state.isLoading = false;
      state.error= null;

      state.gocreateemploy= false
      state.goEditeemploy=true
      const index =  state.employs.findIndex(employ => employ.id == action.payload.id);                                                            
      const newArray = [...state.employs]; 
      if(index)
      {  newArray[index] = action.payload;}
      state.employs=newArray ;
  
      
      },

      [ editeEmploy.rejected ] :(state,action)=>{
           state.isLoading = false
           state.gocreateemploy= false
           state.goEditeemploy=false
           state.error = action.payload
         console.log(action)
         
      }, 
     

    }

})


export const {clearstate} = GoEmploye.actions

export default GoEmploye.reducer