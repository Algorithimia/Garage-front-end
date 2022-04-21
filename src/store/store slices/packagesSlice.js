import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import axios from 'axios';
let formData = new FormData(); 
export const createPackage = createAsyncThunk ('package/create', 
    async(createData ,thunkAPI) =>{
        const {rejectWithValue , getState} = thunkAPI
  
     try{
          const token= getState().auth.token
          
          formData.append('workshop_id', createData.workshop_id);
          formData.append('title', createData.title);
          formData.append('price', createData.price);
          formData.append('image', createData.image);
          formData.append('description', createData.description);
     
      const response = await axios.post("https://www.getgarage.me/api/v1/workshop/package/create/", formData, {
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
export const editePackage = createAsyncThunk ('package/update',  async(editeData,thunkAPI) =>{
  const {rejectWithValue , getState} = thunkAPI
  const token= getState().auth.token
  const config = {     
    headers: { 'content-type': 'application/json',
               'Authorization': `Bearer ${token}`,
  }}
try{
 
    editeData.workshop_id&& formData.append('workshop_id', editeData.workshop_id);
    editeData.title&&formData.append('title', editeData.title);
    editeData.price&&formData.append('price', editeData.price);
    editeData.image !=='' &&formData.append('image', editeData.image);
    editeData.description&& formData.append('description', editeData.description);
    editeData.package_id&& formData.append('package_id', editeData.package_id);

let response = await axios.put("https://www.getgarage.me/api/v1/workshop/package/update/", formData, config)

  if(response.status == 200) {
    return  ({...editeData, ...response.data}) 
  }


 
}
catch(e){
  return rejectWithValue(e.response.data)
  
}


})



export const getPackages = createAsyncThunk ('packages/get',  async(_ ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
  
    try{
      const token= getState().auth.token
      const cookies = new Cookies();
      let workshopId= cookies.get("workshop").id
      let res = await axios.get(`https://www.getgarage.me/api/v1/workshop/${workshopId}/packages/`,{
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
  export const deletePackage=   createAsyncThunk ('package/delete',  async(deleteData ,thunkAPI) =>{
    const {rejectWithValue , getState} = thunkAPI
    const token= getState().auth.token
    try {
      const body= JSON.stringify(deleteData)
      const response = await axios.delete("https://www.getgarage.me/api/v1/workshop/package/delete/", {
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`,
        },data: body})
        if(response.status==200)
       return deleteData.package_id
      }
      catch (e) {
      return rejectWithValue(e.message);
    }
    })
const packageSlice = createSlice({
    name: 'go-employ',
    initialState: { packages:[], created: false, updated:false ,isLoading:false, error:null},
    reducers:{
      clearstate:(state)=>{
        state.created= false
        state.updated=false
        state.error= false

      }
    }
    ,
    extraReducers:{
        [getPackages.pending]:(state,action)=>{
           
            state.isLoading = true
            state.error = null
         
           
    
        },
        [getPackages.fulfilled]:(state,action)=>{
            
            state.isLoading = false;
            state.error = null
            state.packages= action.payload.results
           

            
         
    
        },
        [getPackages.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
           
            console.log(action.payload+'esraa')
            
    
        },
        [createPackage.pending]:(state,action)=>{
           
            state.isLoading = true
            state.error = null
            state.created= false
            state.updated=false
    
        },
        [createPackage.fulfilled]:(state,action)=>{
         
            state.isLoading = false
            state.error= null
            state.created= true;
            state.updated=false
            state.packages= [...state.packages,action.payload]
            
         
    
        },
        [createPackage.rejected]:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
            state.created= false
            state.updated=false
            console.log(action.payload+'esraa')
            
    
        },
        [ editePackage.pending ] :(state,action)=>{

          state.isLoading = true
          state.error = null
          state.created= false
          state.updated=false
       
        
     },
     [ editePackage.fulfilled ] :(state,action)=>{
      state.isLoading = false;
      state.error= null;

      state.created= false
      state.updated=true
      const index =  state.packages.findIndex(employ => employ.id == action.payload.id);                                                            
      const newArray = [...state.packages]; 
      if(index)
      {  newArray[index] = action.payload;}
      state.packages=newArray ;
  
      
      },

      [ editePackage.rejected ] :(state,action)=>{
           state.isLoading = false
           state.created= false
           state.updated=false
           state.error = action.payload
         console.log(action)
         
      }, 
      [ deletePackage.pending ] :(state,action)=>{

        state.isLoading = true
        state.error = null
        
      
   },
   [ deletePackage.fulfilled ] :(state,action)=>{
    state.isLoading = false
    state.error= null
    state.packages  = state.packages.filter((packag)=>packag.id != action.payload)
    
  

    
    },
    [ deletePackage.rejected ] :(state,action)=>{
         state.isLoading = false
         state.error = action.payload
        
      
       
    }, 

     

    }

})


export const {clearstate} = packageSlice.actions

export default packageSlice.reducer