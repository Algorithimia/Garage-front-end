import React,{useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'

import { useDispatch,useSelector } from 'react-redux'

import {getemploys} from '../../store/store slices/GOEmploy'
import {createAsset , getAssettypes} from '../../store/store slices/assetSlice'
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai"
//formik
import { Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';
import FlashMsg from "../workshops/components/FlashMsg";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const CreateAssets = () => {
     // yup validation
     let schema = yup.object().shape({

        type_id:yup.number().required('You must Select a Type'),
        title: yup.string().required('Name is required'),
        

       
      });

      // end  yup 
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {types,created, error} = useSelector((state)=>state.assets)
    const {employs} = useSelector((state)=>state.GoEmploye)
    const [showAlert, setShowAlert]= useState(true)
    const[createflashmsg,setCreateFlashmsg] = useState(false)
    const [formData, setFormData] = useState({
        workshop_id:  cookies.get("workshop").id,
        type_id:'',
        title: '',
        description: '',
        employees:[],
    })

    useEffect(() =>{
        dispatch(getemploys());
        dispatch(getAssettypes());
        
      },[dispatch])
    console.log(formData)
    const {workshop_id, type_id, title, description, employees }=formData
    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const onEmployChange=e=>setFormData({...formData, [employees]:employees.push({employee_id:e.target.value})})
    const onSubmit= async e => {   
           e.preventDefault()
          dispatch(createAsset(formData))
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
    const renderedTypes =  types.map(type=><option key={type.id} value={type.id}>{type.title}</option>)
    const renderedemployes =  employs.map(employ=><option key={employ.id} value={employ.id}>{employ.name}</option>)
    return (
        <div className='create_asset'>
            <div className='header'>
               ADD ASSET

            </div>
            <div className='body'>
            <Formik
             initialValues={{
                workshop_id:  cookies.get("workshop").id,
                type_id:'',
                title: '',
                description: '',     
              }}
            
            
              validationSchema={() =>schema}
              onSubmit ={(values)=>{
              setCreateFlashmsg(true)
             
             
              }}
             
            
           >
                {({errors, touched, setFieldTouched,  handleSubmit,setFieldValue, values})=> (
                
                    <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}  autoComplete="off">
                <Row>
                    <Col lg={6}>
                    <div className='main_input'>
                        <label>Asset name</label>
                        <input type='text' placeholder='Assigned Employee' name='title' value={title} onChange={e=>onChange(e)} required/>
                        
                        
                    </div>
                    </Col>
                    <Col lg={6}>
                    <div className='main_input'>
                        <label>Assigned Employee</label>
                        <select  name='employees' value={employees} onChange={e=>onEmployChange(e)} required> 
                        <option hidden> Employ</option>
                           { renderedemployes}
                        </select>
                        <input type='text'/>
                        
                        
                    </div>
                    </Col>
                    <Col lg={6}>
               
                    <div   className={`main_input  ${ errors.type_id && touched.type_id &&'input-error'}`} >
                                        <label>Asset Type</label>
                                        <input type='text' placeholder='' disabled/>
                                        <div className={` address-id ${errors.type_id  && touched.type_id &&'input-error'}`}>
                                            <Field  as="select" name='country_id'   >
                                            <option hidden >Asset type</option>
                                            {renderedTypes}
                                            </Field>   
                                        </div>
                                    </div>
                    </Col>
                  
              
                   
                </Row>
                <Row>
                    <Col lg={6}>
                        <div className='main_input'>
                            <label className='textarea_label'>Asset Description</label>
                            <textarea type='text' placeholder='Asset Description' name='description' value={description} onChange={e=>onChange(e)}/>
                            
                            
                        </div>
                    </Col>
                </Row>
               
               
                    <input className='button' type='submit' value='Create New Part' />
                 
                
                </form>
                )}
                </Formik >

            </div>
            {created && navigate('/workshop/owner/assets')}
         
        </div>
    )
}

export default CreateAssets
