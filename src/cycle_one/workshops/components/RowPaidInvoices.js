import React from 'react'

import OverlayList from '../OverlayList'
const RowPaidInvoices = ({wo_num, Customer_name, date, total, paid, due}) => {
    return (
        <tr>
            <th> {wo_num} </th>
            <th>{Customer_name} </th>
            <th> {date}</th>
            <th>{total}</th>
            <th>{paid}</th>
            <th>{due}</th>
            <th></th>
            <th></th>
            <th></th>
           
            <th className='moreIcon'>
            <OverlayList option1='View Customer' option1_path='/workshop/owner/viewcustomer'
                                option2='NOTIFY CUSTOMER'  option2_path='/workshop/owner/paidinvoicess/notifyCustomer'  
                                option3='DELETE PAYMENT' option3_path='/workshop/owner/paidinvoicess' />

            </th>
           
            
            
        </tr>
    )
}

export default RowPaidInvoices
