import React,{useEffect, useState} from 'react'
import {getaddress} from '../../store/store slices/addreseSlice'
import { useDispatch,useSelector } from 'react-redux'
import { FcCheckmark } from 'react-icons/fc'
import { MdPhotoCamera } from 'react-icons/md'
import{creatWorkshop} from '../../store/store slices/workshopSlice'
import {useNavigate} from 'react-router-dom'
const AddWorkshop = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {addressList}= useSelector((state)=>state.address)
    const {created , error}= useSelector((state)=>state.workshop)
    const [showAlert, setShowAlert]= useState(true)
    const [formData, setFormData] = useState({
        title:'',
        area_id:'',
        country_id:'',
        image:''
  
     

    })
    const {title, area_id,country_id  }=formData
    useEffect(() =>{
        dispatch(getaddress());   
      },[dispatch])

      let  countries = addressList.map((country=> {
        return <option key={country.id} value={country.id} >{country.name}</option>
        
   }))
   let  selectedcountry =  country_id !== '' &&  addressList.find(country => country.id == country_id)
   let renderedCities = selectedcountry && selectedcountry.cities.map((city)=><option key={city.id} value={city.id} >{city.name}</option>)
   const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
   const imgChange=e=>setFormData({...formData, [e.target.name]: e.target.files[0]})
   const onSubmit= async e => {
          e.preventDefault()

          dispatch( creatWorkshop(formData))
          const timeId = setTimeout(() => {
            // After 3 seconds set the showAlert value to false
            setShowAlert(false)
           
          }, 5000)
      
          return () => {
            clearTimeout(timeId)
          }
     
   }

    return (
        <div className='workshop_add'>
            <div className='header'>
              ADD NEW WORKSHOP
            </div>
            <div className='body'>
            {showAlert && error && <div className='msg-error'>{ Object.values(error)}</div> }<br/>
                <form  onSubmit={(e)=>onSubmit(e)}> 
                 <div className='change_img'  onClick={()=> document.getElementById("my_file").click()}>
                    <img 
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvUsGOsBcDS6hxduYR8UpkewPhZmi6tHecxjGNYJRCo1kkClxTeDYsSJ2gXfTggvXZU8U&usqp=CAU'
                    />
                    <input type="file" id="my_file" style={{display: "none"}} name='image' onChange={(e)=>imgChange(e)}/>
                    <span> <MdPhotoCamera /> </span>
                 </div>
              
                        <div className='main_input'>
                            <label>Workshop Name</label>
                            <input type='text' placeholder='Jessica Hayes' name='title' onChange={(e)=>onChange(e)} required/>
                            <div className='mark'><FcCheckmark /></div> 
                        </div>
                        {/* <div className='main_input'>
                            <label>Workshop Address</label>
                            <input type='text' placeholder='Jessica Hayes'/>
                            <div className='mark'><FcCheckmark /></div> 
                        </div> */}
                        <div className='address-id main_input'>
                        <label>Country</label>
                        <select name='country_id' value={country_id} onChange={e=>onChange(e)}>
                        <option hidden >Country</option>
                            {countries}
                        </select>
                        </div>
                        <div className='address-id main_input'>
                        <label>City</label>
                                <select name='area_id' value={area_id} onChange={e=>onChange(e)}>
                                <option hidden >City</option>
                                    {renderedCities}
                                </select>
                        </div>
                        <input className='submit_button' type='submit' value='SAVE DETAILS' />

                      
                     </form>

            
            </div>    
            {created && navigate('/workshop/owner/dashbord')} 

            
        </div>
    )
}

export default AddWorkshop
