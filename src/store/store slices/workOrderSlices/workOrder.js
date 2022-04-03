import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const getWorkOrders = createAsyncThunk ('workorders/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
    try{
      const token= getState().auth.token
      let res = await axios.get("http://162.0.237.5/api/v1/workshop/2/work_orders/inside/",{
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

  export const cteateWorkOrder = createAsyncThunk ('cteate/WorkOrder', 
    async(createData ,thunkAPI) =>{
        const {rejectWithValue , getState} = thunkAPI
  
     try{
          const token= getState().auth.token
      const body= JSON.stringify(createData)
      const response = await axios.post("http://162.0.237.5/api/v1/workshop/work_orders/create/", body, {
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
  const workorderSlice = createSlice({
    name: 'workOrders',
    initialState: { workorders:[], orderCreated:false , isLoading:false, error:null},
    reducers:{
  
    
    }
    ,
    extraReducers:{
        [getWorkOrders.pending]:(state,action)=>{
            state.orderCreated=false
            state.isLoading = true
            state.error = null
         
           
    
        },
        [getWorkOrders.fulfilled]:(state,action)=>{
          state.orderCreated=false
            state.isLoading = false;
            state.error = null
            state.workorders= action.payload
           

            
         
    
        },
        [getWorkOrders.rejected]:(state,action)=>{
          state.orderCreated=false
            state.isLoading = false
            state.error = action.payload
           
          
            
    
        },
        [ cteateWorkOrder.pending]:(state,action)=>{
          state.orderCreated=false
            state.isLoading = true
            state.error= null
        },
        [ cteateWorkOrder.fulfilled]:(state,action)=>{
          state.orderCreated=true
            state.isLoading = false
            state.error= null
            state.workorders= [...state.workorders,action.payload]
        },
         [cteateWorkOrder.rejected]:(state,action)=>{
          state.orderCreated=false
            state.isLoading = false
            state.error = action.payload
        },
      
    }

})

export default workorderSlice.reducer