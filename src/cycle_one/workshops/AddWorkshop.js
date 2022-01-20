import React from 'react'
import { FcCheckmark } from 'react-icons/fc'
import { MdPhotoCamera } from 'react-icons/md'
const AddWorkshop = () => {
    return (
        <div className='workshop_add'>
            <div className='header'>
              ADD NEW WORKSHOP
            </div>
            <div className='body'>
                 <div className='change_img'  onClick={()=> document.getElementById("my_file").click()}>
                    <img 
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvUsGOsBcDS6hxduYR8UpkewPhZmi6tHecxjGNYJRCo1kkClxTeDYsSJ2gXfTggvXZU8U&usqp=CAU'
                    />
                    <input type="file" id="my_file" style={{display: "none"}} />
                    <span> <MdPhotoCamera /> </span>
                 </div>
                 <form >
                        <div className='main_input'>
                            <label>Workshop Name</label>
                            <input type='text' placeholder='Jessica Hayes'/>
                            <div className='mark'><FcCheckmark /></div> 
                        </div>
                        <div className='main_input'>
                            <label>Workshop Address</label>
                            <input type='text' placeholder='Jessica Hayes'/>
                            <div className='mark'><FcCheckmark /></div> 
                        </div>
                        <input className='submit_button' type='submit' value='SAVE DETAILS' />
                     </form>

            
            </div>     

            
        </div>
    )
}

export default AddWorkshop
