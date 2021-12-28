import React,{useState} from 'react'
import {GoTriangleDown,GoTriangleUp} from "react-icons/go"
import{BsSortAlphaUpAlt, BsSortAlphaUp} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AiFillPlusCircle } from 'react-icons/ai'

const GarageCustomers = () => {
    
    const [entries, setEntries] = useState(0);
    const [date, setDate] =  useState(0);
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
    return (
        <div className='grage_customers'>
            <div className='header'>
            GARAGE COUSTOMERS
            <Link to='/'>
                <button className='right'><span><AiFillPlusCircle /></span> Add New Customers</button>
            </Link>

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
                        <span className='alpha z_to_a'>
                            <BsSortAlphaUpAlt />
                        </span>
                        <span className='alpha a_to_z'>
                            <BsSortAlphaUp />
                        </span>
                        <Link to='/workshop/owner/filtersentpayment'><button className='right'>FILTER</button> </Link>

                        
         </div>
            
        </div>
    )
}

export default GarageCustomers
