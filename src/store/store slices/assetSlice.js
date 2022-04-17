import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

import axios from 'axios';
// get  assets
export const getAssets = createAsyncThunk ('assets/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
    try{
      const token= getState().auth.token
      const cookies = new Cookies();
      let workshopId= cookies.get("workshop").id
      let res = await axios.get(`https://www.getgarage.me/api/v1/workshop/${workshopId}/assets/`,{
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

  // get assets  type 
  export const getAssettypes = createAsyncThunk ('assets/typesget',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
    try{
      const token= getState().auth.token
      let res = await axios.get(`https://www.getgarage.me/api/v1/asset_types/`,{
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

  // add asset
  export const createAsset = createAsyncThunk ('assets/create', 
    async(createData ,thunkAPI) =>{
        const {rejectWithValue , getState} = thunkAPI
  
     try{
          const token= getState().auth.token
      const body= JSON.stringify(createData)
      const response = await axios.post("https://www.getgarage.me/api/v1/workshop/asset/create/", body, {
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
// assign employ 
export const editeAsset = createAsyncThunk ('assets/addemploy', async(editedData,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
  const token= getState().auth.token
  const config = {     
    headers: { 'content-type': 'application/json',
               'Authorization': `Bearer ${token}`,
  }}
try{
  editedData.add_employees=[{
    employee_id:editedData.employee_id,
    }]
  
  let data=editedData
let body= JSON.stringify(data)
let response = await axios.put("https://www.getgarage.me/api/v1/workshop/asset/update/", body, config)

  if(response.status == 200) {
    return  ({...editedData, ...response.data}) 
  }


 
}
catch(e){
  return rejectWithValue(e.response.data)
  
}


}) 
const assetsSlice = createSlice({
    name: 'assets',
    initialState: { assets:[],types:[],updated:false, created: false ,isLoading:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.created= false
        state.error= false

      }
    }
    ,
    extraReducers:{
        [getAssets.pending]:(state,action)=>{
           
            state.isLoading = true
            state.error = null
         
           
    
        },
        [getAssets.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.error = null
            state.assets= action.payload.results
        },
        [getAssets.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
    
        },
        [getAssettypes.pending]:(state,action)=>{
           
         
          state.error = null
       
         
  
      },
      [getAssettypes.fulfilled]:(state,action)=>{
          state.isLoading = false;
          state.error = null
          state.types= action.payload
      },
      [getAssettypes.rejected]:(state,action)=>{
          state.isLoading = false
          state.error = action.payload
  
      },

      [createAsset.pending]:(state,action)=>{
           
        state.isLoading = true
        state.error = null
        state.created= false
      
    },
    [createAsset.fulfilled]:(state,action)=>{
     
        state.isLoading = false
        state.error= null
        state.created=true
        state.assets= [...state.assets,action.payload]
        
     

    },
    [createAsset.rejected]:(state,action)=>{
        state.isLoading = false
        state.error = action.payload
        state.created= false
        console.log(action.payload+'esraa')
        

    },
    [ editeAsset.pending]:(state,action)=>{
      state.updated=false
        state.isLoading = true
        state.error= null
    },
    [ editeAsset.fulfilled]:(state,action)=>{
      state.updated=true
        state.isLoading = false
        state.error= null
     
    },
     [editeAsset.rejected]:(state,action)=>{
        state.updated=false
        state.isLoading = false
        state.error = action.payload
    },
    
      

    }

})


export const {clearstate} = assetsSlice.actions
export default assetsSlice.reducer