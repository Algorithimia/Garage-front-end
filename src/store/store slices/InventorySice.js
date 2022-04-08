import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

import axios from 'axios';
let formData = new FormData(); 
export const getSpareParts = createAsyncThunk ('spareparts/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
    try{
      const token= getState().auth.token
      const cookies = new Cookies();
      let workshopId= cookies.get("workshop").id
      let res = await axios.get(`https://www.getgarage.me/api/v1/workshop/${workshopId}/spare_parts/`,{
        headers: {
      'Content-Type': 'application/json', 
       'Authorization': `Bearer ${token}`}
      
      }) 
  
    return await res.data.results

}

  catch(e){
    return rejectWithValue(e.response.data)
  }
  
  })
  export const addSparePart = createAsyncThunk ('spareparts/create', 
    async(createData ,thunkAPI) =>{
        const {rejectWithValue , getState} = thunkAPI
  
     try{
          const token= getState().auth.token
          formData.append('workshop_id', createData.workshop_id);
          formData.append('type_id', createData.type_id);
          formData.append('quantity', createData.quantity);
          formData.append('title', createData.title);
          formData.append('description', createData.description);
          formData.append('unit_price', createData.unit_price);
          formData.append('galleries ', createData.galleries );
          formData.append('is_purchase ', createData.is_purchase );
          

      const response = await axios.post("https://www.getgarage.me/api/v1/workshop/spare_part/create/", formData, {
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

export const editePart = createAsyncThunk ('sparepart/Edite',  async(EditeData,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
  const token= getState().auth.token
  const config = {     
    headers: { 'content-type': 'application/json',
               'Authorization': `Bearer ${token}`,
  }}
try{
  formData.append('workshop_id', EditeData.workshop_id);
  formData.append('spare_part_id', EditeData.spare_part_id);
  formData.append('type_id', EditeData.type_id);
  formData.append('quantity', EditeData.quantity);
  formData.append('title', EditeData.title);
  formData.append('description', EditeData.description);
  formData.append('unit_price', EditeData.unit_price);
  formData.append('galleries ', EditeData.galleries );
  formData.append('is_purchase ', EditeData.is_purchase );

let response = await axios.put("https://www.getgarage.me/api/v1/workshop/spare_part/update/", formData, config)

  if(response.status == 200) {
    return  ({...EditeData, ...response.data}) 
  }


 
}
catch(e){
  return rejectWithValue(e.response.data)
  
}


})


  const inventorySlice= createSlice({
    name:'inventory',
    initialState : {spareParts:[], isLoading:false,created:false,edited:false, addLoading:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.created= false
        state.edited= false
        state.error= false

      }

    },
    extraReducers:{
         // ............. start address ......................
        [ getSpareParts.pending ] :(state,action)=>{

            state.isLoading = true
            state.error = null
            
          
       },
       [ getSpareParts.fulfilled ] :(state,action)=>{
        state.isLoading = false
        state.error= null
        state.spareParts = action.payload
    
        
        },
        [ getSpareParts.rejected ] :(state,action)=>{
             state.isLoading = false
             state.error = action.payload
           console.log(action)
           
        }, 
        [addSparePart.pending]:(state,action)=>{
           
          state.isLoading = true
          state.error = null
          state.created= false
      
  
      },
      [addSparePart.fulfilled]:(state,action)=>{
       
          state.isLoading = false
          state.error= null
          state.created= true;
      
          state.spareParts= [...state.spareParts,action.payload]
          
       
  
      },
      [addSparePart.rejected]:(state,action)=>{
          state.isLoading = false
          state.error = action.payload
          state.created= false
      
          console.log(action.payload+'esraa')
          
  
      },
      [editePart.pending ] :(state,action)=>{

        state.isLoading = true
        state.error = null
        state.created= false
        state.edited=false
     
      
   },
   [editePart.fulfilled ] :(state,action)=>{
    state.isLoading = false;
    state.error= null;
    state.created= false
    state.edited= true
    
    const index =  state.spareParts.findIndex(part => part.id == action.payload.id);                                                            
    const newArray = [...state.spareParts]; 
    if(index)
    {  newArray[index] = action.payload;}
    state.spareParts=newArray ;

    
    },

    [editePart.rejected ] :(state,action)=>{
         state.isLoading = false
         state.error = null
         state.created= false
         state.edited=false
         state.error = action.payload
       console.log(action)
       
    }, 
   
    
    }
 


})
export const {clearstate} = inventorySlice.actions
export default inventorySlice.reducer
