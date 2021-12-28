import React from 'react'
import {BsArrowRightCircle} from "react-icons/bs"
import { Link } from 'react-router-dom'


import VhiclesListView from './VhiclesListView'
const UserinfoListView = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th> Fuel Indicator</th>
                    <th> Phone Number</th>
                    <th>Customer Name</th>
                    <th> Customer TAX ID</th>
                    <th> Customer E-mail</th>
                  
                    <th><Link to='/workshop/owner/vheiclesListview/order'> <BsArrowRightCircle /> </Link></th>
                    
                
                </tr>
            </thead>
            <VhiclesListView Fuel='10%' Phone='01111111111111' Customer_name='john' Customer_taxid='8888' Customermail='example@gmail.com' />
            <VhiclesListView Fuel='10%' Phone='01111111111111' Customer_name='john' Customer_taxid='8888' Customermail='example@gmail.com' />
            <VhiclesListView Fuel='10%' Phone='01111111111111' Customer_name='john' Customer_taxid='8888' Customermail='example@gmail.com' />
            <VhiclesListView Fuel='10%' Phone='01111111111111' Customer_name='john' Customer_taxid='8888' Customermail='example@gmail.com' />
            <VhiclesListView Fuel='10%' Phone='01111111111111' Customer_name='john' Customer_taxid='8888' Customermail='example@gmail.com' />
            <VhiclesListView Fuel='10%' Phone='01111111111111' Customer_name='john' Customer_taxid='8888' Customermail='example@gmail.com' />
            <VhiclesListView Fuel='10%' Phone='01111111111111' Customer_name='john' Customer_taxid='8888' Customermail='example@gmail.com' />
            <VhiclesListView Fuel='10%' Phone='01111111111111' Customer_name='john' Customer_taxid='8888' Customermail='example@gmail.com' />
            <VhiclesListView Fuel='10%' Phone='01111111111111' Customer_name='john' Customer_taxid='8888' Customermail='example@gmail.com' />
            <VhiclesListView Fuel='10%' Phone='01111111111111' Customer_name='john' Customer_taxid='8888' Customermail='example@gmail.com' />
            
    </table>
    )
}

export default UserinfoListView
