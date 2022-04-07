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
const workshop = createSlice({
    name: 'workshop',
    initialState: { workshops:[],created:false,isLoading:false, error:null},
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
       
    }

})




export default workshop.reducer