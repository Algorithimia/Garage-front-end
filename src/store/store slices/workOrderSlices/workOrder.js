import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const getWorkOrders = createAsyncThunk ('workorders/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
    try{
      const token= getState().auth.token
      let res = await axios.get("https://www.getgarage.me/api/v1/workshop/2/work_orders/inside/",{
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
          createData.vehicle={
            model_id:createData.model_id,
            name:createData.model_id,
            fuel_type:createData.fuel_type,
            fuel_indicator:createData.fuel_indicator,
            kilometer_driven:createData.kilometer_driven,
            chassis_number:createData.chassis_number,
            engine_number:createData.engine_number,
            vehicle_number:createData.vehicle_number,

          }
          createData.customer={
            email:createData.email,
            name:createData.name,
            phone:createData.phone,
            area_id:createData.area_id,
            country_id:createData.country_id,
            tax_id:createData.tax_id,
            

          }
         
            // delete createData.model_id
            // delete createData.fuel_type
            // delete createData.fuel_indicator
            // delete createData.kilometer_driven
            // delete createData.chassis_number
            // delete createData.engine_number
            // delete createData.vehicle_number

            // delete createData.email
            // delete createData.name
            // delete createData.phone
            // delete createData.area_id
            // delete createData.country_id
            // delete createData.tax_id
            let data = createData
   
      const body= JSON.stringify(data)
      const response = await axios.post("https://www.getgarage.me/api/v1/workshop/work_orders/create/", body, {
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
      clearstate:(state)=>{
        state.orderCreated= false
        state.error= false

      }
  
    
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
export const {clearstate} = workorderSlice.actions

export default workorderSlice.reducer