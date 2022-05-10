import React from 'react'
import{MdReplay} from "react-icons/md"
import { Link } from 'react-router-dom'


import VhiclesListView from './VhiclesListView'
const OrderInfoListView = ({workorders}) => {
    const renderedOrders = workorders.map(workorder=>{
        return <VhiclesListView key={workorder.id} page='thrpage' Order_remarks={workorder&&workorder.order_remark} CustomerAddress={workorder.customer&&workorder.customer.address}/>
})
console.log(workorders )
    
    return (
    <table>
        <thead>
            <tr>
                <th> Order Remarks</th>
                <th> Customer Address</th>
                
            
                <th className='moreIcon'><Link to='/workshop/owner/vheiclesListview/'> <MdReplay /> </Link></th>
            
            
            </tr>
        </thead>
        {renderedOrders}
        
</table>
    )
}

export default OrderInfoListView
