import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Cookies from "universal-cookie";
import {editePart} from '../../store/store slices/InventorySice'
import { useDispatch,useSelector } from 'react-redux'
import {useNavigate, useLocation} from 'react-router-dom'
const EditeSparePart = () => {
    let location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [showAlert, setShowAlert]= useState(true)
    const cookies = new Cookies();
    const { edited, error}= useSelector((state)=>state.inventory)
    const [formData, setFormData] = useState({
        workshop_id: cookies.get("workshop").id,
        spare_part_id:location.state.part.id,
        type_id:location.state.part.type.id,
        title: location.state.part.title,
        description:location.state.part.description,
        unit_price:location.state.part.unit_price,
        quantity: location.state.part.quantity,
        galleries :location.state.part.galleries,
        is_purchase:false
    })
    console.log(location.state.part)
    
    console.log(formData)
    const { title,description , unit_price, quantity, galleries, is_purchase}=formData

    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const checkChange=e=>setFormData({...formData, [e.target.name]: e.target.checked})
    const imgChange=e=>setFormData({...formData, [e.target.name]:{image :e.target.files[0]}})
    const onSubmit= async e => {
        e.preventDefault()
        dispatch(editePart(formData))
        setShowAlert(true)
        const timeId = setTimeout(() => {
            // After 3 seconds set the showAlert value to false
            setShowAlert(false)
           
          }, 5000)
      
          return () => {
            clearTimeout(timeId)
          }
       
    }
    return (
        <div className='add_sparePart'>
            <div className='header'>
            Edite SPARE PART
 
            </div>
            <div className='body'>
            {showAlert && error && <div className='msg-error'>{ Object.values(error)}</div> }<br/>
                <form onSubmit={onSubmit}>
                    <div className='upload'
                    onClick={()=> document.getElementById("my_file").click()}>

                        <img src='/images/cycle one/img.png'/>
                        <span>UPLOAD PHOTOS</span>
                    </div>
        
                <input type="file" id="my_file" style={{display: "none"}} name='galleries'   onChange={(e)=>imgChange(e)} />

            
                <div className='input_Section'>
                    <Row>
                        <Col md={6} lg={4}>
                            <div className='main_input'>
                                <label>Select Type</label>
                                <input   type='text' /> 
                                <select name="Select Type" >
                                        <option >Select Type</option>
                                        <option> option 1</option>
                                        <option> option 2</option>
                                        <option> option 3</option>
                                </select>
                        </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className='main_input'>
                                <label>Part Name</label>
                                <input   placeholder='Part Name'  name='title' value={title} onChange={(e)=>onChange(e)} required/> 
                        </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className='main_input'>
                                <label>Part Number</label>
                                <input   placeholder='Part Number   ?????'  /> 
                        </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className='main_input'>
                                <label>MRP</label>
                                <input   placeholder='Part MRP ??????'/> 
                        </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className='main_input'>
                                <label>QUANTITY</label>
                                <input type='number'  placeholder='QUANTITY' name='quantity' value={quantity} onChange={(e)=>onChange(e)} required/> 
                        </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className='main_input'>
                                <label>Price</label>
                                <input   type='number' placeholder='000$' name='unit_price' value={unit_price} onChange={(e)=>onChange(e)} required/> 
                        </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className='main_input'>
                                <label>BUY FROM</label>
                                <input   type='text' placeholder='SPARE PART SHOP  ??????'/> 
                        </div>
                        </Col>
                        <Col md={12} lg={8}>
                            <div className='main_input'>
                                <label>PURCHASE AVAILABILITY</label>
                                <div  className='wider_input' >
                                <Row>
                                <Col >
                                    <input type="checkbox"    name='is_purchase'  checked={is_purchase} onChange={(e)=>checkChange(e)} />
                                    
                                
                                <label for="vehicle1"> Available to be purchased</label>
                                </Col>    
                                </Row>  
                                
                            
                                    
                                </div> 
                        </div>
                        </Col>
                        <Col md={12} lg={8}>
                            <div className='main_input'>
                                <label className='textarea_label'>Part Description</label>
                                <textarea className='textareaa'  placeholder='Part Description'   name='description' value={description} onChange={(e)=>onChange(e)} required/> 
                        </div>
                        </Col>
                    </Row>
                    <input  className='btn' type='submit' value='Create New Part' />

                </div>
            </form>
            </div> 

          {edited && navigate('/workshop/owner/manageinventory')}
           
        </div>
    )
}

export default EditeSparePart