import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai"
import {AddStage} from '../../../store/store slices/workOrderSlices/stagesSlice'
import { useDispatch,useSelector } from 'react-redux'
//formik
import { Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';

import Cookies from "universal-cookie";
const cookies = new Cookies();

    
const AddNewStage = ({workorderId}) => {
      // yup validation
      let schema = yup.object().shape({
   
       name:yup.string().required('Stage name is required'),
       hours: yup.number().typeError('Work Hours must be a number').required('Work Hours is required'),
       
      });

      // end  yup 
      const navigate = useNavigate()
      const dispatch = useDispatch()
      const {isLoading,error, created}= useSelector((state)=>state.stages)
       const onSubmit= async data => {
        dispatch(AddStage(data));
    }
    return (
        <div className='opacity'>
            <div className='assign_employ add-new-stage'>
                <div className='add'>ADD NEW STAGE</div>
             { isLoading ? <img className='loading-img' src="/images/giphy.gif" />:  
                <Formik
             initialValues={{
                work_order_id: workorderId,
                workshop_id:cookies.get("workshop").id,
                name: '',
                hours: '',
                
               
               
              }}
              validationSchema={schema}
              onSubmit ={(values)=>{
                onSubmit(values);
                navigate(`/workshop/owner/singleworkorder/${workorderId}/afterStage`)
             
              }}
             
            
           >
            {({errors, touched,  handleSubmit})=> (
            <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}  autoComplete="off">
           
                <div className={` ${errors.name  && touched.name &&'input-error'}`} >
                   
                    <Field type='text' placeholder='STAGE NAME'  name="name" autoComplete="off"   />
                       { touched.name && <div className='mark'>{errors.name ?  <span className='validation-error'><AiOutlineClose /></span>: <FcCheckmark />}</div>}
                       {errors.name && touched.name && <><div className='error-text'> {errors.name}</div></> }
                    
                </div>
                
                    <div className={`${errors.hours  && touched.hours &&'input-error'}`}>
                     
                        <Field type='text' placeholder='WORK HOURS'  name="hours" autoComplete="off"/>
                        {touched.hours && <div className='mark'>{errors.hours  ? <span className='validation-error'><AiOutlineClose /></span>: <FcCheckmark />}</div>} 
                        {errors.hours && touched.hours && <div className='error-text'> {errors.hours}</div> }
                        </div>
                        <div className='buttons'>
                        < Link to={`/workshop/owner/singleworkorder/${workorderId}`}> <button className='gray'>Cancel</button>  </Link>
                          <input className='submit'  type='submit'  value='Assign' /> 
                        </div>
                       
           </form>
            )}

           </Formik>}
              

            </div>
        
        </div>
       
    )
}

export default AddNewStage