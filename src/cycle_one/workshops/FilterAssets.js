import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import  {getAssettypes} from '../../store/store slices/assetSlice'
import moment from 'moment'
import { useDispatch,useSelector } from 'react-redux'

const FilterAssets = ({assets , setFilteredData}) => {
    const dispatch = useDispatch()
    
    const[type_id, setTypeId] = useState()
    const[date,setDate] = useState(null)
    const {types, isLoading, error} = useSelector((state)=>state.assets)
    useEffect(() =>{
        dispatch(getAssettypes());
      },[dispatch])
    // pick a date
    const onChange=e=> setDate(e.target.value)
   const renderedTypes= types.map((type, index) => {
   
   return <option  value={type.id} key={type.id} >{type.title}</option>}  )
  //filter function 
   const filteredData = assets.filter((el) => {
   
    if (!date) {
        if(type_id)
      {  return el.type.id == type_id}
    }
  
    else {
        if(type_id)
        {return (moment(el.created_at).format("DD-MM-YYYY") == moment(date).format("DD-MM-YYYY") &&  el.type.id == type_id)}
        else{ 
        return ( moment(el.created_at).format("DD-MM-YYYY") ==moment (date).format("DD-MM-YYYY")) 
        }
                  
       
    }
})
console.log(filteredData)


    return (
        <div className='opacity'>
          
            <div className='filter'>
               <div className="title">FILTER BY</div>
               <div className='input'>
                   <select onChange={(e)=>setTypeId(e.target.value)} >
                       <option hidden>select type</option>
                       {renderedTypes}

                    </select>
                </div>
                <div className='input' >
                    <input  placeholder='Date                12MAR : 12ABR'  type='date' onChange={(e)=>onChange(e)}/>
                </div>

                <Link to='/workshop/owner/assets'>      
                <button className='gray'   >CANCEL</button>
                </Link>   
                <Link to='/workshop/owner/assets'>
                <button className='blue' onClick={()=>setFilteredData(filteredData)}>FILTER</button>
                </Link>


            </div>
            
        </div>
    )
}

export default FilterAssets
