import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'

import { useDispatch,useSelector } from 'react-redux'



import Cookies from "universal-cookie";
const cookies = new Cookies();

const CreateAssets = () => {
    const dispatch = useDispatch()
    const [showAlert, setShowAlert]= useState(true)
    const [formData, setFormData] = useState({
        workshop_id:  cookies.get("workshop").id,
        type_id:'',
        title: '',
        description: '',
        employees:'',
    })
    const {workshop_id, type_id, title, description, employees }=formData
    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit= async e => {   
           e.preventDefault()
        //   dispatch(cteateWorkOrder (formData))
           //for allert 
           setShowAlert(true)
           const timeId = setTimeout(() => {
             // After 5 seconds set the showAlert value to false
             setShowAlert(false)
           }, 5000)
       
           return () => {
             clearTimeout(timeId)
           }
           
             
           
       
    }
    return (
        <div className='create_asset'>
            <div className='header'>
               ADD ASSET

            </div>
            <div className='body'>
                <form>
                <Row>
                    <Col lg={6}>
                    <div className='main_input'>
                        <label>Asset name</label>
                        <input type='text' placeholder='Assigned Employee'/>
                        
                        
                    </div>
                    </Col>
                    <Col lg={6}>
                    <div className='main_input'>
                        <label>Assigned Employee</label>
                        <select> 
                            <option>Jack Sparo</option>
                            <option>mario</option>
                            <option>mo</option>
                        </select>
                        <input type='text'/>
                        
                        
                    </div>
                    </Col>
                    <Col lg={6}>
                    <div className='main_input'>
                        <label>Asset Type</label>
                        <select> 
                            <option>Jack Sparo</option>
                            <option>mario</option>
                            <option>mo</option>
                        </select>
                        <input type='text'/>
                        
                        
                    </div>
                    </Col>
                  
              
                   
                </Row>
                <Row>
                    <Col lg={6}>
                        <div className='main_input'>
                            <label className='textarea_label'>Asset Description</label>
                            <textarea type='text' placeholder='Asset Description'/>
                            
                            
                        </div>
                    </Col>
                </Row>
               
                <Link to='/workshop/owner/assets'>
                    <input className='button' type='submit' value='Create New Part' />
                 
                </Link>
                </form>

            </div>
         
        </div>
    )
}

export default CreateAssets
