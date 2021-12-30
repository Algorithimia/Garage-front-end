import React,{useState} from 'react'
import {GoTriangleDown,GoTriangleUp} from "react-icons/go"
import{BsSortAlphaUpAlt, BsSortAlphaUp} from 'react-icons/bs'
import { Route, Routes } from 'react-router-dom'


import RowPaidInvoices from './components/RowPaidInvoices'
import NotifyCustomer from './components/NotifyCustomer'
import NotifyUserWay from './components/NotifyUserWay'
const PaidInvoices = () => {

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
        <div className='paid_invices'>
            <div className='header'>
              PAID INVOICES              
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
                                    <span className='alpha z_to_a'>
                                        <BsSortAlphaUpAlt />
                                    </span>
                                    <span className='alpha a_to_z'>
                                        <BsSortAlphaUp />
                                    </span>                                   
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th> (WO)  <br/> NUM  </th>
                                <th> CUSTOMER  <br/> NAME </th>
                                <th> DATE</th>
                                <th> TOTAL</th>
                                <th> PAID</th>
                                <th>DUE</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                              
                                
                            </tr>
                           
                        </thead>
                        <RowPaidInvoices wo_num='822' Customer_name='Brandon Bailey' date='12/6' total='822' paid='80,451' due='80,451'/>
                        <RowPaidInvoices wo_num='812' Customer_name='Brandon Elliot' date='12/6' total='822' paid='80,451' due='80,451'/>
                        <RowPaidInvoices wo_num='700' Customer_name='Carol Carrol' date='12/6' total='822' paid='80,451' due='80,451'/>
                        <RowPaidInvoices wo_num='500' Customer_name='George Gray' date='12/6' total='822' paid='80,451' due='80,451'/>
                        <RowPaidInvoices wo_num='822' Customer_name='Brandon Bailey' date='12/6' total='822' paid='80,451' due='80,451'/>
                        <RowPaidInvoices wo_num='812' Customer_name='Brandon Elliot' date='12/6' total='822' paid='80,451' due='80,451'/>
                        <RowPaidInvoices wo_num='700' Customer_name='Carol Carrol' date='12/6' total='822' paid='80,451' due='80,451'/>
                        <RowPaidInvoices wo_num='500' Customer_name='George Gray' date='12/6' total='822' paid='80,451' due='80,451'/>

                    </table>    
                    <Routes>
                    <Route path="/notifyCustomer" element={<NotifyCustomer/>} exact  />
                    <Route path="/notifybyemail" element={<NotifyUserWay way='EMAIL' />} exact  />
                    <Route path="/notifybymessage" element={<NotifyUserWay way='MESSAGE'/>} exact  />
                    </Routes>

          
        </div>
    )
}

export default PaidInvoices
