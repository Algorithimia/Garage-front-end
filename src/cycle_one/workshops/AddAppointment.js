import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {addAppointment} from '../../store/store slices/appointmentSlice'
import {getcustommers} from '../../store/store slices/workshopCustommerSlice'
import Cookies from "universal-cookie";
const cookies = new Cookies();
const AddAppointment = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { error,created} = useSelector((state)=>state.appointment)
    const {custommers, isLoading}= useSelector((state)=>state.customers)
    const [showAlert, setShowAlert]= useState(true)
    //add data 
    const [formData, setFormData] = useState({
        workshop_id:cookies.get("workshop").id,
        customer_id:'',
        title: '',
        start_at_date:'',
        start_at_time:'',
        note:""

      
     

    })
    const {workshop_id,customer_id, title,start_at_date, start_at_time , note} =formData

 
    useEffect(() =>{
        dispatch(getcustommers());
      
     
       
    
      },[dispatch])
    let renderedCustommers = custommers.map(c=><option value={c.id}> {c.name}</option>)
       //input change 
       const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit= async e => {
        e.preventDefault()
           e.preventDefault()
           dispatch( addAppointment(formData))
           setShowAlert(true)
           const timeId = setTimeout(() => {
            // After 3 seconds set the showAlert value to false
            setShowAlert(false)
          
          }, 5000)
      
          return () => {
            clearTimeout(timeId)
          }

           
      
    }
    console.log(formData)
    return (
        <div className='add_appointment'>
             {showAlert && error && <div className='msg-error'>{ Object.values(error)}</div> }<br/>
            <div className='header'>
                 ADD APPOINTMENTS

            </div>
            <div className='body'>
            <form onSubmit={e=>onSubmit(e)} >
                <div className='input_row'>
                 
                    <div className='input_div date'>
                        <label>APPOINTMENT DATE</label>
                        <br/>
                        <input  type='date' name='start_at_date' value={start_at_date} onChange={e=>onChange(e)} required/>
                    </div>
                    <div className='input_div time'>
                        <label>APPOINTMENT TIME</label>
                        <br/>
                        <input type='time'  name='start_at_time' value={start_at_time} onChange={e=>onChange(e)} required/>
                    </div>
                </div>
                <div className='input_div'>
                        <label>APPOINTMENT TITLE</label>
                        <br/>
                        <input  placeholder='APPOINTMENT TITLE' name='title' value={title} onChange={e=>onChange(e)} required/>
                    </div>
                    <div className='input_div'>
                        <label>VEHICLE OWNER</label>
                        <br/>
                      
                        <select   name='customer_id' value={customer_id} onChange={e=>onChange(e)} required>
                        <option hidden >Customer Name</option>
                        {renderedCustommers}
                    </select>
                    </div>
                  
                    <div className='input_div'>
                        <label>APPOINTMENT NOTE</label>
                        <br/>
                        <textarea  placeholder='APPOINTMENT NOTE' name='note' value={note} onChange={e=>onChange(e)}/>
                    </div>
                    <div className='butns'>
                        <Link to='/workshop/owner/calender'><button className='gray'>RESET</button></Link>
                        <input type='submit'className='blue' value='Add' />

                    </div>
                    </form>

            </div>
            {created && navigate('/workshop/owner/calender')}
        </div>
    )
}

export default AddAppointment
