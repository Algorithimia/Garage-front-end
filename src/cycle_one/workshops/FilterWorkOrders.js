import React, {useState, useEffect} from 'react';
import {FaSearch} from'react-icons/fa'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import{getWorkOrders, clearstate} from '../../store/store slices/workOrderSlices/workOrder'
import SearchList from './components/SearchList';
const FilterWorkOrders = ({workorders , setFilteredData}) => {
   

    const [formData, setFormData] = useState({
        workshop_id: 2,
        customer:'',
        workItems:'',
        status:null 

    })
    console.log(formData)
    const {customer, workItems, status } = formData
    // let workOrderCustomerNames = workorders.map((workOrder)=><li>{workOrder.customer.name}</li>)
    const onChange=e=>{setFormData({...formData, [e.target.name]: e.target.value.toLowerCase()});}
    const select=e=>{setFormData({...formData, [e.target.name]: e.target.value});}
   
const filteredData = workorders.filter((el) => {
   
    if (customer === '') {
        return el.status == status
    }
  
    else {
        if(status)
        {return ( el.status == status && el.customer.name.toLowerCase().includes(customer))}
        else{ 
        return ( el.customer.name.toLowerCase().includes(customer))
        }
                  
       
    }
})
    return (
        <div className='opacity'>
            <div className="filter">
                <div className="title">FILTER ON Work Oder</div>
                <div className="status">
                    <span className="inline-block">STATUS </span>
                    <div className="inline-block">
                    <input type='radio' name="status" value="Pending" onChange={(e)=>select(e)}  /> 
                    <label>Pending</label>
                    </div>
                    <div className="inline-block">
                    <input type='radio' name="status" value="Approved" onChange={(e)=>select(e)} /> 
                    <label>Approved</label>
                    </div>
                    <div className="inline-block">
                    <input type='radio' name="status" value="In Progress" onChange={(e)=>select(e)} /> 
                    <label>In Progress</label>
                    </div>
                    <div className="inline-block">
                    <input type='radio' name="status" value="Completed"  onChange={(e)=>select(e)}/> 
                    <label>Completed</label>
                    </div>
                    <div className="inline-block">
                    <input type='radio' name="status" value="Rejected"  onChange={(e)=>select(e)}/> 
                    <label>Rejected</label>
                    </div>

                </div>
                <div className='search_div'>
                <input className="search"  type='search'  placeholder="WORK ITEM"/>
                <div className='icon'><FaSearch /></div> 
                </div>
                <div className='search_div'>
                <input className="search" type='search'  placeholder="CUSTOMER NAME" name='customer' value={customer} onChange={e=>onChange(e)}/>
               
                <div className='icon'><FaSearch /></div> 
                </div>
                <br/>
                <Link to='/workshop/owner/allworkorders'>      
                <button className='gray'>Reset</button>
                </Link>   
                <Link to='/workshop/owner/allworkorders'>
                <button className='blue' onClick={()=>setFilteredData(filteredData)}>FILTER</button>
                </Link>


            </div>
        </div>
    )
}

export default FilterWorkOrders
