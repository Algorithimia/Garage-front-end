import React,{useState} from 'react'
import{editePackage} from '../../store/store slices/packagesSlice'
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai"
import { useDispatch,useSelector } from 'react-redux'
//formik
import { Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';
import {useNavigate, useLocation} from 'react-router-dom'
import Cookies from "universal-cookie";
const cookies = new Cookies();

const EditePackage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
      // yup validation
      let schema = yup.object().shape({
   
        title:yup.string().required('Package title is required'),
        price: yup.number().typeError('Price must be a number').required('Price  is required'),
        description:yup.string().required('Package title is required'),
        
       });
 
       // end  yup 
    let location = useLocation() 
    const [showAlert, setShowAlert]= useState(true)
    const [img,setImg] =useState('')
    const imgChange=e=>setImg( e.target.files[0])
    const {updated, isLoading, error}= useSelector((state)=>state.packages)
    const onSubmit= async data => {
        dispatch(editePackage( {...data, image:img}));
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
         
        {isLoading ? <img className='loading-img' src="/images/giphy.gif" /> :

        <div className='add_edite'>
               <Formik
             initialValues={{
                workshop_id:cookies.get("workshop").id,
                package_id: location.state.packageData.id,
                title: location.state.packageData.title,
                price: location.state.packageData.price,
                description:location.state.packageData.description,
             
                
               
               
              }}
              validationSchema={schema}
              onSubmit ={(values)=>{
                onSubmit(values);
             
               
             
              }}
             
            
           >
            {({errors, touched,  handleSubmit})=> (
            <form className='form-validator' onSubmit={e=> {e.preventDefault(); handleSubmit()}}>
                <div className='upload'
                    onClick={()=> document.getElementById("my_file").click()}>

                        <img src='/images/cycle one/img.png'/>
                        <span>UPLOAD PHOTOS</span>
                     </div>
                     {img =='' ? <div className='img-selected'> Image not updated </div> : <div className='img-selected'>Image updated</div>}
                 
                <input type="file" id="my_file" style={{display: "none"}} onChange={e=>imgChange(e)} />

                <div className={`div-input ${errors.title  && touched.title &&'input-error'}`}>
                     <label>Package Title</label>
                     <Field type='text' placeholder='PACKAGE TITLE'  name="title" autoComplete="off"/>
                     {touched.title && <div className='mark'>{errors.title  ? <span className='validation-error'><AiOutlineClose /></span>: <FcCheckmark />}</div>} 
                     {errors.title && touched.title && <div className='error-text'> {errors.title}</div> }
                </div>
                <div className={`div-input ${errors.price  && touched.price &&'input-error'}`}>
                    <label>Package Price</label>
                     <Field type='text' placeholder='PRICE'  name="price" autoComplete="off"/>
                     {touched.price && <div className='mark'>{errors.price  ? <span className='validation-error'><AiOutlineClose /></span>: <FcCheckmark />}</div>} 
                     {errors.price && touched.price && <div className='error-text'> {errors.price}</div> }
                </div>

                <div className={`div-input ${errors.description  && touched.description &&'input-error'}`}>
                    <label>Package Description </label>
                     <Field type='text' placeholder='Description'  name="description" autoComplete="off"/>
                     {touched.description && <div className='mark'>{errors.description  ? <span className='validation-error'><AiOutlineClose /></span>: <FcCheckmark />}</div>} 
                     {errors.description && touched.description && <div className='error-text'> {errors.description}</div> }
                </div>
                
               
                <br/>
                {showAlert && error && <div className='msg-error'>{ Object.values(error)}</div> }

                <input className='btn' type='submit' value='SAVE DETAILS' />
            </form>
            )}
            </Formik >
            {updated && navigate('/workshop/owner/maintnance')} 

          
        </div>
        }</>
    )
}

export default EditePackage

