import React ,{useState} from 'react'
import {AiFillPlusCircle} from "react-icons/ai"

import {GoTriangleDown,GoTriangleUp} from "react-icons/go"
import{BsSortAlphaUpAlt, BsSortAlphaUp} from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'


import RowInventory from './components/RowInventory'
import { Link } from 'react-router-dom'
const ManageInventory = () => {

    
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
        <div className='mange_inventory'>
           <div className='header'>
           INVENTORY
           <div className='right'>
               <button className='light_blue'>FILTER</button>
               <Link to='/workshop/owner/buyspareparts'><button className='add_purchase'> <span> <AiFillPlusCircle /></span>  Add New Purchase </button> </Link>
               <Link to='/workshop/owner/addsparepart'> <button className='add_part'> <span> <AiFillPlusCircle /> </span>   Add New Part </button> </Link>

           </div>

           </div>
           <div className='second_line'>
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
                                    <div className='right'>
                                        <input  placeholder='Search Inventory'/>
                                        <span><FaSearch/></span>

                                    </div>
                                    

                                    
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th> PAYMENT <br/> TYPE  </th>
                                <th> DATE</th>
                                <th> INVOICE <br/> NUMBER </th>
                                <th> BUSINESS <br/> INFO</th>
                                <th> PURCHASE <br/> AVAILABILITY</th>
                                <th> TOTAL</th>
                                <th> PAID</th>
                                <th>DUE</th>
                              
                                
                            </tr>
                           
                        </thead>
                        <RowInventory payment_type='CREDIT' date='12/6' invoice_num='451'
                         buisiness_info={<> name <br/> 125 358 369 </>}
                          purchase_info='Available' total='822' paid='80,451' due='80,451' />


                          <RowInventory payment_type='CASH' date='12/6' invoice_num='451'
                         buisiness_info={<> name <br/> 125 358 369 </>}
                          purchase_info='Unavailable' total='822' paid='80,451' due='80,451' />

                          <RowInventory payment_type='CREDIT' date='12/6' invoice_num='451'
                         buisiness_info={<> name <br/> 125 358 369 </>}
                          purchase_info='Available' total='822' paid='80,451' due='80,451' />

                          <RowInventory payment_type='NONE' date='12/6' invoice_num='451'
                         buisiness_info={<> name <br/> 125 358 369 </>}
                          purchase_info='Unavailable' total='822' paid='80,451' due='80,451' />

                          <RowInventory payment_type='CASH' date='12/6' invoice_num='451'
                         buisiness_info={<> name <br/> 125 358 369 </>}
                          purchase_info='Available' total='822' paid='80,451' due='80,451' />

                          <RowInventory payment_type='NONE' date='12/6' invoice_num='451'
                         buisiness_info={<> name <br/> 125 358 369 </>}
                          purchase_info='Unavailable' total='822' paid='80,451' due='80,451' />
                    </table>    
        </div>
    )
}

export default ManageInventory
