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
    const {employs, isLoading} = useSelector((state)=>state.GoEmploye)
    const [showAlert, setShowAlert]= useState(true)
    const[createflashmsg,setCreateFlashmsg] = useState(false)
    const [employee_id, setEmployee_id] = useState()
    const [activeIndex,setActiveIndex]=useState()
    const [search, setSearch] = useState('')

    useEffect(() =>{
        dispatch(getemploys());
        dispatch(getAssettypes());
        
      },[dispatch])
   
    const onEmployChange=e=>setEmployee_id(e.target.value)
    const onSubmit= async data => {     
        dispatch(createAsset({...data, employees:[{employee_id:employee_id}]}))
        setCreateFlashmsg(true)
    }
    const renderedTypes =  types.map(type=><option key={type.id} value={type.id}>{type.title}</option>)
    const renderedemployes =  employs.map(employ=><option key={employ.id} value={employ.id}>{employ.name}</option>)

//remove validation error 
const removeError=(setFieldValue,setFieldTouched, name)=>{
    setFieldValue(name, '', false);
    setFieldTouched(name, false,false)
  
  }


  //search employ process 
  const onChange=e=>{setSearch(e.target.value.toLowerCase())}
  const searchResult = employs.filter((el) => {
   
    if (search === '') {
        return el
    }
  
    else {        
        return ( el.name.toLowerCase().includes(search) )           
    }
})  
const clickSelected = (index,id)=> {
    setActiveIndex(index)
    setEmployee_id(id)
    let selectedEmploy=employs.find(employ=>employ.id == id)
    setSearch(selectedEmploy.name)
   
}

const renderedEmploys = isLoading ? <span>  loading ...</span> :searchResult.map((employ,index)=>{
    const  className = activeIndex === index ? 'selected' : '';
  
    return(
    <div className={className} key={employ.id} onClick={()=>clickSelected(index,employ.id)}>{employ.name}</div> 
)})
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
                        {createflashmsg&&<FlashMsg 
                            title={`You will add this asset  to workshop ${cookies.get("workshop").title} !`}
                            img={'/images/msgIcons/info.svg'}
                            setFlashmsg={setCreateFlashmsg}
                            func={onSubmit}
                            func_val={values}
                            icontype='info-icon'
                    />}
                <Row>
                    <Col lg={6}>
                    <div  className={`main_input ${ errors.title && touched.title &&'input-error'}`}>
                                    <label>Asset name</label>
                                    <Field  type='text' name="title"  placeholder='Asset name'/>
                                    {touched.title && <div className='mark'>{errors.title  ? <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'title')} /></span>: <FcCheckmark />}</div>} 
                                {errors.title && touched.title && <div className='error-text'> {errors.title}</div> }
                                </div>
                    </Col>
                    <Col lg={6}>
                    <div className='main_input'>
                        <label>Assigned Employee</label>
                        {/* <select  name='employee_id' value={employee_id} onChange={e=>onEmployChange(e)} > 
                        <option hidden> Employ</option>
                           { renderedemployes}
                        </select> */}
                        <input type='text'  name='employSearch' placeholder='SEARCH EMPLOYEE'  value={search} onChange={e=>onChange(e)} />
                        {search !== '' &&  <div className='search-result'>
                           {renderedEmploys.length>0 ?renderedEmploys : 'No Employ Found ' }
                         </div>}
                        
                        
                    </div>
                    </Col>
                    <Col lg={6}>
               
                    <div   className={`main_input  ${ errors.type_id && touched.type_id &&'input-error'}`} >
                                        <label>Asset Type</label>
                                        <input type='text' placeholder='' disabled/>
                                        <div className={` ${errors.type_id  && touched.type_id &&'input-error'}`}>
                                            <Field  as="select" name='type_id'   >
                                            <option hidden >Asset type</option>
                                            {renderedTypes}
                                            </Field>   
                                        </div>
                                     
                                    </div>
                                    {errors.type_id && touched.type_id && <div className='error-text'> {errors.type_id}</div> }
                    </Col>
                  
              
                   
                </Row>
                <Row>
                    <Col lg={6}>
                        <div className='main_input'>
                            <label className='textarea_label'>Asset Description</label>
                            <Field as ='textarea' type='text' placeholder='Asset Description' name='description' />
                            
                            
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
