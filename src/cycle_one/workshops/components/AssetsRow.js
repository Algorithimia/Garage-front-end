import React from 'react'
import { Link } from 'react-router-dom'

const AssetsRow =  ({asset}) => {
    return (
        <tr>
           
            <th className={asset.type && asset.type.title}>{asset.type && asset.type.title}</th>
            <th> {asset.id}</th>
            <th>{asset.title}</th>
            <th>{asset.employees.map(e=>e.name)}</th>  
            <th>{asset.created_at} </th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th><Link to={`/workshop/owner/assets/assignemploy/${asset.id}`}><button className='assign'>ASSIGN</button></Link></th>
        </tr>    
           
    )
}

export default AssetsRow
