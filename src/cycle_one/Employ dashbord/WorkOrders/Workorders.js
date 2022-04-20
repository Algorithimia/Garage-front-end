import React, { useState,useEffect } from 'react';
import {FaSearch} from'react-icons/fa'
import {AiFillPlusCircle} from "react-icons/ai"
import {GoTriangleDown,GoTriangleUp} from "react-icons/go"
import { Link, Route,Routes } from 'react-router-dom'


import WorkOrder from './WorkOrder'
import FilterWorkOrders from "./FilterWorkOrders"

import { useDispatch,useSelector } from 'react-redux'
import{getWorkOrders,editeWorkOrder, clearstate} from '../../../store/store slices/workOrderSlices/workOrder'
const Workorders = () => {
    const dispatch = useDispatch()
    const {workorders , isLoading, orderCreated ,error}= useSelector((state)=>state.workOrders)
    const [showAlert, setShowAlert]= useState(true)
    const [search , setSearch] = useState('')
    const [filteredData, setFilteredData]= useState(null)
    const [entries, setEntries] = useState(0);
    const [date, setDate] =  useState(0);
    useEffect(() =>{
        dispatch(getWorkOrders());
        dispatch(clearstate()); 
        const timeId = setTimeout(() => {
            // After 3 seconds set the showAlert value to false
            setShowAlert(false)
           
          }, 5000)
      
          return () => {
            clearTimeout(timeId)
          }
       
    
      },[dispatch])
    const upEntries=()=>{
       setEntries(parseInt(entries)+1)
    }
    const downEntries=()=>{
       setEntries(parseInt(entries)-1)
    }
    const upDate=()=>{
        setDate(parseInt(date)+1)

      
     }
     const downDate=()=>{
        setDate(parseInt(date)-1)
      
     }
     const onChange=e=>{setSearch(e.target.value.toLowerCase())}
     const data = filteredData ? filteredData: workorders
      const searchResult = data.filter((el) => {
   
        if (search === '') {
            return el
        }
      
        else {        
            return ( el.customer.name.toLowerCase().includes(search) )           
        }
    })
    const renderedWorkorders= searchResult.map((workorder)=>{
        return ( <WorkOrder key={workorder.id}   workorder={workorder}    />)
    })
 
    return (
        <>
        {isLoading ? <img className='loading-img' src="/images/giphy.gif" /> :
        <div className='work_orders'>
            <div className='head_section'>
                <div className='first_line'>
                    <span>ALL WORK ORDERS</span>
                    <div className="right">
                        <div className='inline-block'><Link to='/employ/workorders/filter'><button className="light_blue">FILTER</button></Link></div>
                        <div className='inline-block show_desktop'><Link to='/employ/createworkorder'state={{path:'/employ/workorders'}}><button className="blue"><span><AiFillPlusCircle  /> </span>Create Work Oder</button></Link></div>
                        <div className='inline-block show_mob'><Link to='/employ/createworkorder'><button className="blue"><span><AiFillPlusCircle  /> </span>Create</button></Link></div>
                    </div>
                </div>
                <div className="second_line">
                    <div className='inline-block input_block'>
                       <span>
                       Show Entries
                       </span>
                       <input type='number'  onChange={(e)=> setEntries(e.target.value)} value={entries}/>
                       <div className="change_number">
                        <div className='change' onClick={upEntries}>   
                         <GoTriangleUp />
                        </div>
                        <div className="up change" onClick={downEntries}>
                         <GoTriangleDown />
                        </div>
                       </div>
                       
                    </div>
                    <div className='inline-block input_block'>
                        <span>
                        Date
                        </span>
                        <input type='number'  value={date} onChange={(e)=> setDate(e.target.value)}/>
                        <div className="change_number">
                            <div className='change' onClick={upDate}>
                             <GoTriangleUp />
                            </div>
                            <div className="up change" onClick={downDate}>
                             <GoTriangleDown />
                            </div>
                        </div>
                        </div>
                    <div className="right">
                    <input  placeholder="Search Repair Order" value={search} onChange={e=>onChange(e)} />
                    <div className='icon'><FaSearch /></div> 
                    </div>
                </div>
            </div>
            {showAlert && error && <div className='msg-error'>{ Object.values(error)}</div> }
            {showAlert && orderCreated && <div className='create-msg'>order created</div> }
            <table>
        
                <thead>
                    <tr>
                        <th> STATUS</th>
                        <th> (WO)<br/> STAGE</th>
                        <th> (WO) <br/> NUM</th>
                        <th> (WO) <br/>DATE</th>
                        <th>CUSTOMER <br/>NAME </th>
                        <th> WORK <br/>ITEM</th>
                        
                    </tr>
                </thead>
              
                 {renderedWorkorders}
            </table>
            <Routes>
                    <Route path="/filter" element={<FilterWorkOrders workorders={workorders} setFilteredData={setFilteredData} />} exact  />
                  

            </Routes>
        </div>}
        </>
    )
}
export default Workorders