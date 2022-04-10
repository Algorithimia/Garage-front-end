import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
   
export const createcustommer = createAsyncThunk ('gocustomer/createcustomer', 
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
 export const editecustommer = createAsyncThunk ('gocustomer/updateemploy',  async(editedEmployData,thunkAPI) =>{
        const {rejectWithValue , getState} = thunkAPI
        const token= getState().auth.token
        const config = {     
          headers: { 'content-type': 'application/json',
                     'Authorization': `Bearer ${token}`,
        }}
      try{
      
      let body= JSON.stringify(editedEmployData)
      let response = await axios.put("https://www.getgarage.me/api/v1/workshop/employee/update1/", body, config)
      
        if(response.status == 200) {
          return  ({...editedEmployData, ...response.data}) 
        }
      
      
       
      }
      catch(e){
        return rejectWithValue(e.response.data)
        
      }


})



export const getcustommers = createAsyncThunk ('customer/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
    try{
      const token= getState().auth.token
      let res = await axios.get("https://www.getgarage.me/api/v1/workshop/customers/",{
        headers: {
      'Content-Type': 'application/json', 
       'Authorization': `Bearer ${token}`}
      
      })
  
    return await res.data

}

  catch(e){
    return rejectWithValue(e.message)
  }
  
  })
const custommerSlice = createSlice({
    name: 'workshop-custommer',
    initialState: { custommers:[],isLoading:false, error:null},
    reducers:{
    }
    ,
    extraReducers:{
        [getcustommers.pending]:(state,action)=>{
           
            state.isLoading = true
            state.error = null
         
           
    
        },
        [getcustommers.fulfilled]:(state,action)=>{
            
            state.isLoading = false;
            state.error = null
            state.custommers= action.payload
           

            
         
    
        },
        [getcustommers.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
            state.gocreateemploy= false
            state.goEditeemploy=false
            console.log(action.payload+'esraa')
            
    
        },
        [createcustommer.pending]:(state,action)=>{
           
            state.isLoading = true
            state.error = null
            state.gocreateemploy= false
            state.goEditeemploy=false
    
        },
        [createcustommer.fulfilled]:(state,action)=>{
         
            state.isLoading = false
            state.error= null
            state.gocreateemploy= true;
            state.goEditeemploy=false
            state.custommers= [...state.custommers,action.payload]
            const navigate = useNavigate()
            navigate('/products')
         
    
        },
        [createcustommer.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
            state.gocreateemploy= false
            state.goEditeemploy=false
            console.log(action.payload+'esraa')
            
    
        },
        [ editecustommer.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
          state.gocreateemploy= false
          state.goEditeemploy=false
       
        
     },
     [ editecustommer.fulfilled ] :(state,action)=>{
      state.isLoading = true;
      state.error= null;

      state.gocreateemploy= false
      state.goEditeemploy=true
      const index =  state.custommers.findIndex(employ => employ.id == action.payload.id);                                                            
      const newArray = [...state.custommers]; 
      if(index)
      {  newArray[index] = action.payload;}
      state.custommers=newArray ;
  
      
      },

      [ editecustommer.rejected ] :(state,action)=>{
           state.isLoading = false
           state.gocreateemploy= false
           state.goEditeemploy=false
           state.error = action.payload
         console.log(action)
         
      }, 
     

    }

})




export default custommerSlice.reducer