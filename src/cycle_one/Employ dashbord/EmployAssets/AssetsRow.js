import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import OverlayList from '../../workshops/OverlayList'
const AssetsRow = ({asset}) => {
        return (
            <tr>
               
                <th className={asset.type && asset.type.title}>{asset.type && asset.type.title}</th>
                <th> {asset.id}</th>
                <th>{asset.title}</th>
                <th>{moment(asset.created_at).format("DD-MM-YYYY")}</th>  
                <th> </th>
                <th> </th>
                <th> </th>
                <th> </th>
                <th> </th>
                <th className='moreIcon'>
        

             <OverlayList option1='ASSIGN TO WORKORDER' option1_path='/employ/assets'
                     
                       
                          />
           
              </th>
            </tr>    
               
        )
    // return (
    //     <tr>
           
    //         <th className={type}>{type}</th>
    //         <th> {num}</th>
    //         <th>{name}</th>
    //         <th>{date} </th>
    //         <th> </th>
    //         <th> </th>
    //         <th> </th>
    //         <th> </th>
    //         <th> </th>
    //         <th><th className='moreIcon'>
        

    //     <OverlayList option1='ASSIGN TO WORKORDER' option1_path='/employ/assets'
                 
                   
    //                  />
       
    //      </th>
    //  </th>
    //     </tr>    
           
    // )
}

export default AssetsRow
