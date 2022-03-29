import React,{useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import AssignedCheck from './components/AssignedCheck'
import{getUserDetails} from '../../store/store slices/detailUser'
import {getaddress} from '../../store/store slices/addreseSlice'
import { useDispatch,useSelector } from 'react-redux'
import {editeEmploy} from '../../store/store slices/GOEmploy'

const EditeEmploy = () => {
    const navigate = useNavigate()
    let location = useLocation()
    const dispatch = useDispatch()
    const [showAlert, setShowAlert]= useState(true)
    const {userDetails}= useSelector((state)=>state.userDetails)
    const {goEditeemploy, isLoading, error} = useSelector((state)=>state.GoEmploye)
   
    const [formData, setFormData] = useState({
        workshop_id:2,
        email:location.state.employ.email,
        password:location.state.employ.password,
        confirm_password:location.state.employ.confirm_password,
        name: location.state.employ.name,
        phone: location.state.employ.phone,
        country_id:location.state.employ.country_id,
        salary:location.state.employ.salary,
        bonus:location.state.employ.bonus,
        employee_id:location.state.employ.id
        
    })
   
    const {workshop_id,email, name,phone , password, confirm_password,country_id,salary, bonus } = formData
    const {addressList}= useSelector((state)=>state.address)
    useEffect(() =>{
        dispatch(getaddress());
       // dispatch(getUserDetails());
     
        
       
    
      },[dispatch])
      
    //   let renderedWorkshops = userDetails.map((workshop)=><option key={workshop.id} value={workshop.id}>{workshop.title}</option>)
  
      const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
      const onSubmit= async (e) => {
          e.preventDefault()
          if(password !== confirm_password){
              alert('password do not match')
          }
          
          else{
              console.log(formData)
            //   console.log( grageOwnerRegister)
             e.preventDefault()
             dispatch( editeEmploy(formData))
             setShowAlert(true)
             const timeId = setTimeout(() => {
               // After 3 seconds set the showAlert value to false
               setShowAlert(false)
             }, 5000)
         
             return () => {
               clearTimeout(timeId)
             }
            
          }
      }
      
      console.log(typeof addressList)
      console.log(addressList)
      const  countries = addressList.map((country=> {
        return <option key={country.id} value={country.id} >{country.name}</option>
        
   }))
  
      return (
          <>
         { isLoading ? <img className='loading-img' src="/images/giphy.gif" /> :
        <div className='add_newEmploy'>
            <div className='header'>
                
           Edite EMPLOYEE
            </div>
            <div className='body'>
            <form onSubmit={e=>onSubmit(e)} >
            {showAlert && error && <div className='msg-error'>{ Object.values(error)}</div> }<br/>
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
                            {/* {renderedWorkshops} */}
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
            { goEditeemploy ?  navigate("/workshop/owner/employes") : '' }
        </div>
        }
        </>
    )
}

export default EditeEmploy
