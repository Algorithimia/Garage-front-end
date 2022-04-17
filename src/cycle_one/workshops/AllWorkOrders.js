import React, { useState,useEffect, useRef } from 'react';
import {FaSearch} from'react-icons/fa'
import {AiFillPlusCircle} from "react-icons/ai"
import {GoTriangleDown,GoTriangleUp} from "react-icons/go"
import { Link, Route,Routes } from 'react-router-dom'


import WorkOrder from './WorkOrder'
import FilterWorkOrders from "./FilterWorkOrders"
import AssignEmploye from './AssinEmploye'

import { useDispatch,useSelector } from 'react-redux'
import{getWorkOrders,editeWorkOrder, clearstate} from '../../store/store slices/workOrderSlices/workOrder'
const AllWorkOrders = () => {
    const dispatch = useDispatch()
    const {workorders , isLoading, orderCreated ,error}= useSelector((state)=>state.workOrders)
    const [entries, setEntries] = useState(0);
    const [date, setDate] =  useState(0);
    const [showAlert, setShowAlert]= useState(true)
    const [filteredData, setFilteredData]= useState(null)
    const [search , setSearch] = useState('')
    const upEntries=()=>{
       setEntries(parseInt(entries)+1)
    }
    const downEntries=()=>{
        entries!==0 && setEntries(parseInt(entries)-1)
    }
    const upDate=()=>{
        setDate(parseInt(date)+1)

      
     }
     const downDate=()=>{
        date!==0 && setDate(parseInt(date)-1)
      
     }
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
                        <Link to='/workshop/owner/allworkorders/filter'><div className='inline-block'><button className="light_blue">FILTER</button></div></Link>
                            <div className='inline-block show_desktop'><Link to='/workshop/owner/createworkeorder'><button className="blue"><span><AiFillPlusCircle  /> </span>Create Work Oder</button></Link></div>
                            <div className='inline-block show_mob'><Link to='/workshop/owner/createworkeorder'><button className="blue"><span><AiFillPlusCircle  /> </span>Create</button></Link></div>
                        </div>
                    </div>
                    <div className="second_line">
                        <div className='inline-block input_block'>
                        <span>
                        Show Entries
                        </span>
                        <input type='number'  onChange={(e)=> setEntries(e.target.value)} min="0" value={entries}/>
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
                            <input type='number'  value={date} min="0"  onChange={(e)=> setDate(e.target.value)}/>
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
                        <input  placeholder="Search Repair Order"  value={search} onChange={e=>onChange(e)} />
                        <div className='icon'><FaSearch /></div> 
                        </div>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th> STATUS</th>
                            <th> (WO)<br/> STAGE</th>
                            <th> (WO) <br/> NUM</th>
                            <th> (WO) <br/>DATE</th>
                            <th>CUSTOMER <br/>NAME </th>
                            <th> WORK <br/>ITEM</th>
                            <th> EMPLOYEE <br/>NAME</th>
                        </tr>
                    </thead>
                    {showAlert && error && <div className='msg-error'>{ Object.values(error)}</div> }<br/>
                   
                    
                    {renderedWorkorders}
                    {/* <WorkOrder status='created'  stage='STAGE'  num='451' date='12/6' customerName='Denise Powell' workItem='Gear Replacement' employName='Sam'   />

                    <WorkOrder status='Progress'  stage='STAGE'  num='420' date='12/6' customerName='Benjamin Fuller' workItem='TIRE Replacement' employName='harry'   />
                    <WorkOrder status='completed'  stage='STAGE'  num='560' date='12/6' customerName='Christine Miller' workItem='Gear Replacement' employName='rose'   />
                    <WorkOrder status='created'  stage='STAGE'  num='451' date='12/6' customerName='Denise Powell' workItem='Gear Replacement' employName='Sam'   />

                    <WorkOrder status='Progress'  stage='STAGE'  num='420' date='12/6' customerName='Benjamin Fuller' workItem='TIRE Replacement' employName='harry'   />
                    <WorkOrder status='completed'  stage='STAGE'  num='560' date='12/6' customerName='Christine Miller' workItem='Gear Replacement' employName='rose'   />
                        */}
                </table>
                <Routes>
                        <Route path="/filter" element={<FilterWorkOrders workorders={workorders} setFilteredData={setFilteredData} />} exact  />
                        <Route path="/assignEmploye/:id" element={<AssignEmploye />} assign={editeWorkOrder} exact  />

                </Routes>
            </div>
             } </>
    )
}

export default AllWorkOrders
