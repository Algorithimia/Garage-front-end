import React from 'react'
import { Link } from 'react-router-dom'

const RowInventory = ({payment_type, date ,invoice_num, buisiness_info,purchase_info, total, paid, due }) => {
    return (
        <tr>
            <th > <span className={`payment ${payment_type}`}> {payment_type}</span></th>
            <th> {date}</th>
            <th> {invoice_num} </th>
            <th> {buisiness_info}</th>
            <th><span  className={purchase_info}> {purchase_info} </span></th>
            <th>{total}</th>
            <th> {paid}</th>
            <th>{due}</th>
            <th>
                <Link to='/workshop/owner/viewsingleiteminventory'>
                      <button>VIEW</button>
                </Link>
            </th>
            
            
        </tr>
    )
}

export default RowInventory
