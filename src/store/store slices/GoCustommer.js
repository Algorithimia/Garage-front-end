import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
   
export const createcustommer = createAsyncThunk ('gocustomer/createcustomer', 
async(createData ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI

 try{
      const token= getState().auth.token
  const body= JSON.stringify(createData)
  const response = await axios.post("http://162.0.237.5/api/v1/workshop/employee/create/", body, {
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
      let response = await axios.put("http://162.0.237.5/api/v1/workshop/employee/update1/", body, config)
      
        if(response.status == 200) {
          return  ({...editedEmployData, ...response.data}) 
        }
      
      
       
      }
      catch(e){
        return rejectWithValue(e.response.data)
        
      }


})



export const getcustommers = createAsyncThunk ('gocustomer/getcustommers',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
    try{
      const token= getState().auth.token
      let res = await axios.get("http://162.0.237.5/api/v1/workshop/2/custommeres/",{
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
const Gocustommer = createSlice({
    name: 'go',
    initialState: { custommer:[], gocreatecustommer:false, goEditecustommer:false ,isLoading:false, error:null},
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
            state.employs= action.payload.results
           

            
         
    
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
            state.employs= [...state.employs,action.payload]
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
        [ editeEmploy.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
          state.gocreateemploy= false
          state.goEditeemploy=false
       
        
     },
     [ editeEmploy.fulfilled ] :(state,action)=>{
      state.isLoading = true;
      state.error= null;

      state.gocreateemploy= false
      state.goEditeemploy=true
      const index =  state.employs.findIndex(employ => employ.id == action.payload.id);                                                            
      const newArray = [...state.employs]; 
      if(index)
      {  newArray[index] = action.payload;}
      state.employs=newArray ;
  
      
      },

      [ editeEmploy.rejected ] :(state,action)=>{
           state.isLoading = false
           state.gocreateemploy= false
           state.goEditeemploy=false
           state.error = action.payload
         console.log(action)
         
      }, 
     

    }

})




export default GoEmploye.reducer