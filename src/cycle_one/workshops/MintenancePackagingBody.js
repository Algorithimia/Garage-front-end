import React,{useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {getPackages, clearstate} from '../../store/store slices/packagesSlice'

import MintenancePackage from './components/MintenancePackage'
const MintenancePackagingBody = () => {
    const dispatch = useDispatch()
    const {packages, created,updated, isLoading, error} = useSelector((state)=>state.packages)
   
    useEffect(() =>{
        dispatch(getPackages());
        const timeId = setTimeout(() => {
            // After 3 seconds set the showAlert value to false
           
            dispatch(clearstate())
          }, 5000)
      
          return () => {
            clearTimeout(timeId)
          }
     
        
    
      },[dispatch],created,updated)
    const renderedPackages = packages&&packages.map(packageData=>{
        return ( <Col md={12} lg={6}>
            <MintenancePackage packageData={packageData} />
        </Col>)
    })


    return (
        <>
        {isLoading ? <img className='loading-img' src="/images/giphy.gif" /> :
        <div className='body'>
            
            <Link to='/workshop/owner/maintnance/add'><button><span><AiFillPlusCircle /></span> Add New Package</button></Link>
            <div className='packages'>
                <Row>
                   {renderedPackages}
                    
                </Row>
            </div>  

    </div>
    }
    </>
    )
}

export default MintenancePackagingBody
