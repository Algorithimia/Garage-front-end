import React,{useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import AssignedCheck from './components/AssignedCheck'
import{getInsideWorkshops} from '../../store/store slices/inSideWorksopSlice'
import {getaddress} from '../../store/store slices/addreseSlice'
import { useDispatch,useSelector } from 'react-redux'
import {createEmploy} from '../../store/store slices/GOEmploy'
const AddNewEmploy = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {insideWorkShopLists , isLoading ,error}= useSelector((state)=>state.insideWorkshops)
    const {addressList}= useSelector((state)=>state.address)
    const [formData, setFormData] = useState({
        workshop_id:'',
        email:'',
        password: '',
        confirm_password:'',
        name: '',
        phone: '',
        country_id:'',
        salary:'',
        bonus:''
    })
    const {workshop_id,email, name,phone , password, confirm_password,country_id,salary, bonus } = formData
    useEffect(() =>{
        dispatch(getaddress());
       
    
      },[dispatch])
      
      let renderedWorkshops = insideWorkShopLists.map((workshop)=><option key={workshop.id} value={workshop.id}>{workshop.title}</option>)
  
      const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
      const onSubmit= async e => {
          e.preventDefault()
          if(password !== confirm_password){
              alert('password do not match')
          }
          
          else{
              console.log(formData)
            //   console.log( grageOwnerRegister)
             e.preventDefault()
              dispatch( createEmploy(formData))
            
          }
      }
      let  countries = addressList.map((country=> {
        return <option key={country.id} value={country.id} >{country.name}</option>
        
   }))
  
      return (
        <div className='add_newEmploy'>
            <div className='header'>
                
            ADD NEW EMPLOYEE
            </div>
            <div className='body'>
            <form onSubmit={e=>onSubmit(e)} >
             <div className='input_row'>
               EMPLOYEE INFO
               <Row>
                   <Col md={6} lg={4}>
                   <div className='main_input'>
                        <label>Employee Name</label>
                        <input type='text' placeholder='Employee Name' name='name' value={name} onChange={e=>onChange(e)} required/>
                    </div>
                   </Col>
                   <Col md={6} lg={4}>
                   <div className='main_input'>
                        <label>Phone Number</label>
                        <input type='text' placeholder='Phone Number' name='phone' value={phone} onChange={e=>onChange(e)} required/>
                    </div>
                   </Col>
           
                   <Col md={6} lg={4}>
                   <div className='main_input'>
                        <label>salary</label>
                        <input type='number' placeholder='500 $' name='salary' value={salary} onChange={e=>onChange(e)} required/>
                    </div>
                   </Col>
                   <Col md={6} lg={4}>
                   <div className='main_input'>
                        <label>Bonus salary</label>
                        <input type='number' placeholder='500 $'  name='bonus' value={bonus} onChange={e=>onChange(e)} required/>
                    </div>

                   </Col>
                   <Col md={6} lg={4}>
                   <div className='main_input'>
                        <label>Workshop</label>
                        <input value=''/>
                        <select  name='workshop_id' value={workshop_id} onChange={e=>onChange(e)} required>
                            <option hidden >choose a Workshop</option>
                            {renderedWorkshops}
                        </select>
                    </div>
                    
                   </Col>
                   <Col md={6} lg={4}>
                   <div className='main_input'>
                        <label>Country</label>
                        <input type='text' value=' '/>
                        <select name='country_id' value={country_id} onChange={e=>onChange(e)} required>
                        <option hidden >choose a country</option>
                            {countries}
                        </select>
                    </div>
                   </Col> 
               </Row>
             
             </div>
             <div className='input_row'>
             EMPLOYEE LOGIN INFORMATION
               <Row>
                   <Col md={6} lg={4}>
                   <div className='main_input'>
                        <label>Email ID</label>
                        <input type='text' placeholder='Email ID'  name='email' value={email} onChange={e=>onChange(e)} required/>
                    </div>
                   </Col>
                   <Col md={6} lg={4}>
                   <div className='main_input'>
                        <label>Password</label>
                        <input type='password' placeholder='●●●●●●●●●●●' name='password' value={password} onChange={e=>onChange(e)} required/>
                    </div>
                   </Col>
                   <Col md={6} lg={4}>
                   <div className='main_input'>
                        <label>Confirm Pasword</label>
                        <input type='password' placeholder='●●●●●●●●●●●' name='confirm_password' value={confirm_password} onChange={e=>onChange(e)} required/>
                    </div>
                   </Col>
               </Row>
             
             </div>
             <div className='system_tasks'>
              <div className='title'> SYSTEM TASKS </div>
             <div >
                        <label>Assigned Sections</label>
                        <div className='check_box'>
                            <Row>
                                <Col md={6} lg={3}>
                                
                                 <AssignedCheck type='VEHICLES' /> 
                                 <AssignedCheck type='WORK ORDERS' /> 
                                 <AssignedCheck type='CUSTOMERS' />  
                                </Col>

                                <Col md={6} lg={3}>
                                    <AssignedCheck type='INVENTORY' />  
                                    <AssignedCheck type='EMPLOYEES' />  
                                    <AssignedCheck type='BUSSINESSES' />  
                                </Col>
                                <Col md={6} lg={3}>
                                    <AssignedCheck type='FINANCE' />  
                                    <AssignedCheck type='APPOINTMENT' />  
                                    <AssignedCheck type='MARKETING' />  
                                   
                                </Col>
                                <Col md={6} lg={3}>
                                    <AssignedCheck type='ASSETS' />  
                                    <AssignedCheck type='SETTING' /> 
                                </Col>
                            </Row>
                        </div>
                        {/* <Link to='/workshop/owner/employes'> */}
                           <input className='btn' type='submit' value='SAVE DETAILS' />
                        {/* </Link> */}
                       
                    </div>

             </div>
             </form>
            </div>
            
        </div>
    )
}

export default AddNewEmploy