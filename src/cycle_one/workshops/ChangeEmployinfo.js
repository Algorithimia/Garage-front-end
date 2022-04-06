import React, {useState} from 'react';
import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import {editeEmploy} from '../../store/store slices/GOEmploy'
import Cookies from "universal-cookie";
const ChangeEmployinfo = () => {
  const cookies = new Cookies();
  const navigate = useNavigate()
  let location = useLocation()
  const dispatch = useDispatch()
  const {goEditeemploy, isLoading, error} = useSelector((state)=>state.GoEmploye)
  const [showAlert, setShowAlert]= useState(true)
  const [formData, setFormData] = useState({
    workshop_id: cookies.get("workshop").id,
    employee_id:location.state.employ.id,
    password:'', 
    confirm_password:'',
  
    email:'',
    
    
})

const {email, password, confirm_password } = formData

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
  return <div className='opacity'>

      <div className='change'>
          <div className='title'>
          CHANGE 
            <img src={location.state.employ.avatar} />
            <span> {location.state.employ.name} </span>
             Email/PASSWORD 
          </div>
          <form onSubmit={e=>onSubmit(e)}>
          {showAlert && error && <div className='msg-error'>{ Object.values(error)}</div> }<br/>
            <div className='input'>
              <input  placeholder='Email' name='email'  value={email} onChange={e=>onChange(e)} required/>

            </div>
            <div className='input'>
              <input  placeholder='PASSWORD' name='password' value={password} onChange={e=>onChange(e)} required/>

            </div>
            <div className='input'>
              <input  placeholder='CONFIRM PASSWORD'  name='confirm_password' value={confirm_password} onChange={e=>onChange(e)} required/>

            </div>
            <div className='buttons'>
              {/* <Link to='/workshop/owner/employes'><button className='button'>DISCARD </button></Link> */}
              {/* <Link to='/workshop/owner/employes'> <input className='button blue' type='submit' value='SAVE' /></Link> */}

              <Link to='/workshop/owner/employes'><button className='button'>DISCARD </button></Link>
              <input className='button blue' type='submit' value='SAVE' />
            </div>
          </form>

      </div>
      { goEditeemploy ? <Navigate to="/workshop/owner/employes" > </Navigate> : '' }
  </div>;
};

export default ChangeEmployinfo;
