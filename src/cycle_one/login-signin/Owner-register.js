import React ,{useState, useEffect} from "react";
import { Link , useNavigate} from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai"
import {getaddress} from '../../store/store slices/addreseSlice'
import {grageOwnerRegister, clearstate } from '../../store/store slices/auth'
import { useDispatch,useSelector } from 'react-redux'
//formik
import { useField,Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';


const Owner_register = () =>{
     // yup validation
     const {addressList}= useSelector((state)=>state.address)

     const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
     let schema = yup.object().shape({
   
        email: yup.string().email('Enter a Valid Email').required("Email is required"),
        password: yup.string().min(5,'password at least 5 characters').max(10, 'password max 10 characters'),
        workshopname:yup.string().required('Workshop name is required'),
        name: yup.string().required('Name is required'),
        phone:yup.string().required('Phone is required').matches(phoneRegExp, 'Phone number is not valid'),    
        password: yup.string().required('password is required').min(5,'password at least 5 characters').max(10, 'password max 10 characters'),
        confirm_password:yup.string().required('confirm password is required').oneOf([yup.ref('password'), null], 'Passwords must match'),
        area_id:yup.string().required("Please select a area"),
        country_id:yup.string().required("Please select a area"),
        title:yup.string().required('Workshop title  is required'),
       
      });

      // end  yup 
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const {create,loggedIn,isLoading,error}= useSelector((state)=>state.auth)

    const [showAlert, setShowAlert]= useState(true)
    const [formData, setFormData] = useState({
        workshopname:'',
        workshopAddress:'',
        name: '',
        phone:'',
        email: '',
        password: '',
        confirm_password:'',
        area_id:'',
        country_id:'',
        title:'',
     

    })
    
    useEffect(() =>{
        dispatch(getaddress())
      
    
      },[dispatch])
     

    const {workshopname,workshopAddress, name,phone , email, password, confirm_password, area_id,country_id,title  }=formData
  
    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit= async data => {
       
        if(password !== confirm_password){
            alert('password do not match')
        }
        
        else{
            console.log(formData)
            console.log( grageOwnerRegister)
         
           dispatch( grageOwnerRegister(data))

           setShowAlert(true)
           const timeId = setTimeout(() => {
            // After 3 seconds set the showAlert value to false
            setShowAlert(false)
            dispatch(clearstate())
          }, 5000)
      
          return () => {
            clearTimeout(timeId)
          }
          
        }
    }

    let  countries = addressList.map((country=> {
         return <option key={country.id} value={country.id} >{country.name}</option>
         
    }))
    const findCities = (country_id) =>{
        let  selectedcountry = country_id !== '' &&  addressList.find(country => country.id == country_id)
        let renderedareas = selectedcountry && selectedcountry.cities.map((city)=>city.areas.map((area)=><option key={area.id} value={area.id} >{area.name}</option>))
           return renderedareas    
    }
    const phoneCode = (country_id) =>{
       
     let code=   country_id !== '' ?  addressList.find(country => country.id == country_id).phone_code:''
     return code    
    }
          
    
   
    return(
        <>
        {loggedIn&& navigate('/workshop/owner/dashbord')}
        {isLoading ?   <img className='login' src="/images/giphy.gif" /> :
        
        <div className='login owner_register'>
          
            <div className='owner_or_employee active'>
                        <img src="/images/cycle one/service_icons/icon_2.png" />
                        <div className="inline-block"> Garage Owner </div>
             </div>

             <Formik
             initialValues={{
                workshopname:'',
                workshopAddress:'',
                name: '',
                phone:'',
                email: '',
                password: '',
                confirm_password:'',
                area_id:'',
                country_id:'',
                title:'',
               
               
              }}
              validationSchema={schema}
              onChange={(values=>{
                  setFormData({...formData,['country_id']:values.country.id})
              })}
              onSubmit ={(values)=>{
                onSubmit(values);
             
              }}
             
            
           >
            {({errors, touched,  handleSubmit, values})=> (
            <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}  autoComplete="off">
           
            <div className="title">Workshop Info</div>
            {showAlert && error&& <div className='msg-error'>{ Object.values(error)}</div> }
            <div className={`main_input ${errors.workshopname  && touched.workshopname &&'input-error'}`}>
               <label>Workshop Name</label>
               <Field  type='text' name="workshopname"  placeholder='Jessica Hayes'/>
               {touched.workshopname && <div className='mark'>{errors.workshopname  ? <span className='validation-error'><AiOutlineClose /></span>: <FcCheckmark />}</div>} 
                {errors.workshopname && touched.workshopname && <div className='error-text'> {errors.workshopname}</div> }
               
           </div>
           <div className={`main_input ${errors.title  && touched.title &&'input-error'}`}>
               <label>Workshop Title</label>
               <Field  type='text' name="title" placeholder='Jessica Hayes'/>
               {touched.title && <div className='mark'>{errors.title  ? <span className='validation-error'><AiOutlineClose /></span>: <FcCheckmark />}</div>} 
                {errors.title && touched.title && <div className='error-text'> {errors.title}</div> }
               
           </div>

           
           <div className="title">Workshop Address</div>
             
          <div className={` address-id ${errors.country_id  && touched.country_id &&'input-error'}`}>
                <Field  as="select" name='country_id'   >
                <option hidden >Country</option>
                    {countries}
                </Field>
                {errors.country_id && touched.country_id && <div className='error-text'> {errors.country_id}</div> }
                
               
              
          </div>
         
          <div className={`address-id ${errors.area_id  && touched.area_id &&'input-error'}`}>
                <Field  as="select" name='area_id' >
               
                <option hidden >Area</option>
                    {findCities(values.country_id)}
                </Field>
               
               
           </div>
          
          
           
           <div className="title">Login Info</div>
           <div className={`main_input ${errors.name  && touched.name &&'input-error'}`}>
               <label>Owner Name</label>
               <Field  type='text' placeholder='Jessica Hayes'  name="name"  />
               {touched.name && <div className='mark'>{errors.name  ? <span className='validation-error'><AiOutlineClose /></span>: <FcCheckmark />}</div>} 
                {errors.name && touched.name && <div className='error-text'> {errors.name}</div> }
               
           </div>

           <div className={`main_input ${errors.phone  && touched.phone &&'input-error'}`}>
               <label>Phone Number</label>
               <input className='phone-code' onChange={e=>onChange(e)} required    maxLength="3"  placeholder='20' 
               value={ phoneCode(values.country_id)}  
               name="code"  />
            
               <Field className='phone-number'  type='tel' placeholder='1111111111'  name="phone"  />
               {touched.phone && <div className='mark'>{errors.phone  ? <span className='validation-error'><AiOutlineClose /></span>: <FcCheckmark />}</div>} 
                {errors.phone && touched.phone && <div className='error-text'> {errors.phone}</div> }
               
           </div>

           <div className={`main_input ${errors.email  && touched.email &&'input-error'}`} >
                    <label htmlFor='email'>Email</label>
                    <Field type='email' placeholder='handel@example.com'  name="email" autoComplete="off"   />
                       { touched.email && <div className='mark'>{errors.email ?  <span className='validation-error'><AiOutlineClose /></span>: <FcCheckmark />}</div>}
                       {errors.email && touched.email && <><div className='error-text'> {errors.email}</div></> }
                    
           </div>
                
            <div className={`main_input ${errors.password  && touched.password &&'input-error'}`}>
                <label htmlFor='password'>Password</label>
                <Field type='password' placeholder='Type your password'  name="password" autoComplete="off"/>
                {touched.password && <div className='mark'>{errors.password  ? <span className='validation-error'><AiOutlineClose /></span>: <FcCheckmark />}</div>} 
                {errors.password && touched.password && <div className='error-text'> {errors.password}</div> }
            </div>

           <div className={`main_input ${errors.confirm_password  && touched.confirm_password &&'input-error'}`}>
               <label>Confirm Password</label>
               <Field  type='password' placeholder='Type your password'  name="confirm_password"  />
               {touched.confirm_password && <div className='mark'>{errors.confirm_password  ? <span className='validation-error'><AiOutlineClose /></span>: <FcCheckmark />}</div>} 
                {errors.confirm_password && touched.confirm_password && <div className='error-text'> {errors.confirm_password}</div> }
               

           </div>
            
            


            <div className="action">
                    <div className='agree_privacy'>By logging in, you agree to our
                    <div><span className='blue'>Terms of Service </span> &amp; <span className='blue'>Privacy Policy</span></div>
                    </div>
                     
                        
                         <input className='dark_button' type='submit' value='Signup'/> 
                    
                    
                    <div className='sign_up'>Don't Have Account ! <Link to='/login_process/owner_login'><span className='blue'>LOGIN</span></Link> </div>
                 </div>
                 </form>
            )}

           </Formik>  
                { create && navigate('/login_process/confirmation')}
         </div>
}
        </>
    )
}

export default  Owner_register