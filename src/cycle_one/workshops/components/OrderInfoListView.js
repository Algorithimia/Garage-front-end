import React from 'react'
import {BsArrowRightCircle} from "react-icons/bs"
import { Link } from 'react-router-dom'


import VhiclesListView from './VhiclesListView'
const OrderInfoListView = () => {
    return (
    <table>
        <thead>
            <tr>
                <th> Order Remarks</th>
                <th> Customer Address</th>
                
            
                <th><Link to='/workshop/owner/vheiclesListview/'> <BsArrowRightCircle /> </Link></th>
                
            
            </tr>
        </thead>
        <VhiclesListView  Order_remarks='100' CustomerAddress='Giza-Egypt' />
        <VhiclesListView Order_remarks='100' CustomerAddress='Giza-Egypt' />
        <VhiclesListView Order_remarks='100' CustomerAddress='Giza-Egypt' />
        <VhiclesListView Order_remarks='100' CustomerAddress='Giza-Egypt' />
        <VhiclesListView Order_remarks='100' CustomerAddress='Giza-Egypt' />
        <VhiclesListView Order_remarks='100' CustomerAddress='Giza-Egypt' />
        <VhiclesListView Order_remarks='100' CustomerAddress='Giza-Egypt' />
        <VhiclesListView Order_remarks='100' CustomerAddress='Giza-Egypt' />
        <VhiclesListView Order_remarks='100' CustomerAddress='Giza-Egypt' />
        <VhiclesListView Order_remarks='100' CustomerAddress='Giza-Egypt' />
        
</table>
    )
}

export default OrderInfoListView
