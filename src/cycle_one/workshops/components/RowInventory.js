import React from 'react'
import { Link } from 'react-router-dom'

const RowInventory = ({part}) => {
   
    return (
        <tr>
            {/* <th > <span className={`payment ${payment_type} cash`}> {payment_type}</span></th> */}
            <th></th>
            <th> {part.created_at}</th>
            <th> {part.id} </th>
            <th> <div>{part.title}</div>{part.description}</th>
            {/* <th><span  className={purchase_info}> {purchase_info} </span></th> */}

            <th>{part.unit_price}</th>
            <th> {part.unit_price}</th>
            <th>{part.unit_price}</th>
            <th>
                <Link to='/workshop/owner/viewsingleiteminventory'>
                      <button>VIEW</button>
                </Link>
            </th>
            
            
        </tr>
    )
}

export default RowInventory
