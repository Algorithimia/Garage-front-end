import React from 'react'
import { Link } from 'react-router-dom'

const OverDue = ({payment_type,date,inovice_number,buisiness_info,total,paid,due}) => {
    return (
        <tr>
         
            <th ><div className={payment_type+' '+ 'payment_type'}>{payment_type}</div></th>
            <th> {date} </th>
            <th> {inovice_number} </th>
            <th> {buisiness_info} </th>
            <th>{total}</th>
            <th>{paid}</th>
            <th>{due} </th>
            <th><Link to='/workshop/owner/viewsingleiteminventory'><button>View</button></Link></th>
       </tr>
    )
}

export default OverDue
