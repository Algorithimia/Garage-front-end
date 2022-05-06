import { Col, Row } from "react-bootstrap"
import { FaSearch } from "react-icons/fa"
import { Link, Routes, Route, useNavigate, Navigate } from "react-router-dom"
import { useDispatch,useSelector } from 'react-redux'
import AfterWorkOrder from "./AfterWorkOrder"
import { useState, useEffect } from "react"
import {getaddress} from '../../store/store slices/addreseSlice'
import {getModels} from '../../store/store slices/workOrderSlices/modelSlice'
import {cteateWorkOrder , clearstate} from '../../store/store slices/workOrderSlices/workOrder'
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai"
//formik
import { Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';
import FlashMsg from "../workshops/components/FlashMsg";
import Cookies from "universal-cookie";


const CreateWorkOrder = () => {
     // yup validation

     const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
     let schema = yup.object().shape({
   
        email: yup.string().email('Enter a Valid Email').required("Email is required"),
        name: yup.string().required('Name is required'),
        phone:yup.string().required('Phone is required').matches(phoneRegExp, 'Phone number is not valid'),    
        area_id:yup.string().required("Please select an area"),
        city_id:yup.string().required("Please select a city"),
        country_id:yup.string().required("Please select a country"),
        tax_id:yup.number().typeError('Tax Id must be a number').required('tax id is required'),
        vehicle_number:yup.number().typeError('vehicle number must be a number').required('vehicle number is required'),
        kilometer_driven:yup.number().typeError('kilometer driven must be a number').required('kilometer driven is required'),
        chassis_number:yup.number().typeError(' chassis number must be a number').required(' chassis number is required'),
        engine_number:yup.number().typeError('engine number must be a number').required('engine number is required'),
        order_remark:yup.string(),
        model_id:yup.string().required("Please select a model"),
        fuel_type:yup.string().required("Please select a fuel type"),
        fuel_indicator:yup.number().typeError('Fuel Indicator must be a number').required('Fuel Indicator is required'),

       
      });

      // end  yup 
    const cookies = new Cookies();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {addressList}= useSelector((state)=>state.address)
    const {models}= useSelector((state)=>state.models)
    const {orderCreated, error}= useSelector((state)=>state.workOrders)
    const[createflashmsg,setCreateFlashmsg] = useState(false)
    const[errorFlashmsg,setErrorFlashmsg] = useState(true)
    useEffect(() =>{
        
        dispatch(getaddress()); 
        dispatch(getModels()); 
        dispatch(clearstate()); 
           
      },[dispatch])
      let  countries = addressList.map((country=> {
        return <option key={country.id} value={country.id} >{country.name}</option>
        
   }))
   let  renderedModels = models.map((model=> {
    return <option key={model.id} value={model.id} >{model.name} &nbsp; {model.brand.name} Brand </option>
    
}))

//    let  selectedcountry = country_id !== '' &&  addressList.find(country => country.id == country_id)
   const renderedCities =(country_id)=> {
    let  selectedcountry = country_id !== '' &&  addressList.find(country => country.id == country_id)
    return selectedcountry && selectedcountry.cities.map((city)=><option key={city.id} value={city.id} >{city.name}</option>)
}
//    let selectedCity = city_id !== '' && selectedcountry && selectedcountry.cities.find(city=>city.id ==city_id)
   let renderedareas=(city_id,country_id)=>{
    let  selectedcountry = country_id !== '' &&  addressList.find(country => country.id == country_id)
    let  selectedCity = city_id !== '' &&  selectedcountry.cities.find(city => city.id == city_id)
  return  selectedCity && selectedCity.areas.map((area)=><option key={area.id} value={area.id} >{area.name}</option>)
  }
 
   const onSubmit= async data => {   
        
         dispatch(cteateWorkOrder (data))
         setErrorFlashmsg(true)
          
            
          
      
   }


//find phone code for selected country
const phoneCode = (country_id) =>{
       
    let code=   country_id !== '' ?  addressList.find(country => country.id == country_id).phone_code:''
    return code    
   }
   //remove validation error 
const removeError=(setFieldValue,setFieldTouched, name)=>{
    setFieldValue(name, '', false);
    setFieldTouched(name, false,false)
  
  }
   return (
       <>
       
          
        <div className="create_work_order">
            <div className="main_ttitle">CREATE WORK ORDER
            
             <div className="right">
                 <input placeholder="Search customers" />
                 <span> <FaSearch /> </span>
             </div>
            </div>
            {errorFlashmsg && error && <FlashMsg 
                      title={`${Object.values(error)} !`}
                      img={'/images/msgIcons/error.svg'}
                      setFlashmsg={setErrorFlashmsg}

                      icontype='error-icon'
              />}
            
            <Formik
             initialValues={{
                workshop_id:  cookies.get("workshop").id,
                email:'',
                name: '',
                phone: '',
                country_id:'',
                area_id:'',
                city_id:'',
                tax_id:'',
                vehicle_number:'',
                kilometer_driven:'',
                chassis_number:'',
                engine_number:'',
                order_remark:'',
                model_id:'',
                fuel_type:'',
                fuel_indicator:''
               
              }}
            
            
              validationSchema={() =>schema}
              onSubmit ={(values)=>{
              setCreateFlashmsg(true)
             
              }}
             
            
           >
        {({errors, touched, setFieldTouched,  handleSubmit,setFieldValue, values})=> (
          
            <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}  autoComplete="off">
                  {createflashmsg&&<FlashMsg 
                      title={`You are making this Workorder  to your workshop ${cookies.get("workshop").title} !`}
                      img={'/images/msgIcons/info.svg'}
                      setFlashmsg={setCreateFlashmsg}
                      func={onSubmit}
                      func_val={values}
                      icontype='info-icon'
              />}
            { console.log(values)}
                <div className="customer_info_create">
                <div className="title">CUSTOMER INFO</div>
                <Row>
                <Col lg={4} md={6} className="margin_top">
                         <div  className={`main_input ${ errors.name && touched.name &&'input-error'}`}>
                            <label>Customer Name</label>
                            <Field  type='text' name="name"  placeholder='Customer Name'/>
                            {touched.name && <div className='mark'>{errors.name  ? <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'name')} /></span>: <FcCheckmark />}</div>} 
                           {errors.name && touched.name && <div className='error-text'> {errors.name}</div> }
                        </div>
                </Col>
                <Col lg={8} md={12} className="margin_top">
                    <Row>
                       <Col sm={4} className="margin_top">
                       <div className='main_input left_select'>
                                <label>Country</label>
                                <input type='text' placeholder='' disabled/>
                                <div className={` address-id ${errors.country_id  && touched.country_id &&'input-error'}`}>
                                    <Field  as="select" name='country_id'   >
                                      <option hidden >Country</option>
                                        {countries}
                                    </Field>   
                                </div>
                            </div>
                       
         
                            
                      </Col>   
                      <Col sm={4} className="margin_top">
                      <div className='main_input center_select'>
                                <label>City</label>
                                <input type='text' placeholder='' disabled/>
                                <div className={`address-id ${errors.city_id  && touched.city_id &&'input-error'}`}>
                                        <Field  as="select" name='city_id' >
                                        <option hidden >City</option>
                                        {renderedCities(values.country_id)}
                                        </Field>
                                    
                                    
                                </div>
                            </div>
                   
                            
                      </Col>   
                      <Col sm={4} className="margin_top">
                      <div className='main_input center_select'>
                                <label>Area</label>
                                <input type='text' placeholder='' disabled/>
                                <div className={`address-id ${errors.area_id  && touched.area_id &&'input-error'}`}>
                                        <Field  as="select" name='area_id' >
                                        <option hidden >Area</option>
                                
                                        {renderedareas(values.city_id, values.country_id)}
                                        </Field>
                                         
                                </div>
                               
                            </div>
                            
                      </Col>   
                      </Row>   

                </Col>
                <Col lg={4} md={6} className="margin_top">
                <div className={`main_input ${errors.phone  && touched.phone &&'input-error'}`}>
                    <label>Phone Number</label>
                    <input className='phone-code'   maxLength="3"  placeholder='+20' 
                   value={ phoneCode(values.country_id)}  
                    name="code" 
                     />
                    
                  
               <Field className='phone-number'  type='tel' placeholder='1111111111'  name="phone"  />
               {touched.phone && <div className='mark'>{errors.phone  ? <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'phone')}/></span>: <FcCheckmark />}</div>} 
                {errors.phone && touched.phone && <div className='error-text'> {errors.phone}</div> }
               
           </div>
                </Col>
                <Col lg={4} md={6} className="margin_top">
                        <div className={`main_input ${errors.tax_id  && touched.tax_id &&'input-error'}`}>
                            <label>Customer TAX ID</label>
                            <Field type='text'placeholder='Customer TAX ID' name='tax_id' autoComplete="off"   />
                            { touched.tax_id && <div className='mark'>{errors.tax_id ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'email')}/></span>: <FcCheckmark />}</div>}
                            {errors.tax_id && touched.tax_id && <><div className='error-text'> {errors.tax_id}</div></> }
                    
                        </div>
                </Col>
                <Col lg={4} md={6} className="margin_top">
                     <div className={`main_input ${errors.email  && touched.email &&'input-error'}`}>
                            <label>Customer E-mail</label>
                            <Field type='email' placeholder='handel@example.com'  name="email" autoComplete="off"   />
                            { touched.email && <div className='mark'>{errors.email ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'email')}/></span>: <FcCheckmark />}</div>}
                            {errors.email && touched.email && <><div className='error-text'> {errors.email}</div></> }
                    
                        </div>
                </Col>
              
            </Row>

                </div>
                <div className="vechile_info">
                <div className="title">VECHILE INFO</div>
                 <Row>
                  
                     <Col lg={4} md={6} className="margin_top">
                     <div className={`main_input ${errors.model_id  && touched.model_id &&'input-error'}`}>
                            <label>Model</label>
                        <input type='text' placeholder='' disabled/>
                        <Field as="select"  name='model_id' autoComplete="off"   >
                                 <option  hidden >select Model</option> 
                                {renderedModels}
                               
                            </Field>
                      </div>

                         
                    
                     </Col>
                     <Col lg={4} md={6} className="margin_top">
                     <div className={`main_input ${errors.fuel_type  && touched.fuel_type &&'input-error'}`}>
                        <label>Fuel Type</label>
                        <input type='text' placeholder='' disabled/>
                        <Field as="select"  name='fuel_type' autoComplete="off"   >
                        <option  hidden >select Fuel Type</option>
                                    <option value='0'> PETROL</option>
                                    <option value='1' >GAS</option>
                                    <option value='2' >ELECTRICITY</option>
                              
                            </Field>
                                   
                            
                      </div>
                     </Col>
                     <Col lg={4} md={6} className="margin_top">
                     <div className={`main_input ${errors.vehicle_number  && touched.vehicle_number &&'input-error'}`}>
                        <label>Vehicle Number</label>
                        <Field  name="vehicle_number"  placeholder='Vehicle Number'/>
                            {touched.vehicle_number && <div className='mark'>{errors.vehicle_number  ? <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'name')} /></span>: <FcCheckmark />}</div>} 
                           {errors.vehicle_number && touched.vehicle_number && <div className='error-text'> {errors.vehicle_number}</div> }
                        </div>
                     </Col>
                     <Col lg={4} md={6} className="margin_top">
                        <div className={`main_input ${errors.kilometer_driven  && touched.kilometer_driven &&'input-error'}`}>
                        <label>Kilometer Driven</label>
                        <Field  name="kilometer_driven"  placeholder='Kilometer Driven'/>
                            {touched.kilometer_driven && <div className='mark'>{errors.kilometer_driven  ? <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'name')} /></span>: <FcCheckmark />}</div>} 
                           {errors.kilometer_driven && touched.kilometer_driven && <div className='error-text'> {errors.kilometer_driven}</div> }
                        </div>
                     </Col>
                     <Col lg={4} md={6} className="margin_top">
                        <div className={`main_input ${errors.chassis_number  && touched.chassis_number &&'input-error'}`}>
                            <label>Chassis Number</label>
                            <Field  name="chassis_number"  placeholder='Chassis Number'/>
                            {touched.chassis_number && <div className='mark'>{errors.chassis_number  ? <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'name')} /></span>: <FcCheckmark />}</div>} 
                            {errors.chassis_number && touched.chassis_number && <div className='error-text'> {errors.chassis_number}</div> }
                        </div>
                     </Col>
                     <Col lg={4} md={6} className="margin_top">
                        <div className={`main_input ${errors.engine_number  && touched.engine_number &&'input-error'}`}>
                            <label>Engine Number</label>
                            <Field  name="engine_number"  placeholder='Engine Number'/>
                            {touched.engine_number && <div className='mark'>{errors.engine_number  ? <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'name')} /></span>: <FcCheckmark />}</div>} 
                            {errors.engine_number && touched.engine_number && <div className='error-text'> {errors.engine_number}</div> }
                        </div>
                     </Col>
                     <Col lg={4} md={6} className="margin_top">
                        <div className={`main_input ${errors.fuel_indicator  && touched.fuel_indicator &&'input-error'}`}>
                            <label>Fuel Indicator</label>
                            <Field  name="fuel_indicator"  placeholder='Fuel Indicator'/>
                            {touched.fuel_indicator && <div className='mark'>{errors.fuel_indicator  ? <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'name')} /></span>: <FcCheckmark />}</div>} 
                            {errors.fuel_indicator && touched.fuel_indicator && <div className='error-text'> {errors.fuel_indicator}</div> }
                        </div>
                     </Col>
                 </Row>

                </div>
               
                  <div className="customer_info_create">
                  <div className="title">WORK ORDER INFO</div>
                  <Row>
                 
                        <Col sm={12} lg={6} >
                            <div className={`main_input ${errors.order_remark  && touched.order_remark &&'input-error'}`}>
                                <label style={{left:'2%'}}>Order Remarks</label>
                                <Field as="textarea" className="big_input" name="order_remark"  placeholder='Order Remarks'/>
                           
                            </div>
                        </Col>
                  </Row>
                </div>
            
                    <input className='dark_button' type='submit' value='Create Order'/> 
                 
                    
            </form>
        )}
            </Formik>
            
            

            <Routes>
                    <Route path="/afterworkorder" element={<AfterWorkOrder  back='BACK TO WORK ORDERS' path='/workshop/owner/allworkorders' />} exact  />
            </Routes>
        
        </div>
        { orderCreated ?  <Navigate to="/workshop/owner/createworkeorder/afterworkorder" > </Navigate> : ''}
     </>
    )
}

export default CreateWorkOrder
