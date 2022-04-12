import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

import axios from 'axios';

export const addAppointment = createAsyncThunk ('Appointment/add', 
    async(createData ,thunkAPI) =>{
        const {rejectWithValue , getState} = thunkAPI
  
     try{
          const token= getState().auth.token
      
      createData.start_at= createData.start_at_date + ' ' + createData.start_at_time+':00'
      let data=createData
      const body= JSON.stringify(data)
      const response = await axios.post("https://www.getgarage.me/api/v1/workshop/appointment/create/", body, {
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
export const editeAppointment = createAsyncThunk ('Appintment/edite',  async(editeData,thunkAPI) =>{
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
let response = await axios.put("https://www.getgarage.me/api/v1/workshop/appointment/update/", body, config)
  if(response.status == 200) {
    return  ({...editeData, ...response.data}) 
  }
}
catch(e){
  return rejectWithValue(e.response.data)
  
}


})



export const geAppointments = createAsyncThunk ('appointments/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
    try{
      const token= getState().auth.token
      const cookies = new Cookies();
      let workshopId= cookies.get("workshop").id
      let res = await axios.get(`https://www.getgarage.me/api/v1/workshop/${workshopId}/inside_appointments/`,{
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
const appointmentSlice = createSlice({
    name: 'Appointment',
    initialState: { appointmentsList:[],created:false, edited:false, isLoading:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.created= false
        state.error= false
        state.edited=false

      }
    }
    ,
    extraReducers:{
        [geAppointments.pending]:(state,action)=>{
           
            state.isLoading = true
            state.error = null
         
           
    
        },
        [geAppointments.fulfilled]:(state,action)=>{
            
            state.isLoading = false;
            state.error = null
            state.appointmentsList= action.payload.results
           

            
         
    
        },
        [geAppointments.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
           
           
            
    
        },
        [addAppointment.pending]:(state,action)=>{
           
            state.isLoading = true
            state.error = null
            state.created=false
            state.edited=false
          
    
        },
        [addAppointment.fulfilled]:(state,action)=>{
         
            state.isLoading = false
            state.error= null
            state.created=true
            state.edited=false
            state.appointmentsList= [...state.appointmentsList,action.payload]
            
         
    
        },
        [addAppointment.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
            state.created=false
            state.edited=false
          

            
    
        },
        [ editeAppointment.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
          state.created=false
          state.edited=false
       
        
     },
     [ editeAppointment.fulfilled ] :(state,action)=>{
      state.isLoading = false;
      state.error= null;

      state.created= false
      state.edited=true

      const index =  state.appointmentsList.findIndex(appoint => appoint.id == action.payload.id);                                                            
      const newArray = [...state.appointmentsList]; 
      if(index)
      {  newArray[index] = action.payload;}
      state.appointmentsList=newArray ;
  
      
      },

      [ editeAppointment.rejected ] :(state,action)=>{
           state.isLoading = false
           state.created= false
           state.edited=false
           state.error = action.payload
         console.log(action)
         
      }, 
     

    }

})


export const {clearstate} = appointmentSlice.actions

export default appointmentSlice.reducer