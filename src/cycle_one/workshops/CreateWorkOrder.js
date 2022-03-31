import { Col, Row } from "react-bootstrap"
import { FaSearch } from "react-icons/fa"
import { Link, Routes, Route, useNavigate } from "react-router-dom"
import { useDispatch,useSelector } from 'react-redux'
import AfterWorkOrder from "./AfterWorkOrder"
import { useState, useEffect } from "react"
import {getaddress} from '../../store/store slices/addreseSlice'
const CreateWorkOrder = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const [formData, setFormData] = useState({
        workshop_id: 2,
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
        fuel_type:''
    })
    const {workshop_id, name , phone , email, area_id, country_id ,tax_id ,city_id,vehicle_number,kilometer_driven, chassis_number, engine_number, order_remark ,model_id, fuel_type}=formData
    const {addressList}= useSelector((state)=>state.address)
    useEffect(() =>{
        dispatch(getaddress()); 
      },[dispatch])
      let  countries = addressList.map((country=> {
        return <option key={country.id} value={country.id} >{country.name}</option>
        
   }))
   let  selectedcountry = country_id !== '' &&  addressList.find(country => country.id == country_id)
   let renderedCities = selectedcountry && selectedcountry.cities.map((city)=><option key={city.id} value={city.id} >{city.name}</option>)
   let selectedCity = city_id !== '' && selectedcountry.cities.find(city=>city.id ==city_id)
   let renderedareas = selectedCity && selectedCity.areas.map((area)=><option key={area.id} value={area.id} >{area.name}</option>)
  
   const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
   const onSubmit= async e => {   
          e.preventDefault()
        //   dispatch( (formData))

   }
   return (
        <div className="create_work_order">
            <div className="main_ttitle">CREATE WORK ORDER
            
             <div className="right">
                 <input placeholder="Search customers" />
                 <span> <FaSearch /> </span>
             </div>
            </div>
           
            <form onSubmit={e=>onSubmit(e)}>
                <div className="customer_info_create">
                <div className="title">CUSTOMER INFO</div>
                <Row>
                <Col lg={4} md={6} className="margin_top">
                         <div className='main_input'>
                            <label>Customer Name</label>
                            <input type='text' placeholder='Customer Name' name='name' value={name} onChange={e=>onChange(e)} required/>
                        </div>
                </Col>
                <Col lg={8} md={12} className="margin_top">
                    <Row>
                       <Col sm={4} className="margin_top">
                       <div className='main_input left_select'>
                                <label>Country</label>
                                <input type='text' placeholder='' disabled/>
                                <div className='address-id'>
                                        <select name='country_id' value={country_id} onChange={e=>onChange(e)}>
                                        <option hidden >Country</option>
                                            {countries}
                                        </select>
                                </div>
                            </div>
                       
         
                            
                      </Col>   
                      <Col sm={4} className="margin_top">
                      <div className='main_input center_select'>
                                <label>City</label>
                                <input type='text' placeholder='' disabled/>
                                <div className='address-id'>
                                    <select name='city_id' value={city_id} onChange={e=>onChange(e)}>
                                    <option hidden >City</option>
                                
                                        {renderedCities}
                                    </select>
                                 </div>
                            </div>
                   
                            
                      </Col>   
                      <Col sm={4} className="margin_top">
                      <div className='main_input center_select'>
                                <label>Area</label>
                                <input type='text' placeholder='' disabled/>
                                <div className='address-id'>
                                    <select name='area_id' value={area_id} onChange={e=>onChange(e)}>
                                    <option hidden >Area</option>
                                
                                        {renderedareas}
                                    </select>
                                 </div>
                            </div>
                            
                      </Col>   
                      </Row>   

                </Col>
                <Col lg={4} md={6} className="margin_top">
                <div className='main_input'>
                    <label>Phone Number</label>
                    <input className='phone-code'   maxLength="3"  placeholder='+20' 
                    value={ country_id !== '' ?  addressList.find(country => country.id == country_id).phone_code:'' }  
                    name="code"  />
                    
                    <input className='phone-number' onChange={e=>onChange(e)} required type='tel' placeholder='1111111111'  name="phone" value={phone} />
               
               
           </div>
                </Col>
                <Col lg={4} md={6} className="margin_top">
                     <div className='main_input'>
                            <label>Customer TAX ID</label>
                            <input type='text' placeholder='Customer TAX ID' name='tax_id' value={tax_id} onChange={e=>onChange(e)} required/>
                        </div>
                </Col>
                <Col lg={4} md={6} className="margin_top">
                     <div className='main_input'>
                            <label>Customer E-mail</label>
                            <input type='text' placeholder='Customer E-mail' name='email' value={email} onChange={e=>onChange(e)} required/>
                        </div>
                </Col>
              
            </Row>

                </div>
                <div className="vechile_info">
                <div className="title">VECHILE INFO</div>
                 <Row>
                  
                     <Col lg={4} md={6} className="margin_top">
                     <div className='main_input'>
                        <label>Model</label>
                        <input type='text' placeholder='' disabled/>
                            <select  name='model_id' value={model_id} onChange={e=>onChange(e)}>
                                    <option  hidden >select Model</option>
                                    <option> option 1</option>
                                    <option> option 2</option>
                                    <option> option 3</option>
                             </select>
                      </div>
                     </Col>
                     <Col lg={4} md={6} className="margin_top">
                     <div className='main_input'>
                        <label>Fuel Type</label>
                        <input type='text' placeholder='' disabled/>
                            <select name='fuel_type' value={fuel_type} onChange={e=>onChange(e)} >
                                    <option  hidden >select Fuel Type</option>
                                    <option value='0'> PETROL</option>
                                    <option value='1' >GAS</option>
                                    <option value='2' >ELECTRICITY</option>
                             </select>
                      </div>
                     </Col>
                     <Col lg={4} md={6} className="margin_top">
                     <div className='main_input'>
                        <label>Vehicle Number</label>
                        <input type='text' placeholder='Vehicle Number'  name='vehicle_number' value={vehicle_number} onChange={e=>onChange(e)} required/>
                         
                      </div>
                     </Col>
                     <Col lg={4} md={6} className="margin_top">
                     <div className='main_input'>
                            <label>Kilometer Driven</label>
                            <input type='text' placeholder='Kilometer Driven'  name='kilometer_driven' value={kilometer_driven} onChange={e=>onChange(e)} required/>
                        </div>
                     </Col>
                     <Col lg={4} md={6} className="margin_top">
                     <div className='main_input'>
                            <label>Chassis Number</label>
                            <input type='text' placeholder='Chassis Number'  name='chassis_number' value={chassis_number} onChange={e=>onChange(e)} required/>
                        </div>
                     </Col>
                     <Col lg={4} md={6} className="margin_top">
                     <div className='main_input'>
                            <label>Engine Number</label>
                            <input type='text' placeholder='Engine Number' name='engine_number' value={engine_number} onChange={e=>onChange(e)} required/>
                        </div>
                     </Col>
                     <Col lg={4} md={6} className="margin_top">
                     <div className='main_input'>
                            <label>Fuel Indicator</label>
                            <input type='text' placeholder='Fuel Indicator'/>
                        </div>
                     </Col>
                 </Row>

                </div>
               
                  <div className="customer_info_create">
                  <div className="title">WORK ORDER INFO</div>
                  <Row>
                 
                        <Col sm={12} lg={6} >
                            <div className='main_input'>
                                <label style={{left:'2%'}}>Order Remarks</label>
                                <textarea  className="big_input" type='email' placeholder='Order Remarks' name='order_remark' value={order_remark}  onChange={e=>onChange(e)} required/>
                            </div>
                        </Col>
                  </Row>
                </div>
               <Link to='/workshop/owner/createworkeorder/afterworkorder'> <input className='dark_button' type='submit' value='Create Order'/> </Link> 
            </form>

            <Routes>
                    <Route path="/afterworkorder" element={<AfterWorkOrder  back='BACK TO WORK ORDERS' path='/workshop/owner/allworkorders' />} exact  />
            </Routes>
        </div>
    )
}

export default CreateWorkOrder
