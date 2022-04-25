import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getUserDetails} from './detailUser'
import axios from 'axios';
let formData = new FormData(); 
export const creatWorkshop = createAsyncThunk ('goemploy/creatWorkshop', 
    async(createData ,thunkAPI) =>{
        const {rejectWithValue , getState} = thunkAPI
  
     try{
          const token= getState().auth.token
    //   const body= JSON.stringify(createData)

      formData.append('title', createData.title);
      formData.append('area_id', createData.area_id);
      formData.append('image', createData.image);
      
      const response = await axios.post("https://www.getgarage.me/api/v1/workshop/create/", formData, {
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

export const updateWorkshop = createAsyncThunk ('workshop/update',  async(editeData,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
  const token= getState().auth.token
  const config = {     
    headers: { 'content-type': 'application/json',
               'Authorization': `Bearer ${token}`,
  }}
try{

let body= JSON.stringify(editeData)
let response = await axios.put("https://www.getgarage.me/api/v1/workshop/update/", body, config)
  if(response.status == 200) {
    return  ({...editeData, ...response.data}) 
  }
}
catch(e){
  return rejectWithValue(e.response.data)
  
}
})
const workshop = createSlice({
    name: 'workshop',
    initialState: { workshops:[],workshopUpdated:false,created:false,isLoading:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.gocreateemploy= false
        state.goEditeemploy=false

      }
    }
    ,
    extraReducers:{
        [creatWorkshop.pending]:(state,action)=>{
           
            state.isLoading = true
            state.error = null
        
    
        },
        [creatWorkshop.fulfilled]:(state,action)=>{
         
            state.isLoading = false
            state.error= null
             state.created=true
          
            
            
         
    
        },
        [creatWorkshop.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
        
            console.log(action.payload+'esraa')
            
    
        },
        [ getUserDetails.fulfilled ] :(state,action)=>{
          state.created=false
      
          
          },
          [ updateWorkshop.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            state.workshopUpdated=false
            
          
       },
       [ updateWorkshop.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.workshopUpdated=true
        },
        [ updateWorkshop.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           state.workshopUpdated=false
           
        }, 
       
    }

})




export default workshop.reducer