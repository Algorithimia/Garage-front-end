import React, { useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import {MdPhotoCamera} from 'react-icons/md'
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai"
import { useDispatch,useSelector } from 'react-redux'
import {getaddress} from '../../store/store slices/addreseSlice'
import {updateWorkshop} from '../../store/store slices/workshopSlice'
import{Dropdown} from 'react-bootstrap'
//formik
import { useField,Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';


import Cookies from "universal-cookie";
const cookies = new Cookies();

const WorkshopSettings = () => {

         // yup validation
         const {addressList}= useSelector((state)=>state.address)

         const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
         let schema = yup.object().shape({
            title: yup.string().required('Name is required'), 
          });
    
          // end  yup 
          const navigate = useNavigate()
          const dispatch = useDispatch()
          const[country_id, setCountry_id] = useState([])
          const[city_id, setCity_id] = useState([])
          const[area_id, setArea_id] = useState('')
          const [showAlert, setShowAlert]= useState(true)
          useEffect(() =>{
            dispatch(getaddress())
          
        
          },[dispatch])
        
          let  countries = addressList.map((country=> {
            return  <Dropdown.Item  key={country.id} href="#/action-1" onClick={()=>setCountry_id(country.id)}>{country.name}</Dropdown.Item>
            
       }))


       // select  address 
       let selectedcountry = country_id !=='' &&  addressList.find(country=>country.id == country_id) 
        let renderedcities =selectedcountry&& selectedcountry.cities.map((city=> <Dropdown.Item  key={city.id} href="#/action-1" onClick={()=>setCity_id(city.id)}>{city.name}</Dropdown.Item>))
       let selectedCity = city_id !== '' && selectedcountry && selectedcountry.cities.find(city=>city.id ==city_id)
       let renderedareas = selectedCity && selectedCity.areas.map((area)=><Dropdown.Item  key={area.id} href="#/action-1" onClick={()=>setArea_id(area.id)}>{area.name}</Dropdown.Item>)
        let selectedArea = area_id !== '' && selectedCity.areas.find(area=>area.id == area_id)
        const {workshopUpdated , isLoading,error}= useSelector((state)=>state.workshop)
        const {userDetails }= useSelector((state)=>state.userDetails)
       
       
        const onSubmit= async data => {
            dispatch(updateWorkshop({...data,area_id:area_id}))
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
        <>
        { !userDetails.name  || isLoading ?  <img className='loading-img' src="/images/giphy.gif" /> :
        <div className='settings'>
         <div className='header'>
            PREFERENCE SETTING
            <span className='right'>
                YOUR SUBSCRIPTION ENDS IN 15 DAYS
               <Link to='/workshop/owner/subscribtion'><span className='under_line'>UPGRADE</span></Link> 
                
            </span>
 
           </div>
           <div className='second_row'>
               <div className='lang'>
                 LANGUAGE
                 <select className='right'>
                     <option>ENGLISH</option>
                     <option>Arabic</option>
                     <option>french</option>
                 </select>
               </div>

           </div>
           <Formik
             initialValues={{
               
                workshop_id:cookies.get("workshop").id,
                title: cookies.get("workshop").title,
                hours: '',
                country_id:'',
                city_id: '',
                area_id:'',
                
               
               
              }}
              validationSchema={schema}
              onSubmit ={(values)=>{
                onSubmit(values);
             
             
              }}
             
            
           >
            {({errors, touched,  handleSubmit, values})=> (
            <form className='form-validator' onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}  autoComplete="off">
                  <div className='workshop_info'>
                      
              <Row>
                   <Col sm={12} lg={4}>
                      <div className='left'>
                          <div>WORKSHOP INFO</div>
                          <div className='change_img'  onClick={()=> document.getElementById("my_file").click()}>
                                <img 
                                    src='https://media.istockphoto.com/photos/retro-vintage-workshop-with-misc-tools-picture-id1150892732?k=20&m=1150892732&s=612x612&w=0&h=iTZWuH_NvurOmvZAVPaSn7Q_mWkGUfE1O4P7DJsHlkk='
                                />
                               <span> <MdPhotoCamera /> </span>
                          </div>
                          <input type="file" id="my_file" style={{display: "none"}} />
                      </div>
                   </Col>
                   <Col sm={12} lg={8}>
             <div className='right'>
                <div className={`main_input ${errors.title  && touched.title &&'input-error'}`} >
                <label>Workshop Name</label>
                    <Field type='text' placeholder='Workshop Name'  name="title" autoComplete="off"   />
                       { touched.title && <div className='mark'>{errors.title ?  <span className='validation-error'><AiOutlineClose /></span>: <FcCheckmark />}</div>}
                       {errors.title && touched.title && <><div className='error-text'> {errors.title}</div></> }
                    
                </div>
                
                    <div className={` main_input ${errors.hours  && touched.hours &&'input-error'}`}>
                  
                    {/* <div className={` address-id ${errors.country_id  && touched.country_id &&'input-error'}`}>
                    <Field  as="select" name='country_id'   >
                    <option hidden >Country</option>
                        {countries}
                    </Field>
                    {errors.country_id && touched.country_id && <div className='error-text'> {errors.country_id}</div> }
                    
                    </div> */}
                    <Row>
                        <Col sm={4}>
                        
                                <Dropdown>
                                <Dropdown.Toggle   variant="outline-secondary" id="dropdown-basic">
                                      <div className="select-title"> {selectedcountry ? selectedcountry.name :'country'}</div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                            
                                    {countries ? countries : 'select a country'}
                                </Dropdown.Menu>
                            </Dropdown>
                        
                        </Col>
                        <Col sm={4}>
                                <Dropdown>
                                <Dropdown.Toggle   variant="outline-secondary" id="dropdown-basic">
                                <div className="select-title">{selectedCity ? selectedCity.name :'city'} </div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {console.log(selectedcountry&&selectedcountry.cities)}
                                {renderedcities ? renderedcities : 'selecte a city'}
                                </Dropdown.Menu>
                            </Dropdown>
                        
                        </Col>
                        <Col sm={4}>
                                <Dropdown>
                                <Dropdown.Toggle   variant="outline-secondary" id="dropdown-basic">
                                <div className="select-title">{selectedArea ? selectedArea.name :'Area'}</div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                {renderedareas ? renderedareas : 'city'}
                                </Dropdown.Menu>
                            </Dropdown>
                        
                        </Col>
                    </Row>
                    
                    {/* <br/>
                    <div className={`address-id ${errors.city_id  && touched.city_id &&'input-error'}`}>
                            <Field  as="select" name='city_id' >
                        
                            <option hidden >city</option>
                            {findCities(values.country_id)}
                            
                            </Field>
                        
                        
                    </div>
                    <br/>
                    
                    <div className={`address-id ${errors.area_id  && touched.area_id &&'input-error'}`}>
                            <Field  as="select" name='area_id' >
                        
                            <option hidden >Area</option>
                                {findareas(values.city_id)}
                            </Field>
                        
                        
                    </div>  */}
                        </div>
                       
                        </div>
                   </Col>
                   {showAlert && error && <div className='msg-error'>{ Object.values(error)}</div> }<br/>
                   <input className='submit-settings' type='submit' value='SAVE DETAILS' />
               </Row>
               </div>
                       
           </form>
            )}

           </Formik>   
           {workshopUpdated && navigate('/workshop/owner/dashbord')}
        </div>
         }
         </>
    )
}

export default WorkshopSettings

