import React,{useState} from 'react'
import {GoTriangleDown,GoTriangleUp} from "react-icons/go"
import{BsSortAlphaUpAlt, BsSortAlphaUp} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AiFillPlusCircle } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'


import CustomerRow from './components/CustomerRow'
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
            <Link to='/workshop/owner/createoreditecustomer'>
                <button className='right'><span><AiFillPlusCircle /></span> Add New Customers</button>
                <button className='right mobile'><span><AiFillPlusCircle /></span> Add</button>
            </Link>

            </div>
            <div className='second_line'>
                   <button className='active'>All</button>
                   <button  className='desktop_button'>with current work orders</button>
                   <button className='mobile_button' >current</button>
                   <div className='right'>
                      <input placeholder='Search Customers' /> 
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
                        <thead>
                            <tr>
                                <th> CUSTOMER <br/> NAME</th>
                                <th> ADDRESS</th>
                                <th> PHONE <br/> NUMBER</th>
                                <th> EMAIL</th>
                                <th> WORK orders</th>
                              
                                
                            </tr>
                           
                        </thead>
                        <CustomerRow  name='Denise Powell'
                                        address='Egypt ,Cairo..'
                                        phone='025 025 256 3'
                                        mail='y@y.com'
                                        workorders='0' />
                        <CustomerRow  name='Denise Powell'
                                        address='Egypt ,Cairo..'
                                        phone='025 025 256 3'
                                        mail='y@y.com'
                                        workorders='1' />   
                         <CustomerRow  name='Denise Powell'
                                        address='Egypt ,Cairo..'
                                        phone='025 025 256 3'
                                        mail='y@y.com'
                                        workorders='0' />   
                         <CustomerRow  name='Denise Powell'
                                        address='Egypt ,Cairo..'
                                        phone='025 025 256 3'
                                        mail='y@y.com'
                                        workorders='0' />
                           <CustomerRow  name='Denise Powell'
                                        address='Egypt ,Cairo..'
                                        phone='025 025 256 3'
                                        mail='y@y.com'
                                        workorders='1' />   
                         <CustomerRow  name='Denise Powell'
                                        address='Egypt ,Cairo..'
                                        phone='025 025 256 3'
                                        mail='y@y.com'
                                        workorders='0' />   
                                     
                    </table>
            
        </div>
    )
}

export default GarageCustomers
