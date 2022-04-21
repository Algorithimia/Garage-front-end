import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

import axios from 'axios';

export const createPackage = createAsyncThunk ('package/create', 
    async(createData ,thunkAPI) =>{
        const {rejectWithValue , getState} = thunkAPI
  
     try{
          const token= getState().auth.token
      const body= JSON.stringify(createData)
      const response = await axios.post("https://www.getgarage.me/api/v1/workshop/package/create/", body, {
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
export const editePackage = createAsyncThunk ('package/update',  async(editeData,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
  const token= getState().auth.token
  const config = {     
    headers: { 'content-type': 'application/json',
               'Authorization': `Bearer ${token}`,
  }}
try{

let body= JSON.stringify(editeData)
let response = await axios.put("https://www.getgarage.me/api/v1/workshop/package/update/", body, config)

  if(response.status == 200) {
    return  ({...editeData, ...response.data}) 
  }


 
}
catch(e){
  return rejectWithValue(e.response.data)
  
}


})



export const getPackages = createAsyncThunk ('packages/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
    try{
      const token= getState().auth.token
      const cookies = new Cookies();
      let workshopId= cookies.get("workshop").id
      let res = await axios.get(`https://www.getgarage.me/api/v1/workshop/${workshopId}/packages/`,{
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
const packageSlice = createSlice({
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
        [getPackages.pending]:(state,action)=>{
           
            state.isLoading = true
            state.error = null
         
           
    
        },
        [getPackages.fulfilled]:(state,action)=>{
            
            state.isLoading = false;
            state.error = null
            state.employs= action.payload.results
           

            
         
    
        },
        [getPackages.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
           
            console.log(action.payload+'esraa')
            
    
        },
        [createPackage.pending]:(state,action)=>{
           
            state.isLoading = true
            state.error = null
            state.gocreateemploy= false
            state.goEditeemploy=false
    
        },
        [createPackage.fulfilled]:(state,action)=>{
         
            state.isLoading = false
            state.error= null
            state.gocreateemploy= true;
            state.goEditeemploy=false
            state.employs= [...state.employs,action.payload]
            
         
    
        },
        [createPackage.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
            state.gocreateemploy= false
            state.goEditeemploy=false
            console.log(action.payload+'esraa')
            
    
        },
        [ editePackage.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
          state.gocreateemploy= false
          state.goEditeemploy=false
       
        
     },
     [ editePackage.fulfilled ] :(state,action)=>{
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

      [ editePackage.rejected ] :(state,action)=>{
           state.isLoading = false
           state.gocreateemploy= false
           state.goEditeemploy=false
           state.error = action.payload
         console.log(action)
         
      }, 
     

    }

})


export const {clearstate} = packageSlice.actions

export default packageSlice.reducer