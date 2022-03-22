import React from 'react'
import { Col, Row } from 'react-bootstrap'
 import {FaCar, FaUsers, FaTools} from 'react-icons/fa'
import { MdDeleteSweep } from 'react-icons/md'
 import {RiFileCopy2Fill, RiEditLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import ShowMoreText from 'react-show-more-text'
const  SingleCar = () => {
    return (
        <div >
            
            <span className='name'>
            CAR NAME
            </span>
            <div className='right'>
                <span className='gray' ><MdDeleteSweep /> </span>
                <Link to='/workshop/owner/vheiclesview'><span className='blue'><RiEditLine /></span> </Link>
            
            </div>
            <div className='main_info'>
                <div className='line'>
                    <span><FaCar /></span> &nbsp;  Car &nbsp;  BMW &nbsp;  A7 &nbsp; Fuel 6%
                </div>
               
            </div>
            <div className='more_info'>
            Engine Number : 2 | Chassis <br/> 
            Number : 125  <br/>
            0 KM Driven <br/>
            012 158 123 - example@gmail.com<br/>
             ADDRESS : Egypt ,Cairo <br/>
             TAX NUMBER : 123

            </div>
        
        
                 <div className='note'><Row> <Col sm={3}><span>Note</span> </Col> <Col sm={9}> <div className='text'>
                              <ShowMoreText
                                      /* Default options */
                                      lines={2}
                                      more="Show more"
                                      less="Show less"
                                      className="content-css"
                                      anchorClass="my-anchor-css-class"
                                      // onClick={this.executeOnClick}
                                      expanded={false}
                                      width={280}
                                      truncatedEndingComponent={"... "}
                                  >
                                      Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien, vel finibus erat felis sed neque. Etiam aliquet neque sagittis erat tincidunt aliquam. Vestibulum at neque hendrerit, mollis dolor at, blandit justo. Integer ac interdum purus. In placerat lorem non quam pulvinar molestie ac eget lacus. Proin mollis lobortis porttitor. Nam in fringilla felis. Nunc non magna maximus, pulvinar justo ut, pulvinar lacus. Vivamus semper ex vel felis lobortis, nec feugiat erat pulvinar. Cras eu sem sed tellus sodales pellentesque nec id libero. Vestibulum tincidunt, ipsum vitae finibus tempus, orci mi iaculis lacus, id faucibus erat leo ac nisl. Nullam vel pulvinar nisi, ac fringilla urna.
                               </ShowMoreText> 
                     </div></Col></Row> </div>
                     <Link to="/">
                   <span className='text'>WORK ORDERS HISTORY</span>  
                     </Link>
                     <br/>
                     <button> <span> <FaTools /> </span>  Make Work Order</button>

         

          
        </div>
    )
}

export default  SingleCar

