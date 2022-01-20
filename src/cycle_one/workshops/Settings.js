import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import {MdPhotoCamera} from 'react-icons/md'
const Settings = () => {
    return (
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
           <form>
           <div className='workshop_info'>
               <Row>
                   <Col sm={12} lg={4}>
                      <div className='left'>
                          <div>WORKSHOP INFO</div>
                          <div className='change_img'  onClick={()=> document.getElementById("my_file").click()}>
                                <img 
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvUsGOsBcDS6hxduYR8UpkewPhZmi6tHecxjGNYJRCo1kkClxTeDYsSJ2gXfTggvXZU8U&usqp=CAU'
                                />
                               <span> <MdPhotoCamera /> </span>
                          </div>
                          <input type="file" id="my_file" style={{display: "none"}} />
                      </div>
                   </Col>
                   <Col sm={12} lg={8}>
                     <div className='right'>
                        <div className='main_input'>
                            <label>Workshop Name</label>
                            <input type='text' placeholder='Jessica Hayes'/>
                        </div>
                        <div className='main_input'>
                            <label>Workshop Address</label>
                            <input type='text' placeholder='Jessica Hayes'/>
                        </div>
                     </div>
                   </Col>
               </Row>

           </div>
           <div className='workshop_info'>
               <Row>
                   <Col sm={12} lg={4}>
                      <div className='left'>
                          <div>OWNER INFO</div>
                          
                      </div>
                   </Col>
                   <Col sm={12} lg={8}>
                     <div className='right'>
                        <div className='main_input'>
                            <label>Owner Name</label>
                            <input type='text' placeholder='Jessica Hayes'/>
                        </div>
                        <div className='main_input'>
                            <label>Phone Number</label>
                            <input type='tel' placeholder='+1 (999) 278 589 2'/>
                        </div>
                        <div className='main_input'>
                            <label>Email</label>
                            <input type='tel' placeholder='handel@example.com'/>
                        </div>
                         <Link to='/workshop/owner/settings'><span>RESET PASSWORD</span></Link>
                         
                         
                     </div>
                     <input className='btn' type='submit' value='SAVE DETAILS' />
                   </Col>
               </Row>
              

           </div>
           </form>
        </div>
    )
}

export default Settings
