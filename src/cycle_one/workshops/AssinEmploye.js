import React,{useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {getemploys, clearstate} from '../../store/store slices/GOEmploy'
import {getWorkOrders} from '../../store/store slices/workOrderSlices/workOrder'
import {getAssets} from '../../store/store slices/assetSlice'
import Cookies from "universal-cookie";
const AssignEmploye = ({back='workshop/owner/allworkorders', assign,assets}) => {
    const cookies = new Cookies();
    let { id }  = useParams();
    const dispatch = useDispatch()
    const [showAlert, setShowAlert]= useState(true)
    const [search , setSearch] = useState('')
    const [activeIndex,setActiveIndex]=useState()
    const[reqData, setReqData] = useState({
        workshop_id:cookies.get("workshop").id,
       work_order_id:!assets &&id,
        asset_id:id,
        employee_id:''
    })
    const {employee_id } = reqData
    const {employs, gocreateemploy,goEditeemploy, isLoading, error} = useSelector((state)=>state.GoEmploye)
    const onChange=e=>{setSearch(e.target.value.toLowerCase())}
    useEffect(() =>{
        dispatch(getemploys());
       
        const timeId = setTimeout(() => {
            // After 3 seconds set the showAlert value to false
            setShowAlert(false)
            dispatch(clearstate())
          }, 5000)
      
          return () => {
            clearTimeout(timeId)
          }
     
       
    
      },[dispatch])
      const searchResult = employs.filter((el) => {
   
        if (search === '') {
            return el
        }
      
        else {        
            return ( el.name.toLowerCase().includes(search) )           
        }
    })  
    const clickSelected = (index,id)=> {
        setActiveIndex(index)
        setReqData({...reqData, employee_id: id})
        let selectedEmploy=employs.find(employ=>employ.id == id)
        setSearch(selectedEmploy.name)
       
    }
    const submitData = (data)=> {
        dispatch(assign(data)); 
        !assets && dispatch(getWorkOrders());
        assets && dispatch(getAssets());

    }
    
    const renderedEmploys = isLoading ? <span>  loading ...</span> :searchResult.map((employ,index)=>{
        const  className = activeIndex === index ? 'selected' : '';
        return(
        <div className={className} key={employ.id} onClick={()=>clickSelected(index,employ.id)}>{employ.name}</div> 
    )})
 
    return (
        <div className='opacity'>
            <div className='assign_employ'>
                <div>ASSIGN EMPLOYEE</div>
                <input type='search' name='employSearch' placeholder='SEARCH EMPLOYEE'  value={search} onChange={e=>onChange(e)}/>
                {search !== '' &&<div className='search-result'>
                    {renderedEmploys}
                </div>}
                <div className='buttons'>
                   <Link to={back}> <button className='gray'>Cancel</button> </Link>
                   < Link to={back}> <button onClick={()=>submitData(reqData)} >Assign</button> </Link>
                </div>

            </div>
            
        </div>
    )
}

export default AssignEmploye
