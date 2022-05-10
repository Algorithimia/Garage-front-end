import React,{useEffect, useState} from 'react'
import {GoTriangleDown,GoTriangleUp} from "react-icons/go"
import{BsSortAlphaUpAlt, BsSortAlphaUp} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AiFillPlusCircle } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
import { useDispatch,useSelector } from 'react-redux'
import  _ from "lodash";
import CustomerRow from './components/CustomerRow'
import {getWorkOrders} from '../../store/store slices/workOrderSlices/workOrder'
const GarageCustomers = () => {
    const dispatch = useDispatch()
    const {workorders , isLoading, orderCreated ,error}= useSelector((state)=>state.workOrders)
    const [showAlert, setShowAlert]= useState(true)  
    const [entries, setEntries] = useState(0);
    const [date, setDate] =  useState(0);
    const [search , setSearch] = useState('')
    
      var result = _.uniqBy(workorders, 'customer');

console.log(result);
      
      console.log(result);
    useEffect(() =>{
        dispatch(getWorkOrders());
      
     
       
    
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
     const searchResult = workorders.filter((el) => {
   
        if (search === '') {
            return el
        }
      
        else {        
            return ( el.name.toLowerCase().includes(search) )           
        }
    })
  
 {console.log(searchResult)}
     let renderedCustommers= workorders&& searchResult.map((workorder)=>{
         return <CustomerRow   workorder={workorder}/>
     })
    return (
        <>
        { isLoading ? <img className='loading-img' src="/images/giphy.gif" /> :

            <div className='grage_customers'>
                <div className='header'>
                GARAGE COUSTOMERS
                {/* <Link to='/workshop/owner/createoreditecustomer'>
                    <button className='right'><span><AiFillPlusCircle /></span> Add New Customers</button>
                    <button className='right mobile'><span><AiFillPlusCircle /></span> Add</button>
                </Link> */}

                </div>
                <div className='second_line'>
                    <button className='active'>All</button>
                    <button  className='desktop_button'>with current work orders</button>
                    <button className='mobile_button' >current</button>
                    <div className='right'>
                        <input placeholder='Search Customers'  value={search} onChange={e=>onChange(e)} /> 
                        <span><FaSearch /> </span>

                    </div>
                </div>


                <div className='third_line'>
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
                                        <span className='alpha_small'>
                                            <span className='alpha z_to_a'>
                                                <BsSortAlphaUpAlt />
                                            </span>
                                            <span className='alpha a_to_z'>
                                                <BsSortAlphaUp />
                                            </span>
                                        </span>
                                        

                                        
                        </div>
                        <table>
                        {showAlert && error && <div className='msg-error'>{ Object.values(error)}</div> }<br/>
                            <thead>
                                <tr>
                                    <th> CUSTOMER <br/> NAME</th>
                                    <th> ADDRESS</th>
                                    <th> PHONE <br/> NUMBER</th>
                                    <th> EMAIL</th>
                                    <th> WORK orders</th>
                                
                                    
                                </tr>
                            
                            </thead>
                            {renderedCustommers} 
                                        
                        </table>
                
            </div>
        }
        </>
    )
}

export default GarageCustomers
