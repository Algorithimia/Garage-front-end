import React,{useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'

import { useDispatch,useSelector } from 'react-redux'

import {getemploys} from '../../store/store slices/GOEmploy'
import {createAsset , getAssettypes} from '../../store/store slices/assetSlice'
import Cookies from "universal-cookie";
const cookies = new Cookies();

const CreateAssets = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {types,created, error} = useSelector((state)=>state.assets)
    const {employs} = useSelector((state)=>state.GoEmploye)
    const [showAlert, setShowAlert]= useState(true)
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
                <form onSubmit={e=>onSubmit(e)} >
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
                    <div className='main_input'>
                        <label>Asset Type</label>
                        <select  name='type_id' value={type_id} onChange={e=>onChange(e)} required> 
                        <option hidden> Asset type</option>
                            {renderedTypes}
                        </select>
                        <input type='text'/>
                        
                        
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

            </div>
            {created && navigate('/workshop/owner/assets')}
         
        </div>
    )
}

export default CreateAssets
