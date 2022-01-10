import React ,{useState} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FcCheckmark } from "react-icons/fc";


import {ownerregister} from '../../actions/auth'
import PropTypes from 'prop-types'
const Owner_register = ({ownerregister}) =>{
    const [formData, setFormData] = useState({
        workshopname:'',
        workshopAddress:'',
        name: '',
        phone:'',
        email: '',
        password: '',
        password2:''
    })

    const {workshopname,workshopAddress, name,phone , email, password, password2}=formData

    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit= async e => {
        e.preventDefault()
        if(password !== password2){
        //     setAlert('password do not match', 'danger')
        // }
        console.log('password not match')
        }
        else{
           
            ownerregister({workshopname,workshopAddress, name,phone , email, password})
        }
    }
    return(
        <>
         <div className='login owner_register'>
            <div className='owner_or_employee active'>
                        <img src="/images/cycle one/service_icons/icon_2.png" />
                        <div className="inline-block"> Garage Owner </div>
             </div>

            <form  onSubmit = {e=>onSubmit(e)}>
            <div className="title">Workshop Info</div>
            <div className='main_input'>
               <label>Workshop Name</label>
               <input onChange={e=>onChange(e)} required type='text' name="workshopname" value={workshopname} placeholder='Jessica Hayes'/>
                <div className='mark'><FcCheckmark /></div> 
               
           </div>

           <div className='main_input'>
               <label>Workshop Address</label>
               <input onChange={e=>onChange(e)} required type='text' name="workshopAddress" value={workshopAddress} placeholder='Jessica Hayes'/>
                <div className='mark'><FcCheckmark /></div> 
               
           </div>
           <div className="title">Login Info</div>
           <div className='main_input'>
               <label>Owner Name</label>
               <input onChange={e=>onChange(e)} required type='text' placeholder='Jessica Hayes'  name="name" value={name} />
                <div className='mark'><FcCheckmark /></div> 
               
           </div>

           <div className='main_input'>
               <label>Phone Number</label>
               <input onChange={e=>onChange(e)} required type='tel' placeholder='+1 (999) 278 589 2'  name="phone" value={phone} />
                <div className='mark'><FcCheckmark /></div> 
               
           </div>

           <div className='main_input'>
               <label>Email</label>
               <input onChange={e=>onChange(e)} required type='email' placeholder='handel@example.com'  name="email" value={email} />
                <div className='mark'><FcCheckmark /></div> 
               
           </div>

           <div className='main_input'>
               <label>Password</label>
               <input onChange={e=>onChange(e)} required type='password' placeholder='Type your password'  name="password" value={password}  />
                <div className='mark'><FcCheckmark /></div> 
               
           </div>

           <div className='main_input'>
               <label>Confirm Password</label>
               <input onChange={e=>onChange(e)} required type='password' placeholder='Type your password'  name="password2" value={password2} />
               <div className='mark'><FcCheckmark /></div> 
               

           </div>
            
            


            <div className="action">
                    <div className='agree_privacy'>By logging in, you agree to our
                    <div><span className='blue'>Terms of Service </span> &amp; <span className='blue'>Privacy Policy</span></div>
                    </div>
                     <Link to='/login_process/confirmation'> 
                        
                         <input className='dark_button' type='submit' value='Signup'/> 
                         </Link>
                    
                    <div className='sign_up'>Don't Have Account ! <Link to='/login_process/owner_login'><span className='blue'>LOGIN</span></Link> </div>
                 </div>
                 </form>     

         </div>
        </>
    )
}
Owner_register.propTypes = ({
  
    ownerregister:PropTypes.func.isRequired,

    })
export default connect(null,{ownerregister})( Owner_register)