import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const AddStage = createAsyncThunk ('workordrStages/add', 
    async(addData ,thunkAPI) =>{
        const {rejectWithValue , getState} = thunkAPI
  
     try{
          const token= getState().auth.token
      const body= JSON.stringify(addData)
      const response = await axios.post("https://www.getgarage.me/api/v1/workshop/work_order/stage/create/", body, {
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`
        }})
        return ({...addData, ...response.data}) 
       
    }
    catch (e) {
     
      return rejectWithValue(e.response.data);
      
  }
})

const stageSlice = createSlice({
    name: 'stage',
    initialState: { stageList:[],created:false, isLoading:false, error:null},
    reducers:{
   
    }
    ,
    extraReducers:{

        [AddStage.pending]:(state,action)=>{
           
            state.isLoading = true
            state.error = null
            state.created=false
           
    
        },
        [AddStage.fulfilled]:(state,action)=>{
         
            state.isLoading = false
            state.error= null
            state.stageList= [...state.stageList,action.payload]
            state.created=true
            
         
    
        },
        [AddStage.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
            state.created=false
            
    
        },
   
     

    }

})




export default stageSlice.reducer