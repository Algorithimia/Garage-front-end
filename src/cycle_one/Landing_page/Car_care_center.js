import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Car_care_center =()=>{
    return(
        <>
         <div className='car_care_center'>
          <Row>
            <Col sm={12} lg={6}>
               <div className="car_center_info">
                   <span>Get Your Car Care Center</span>
                   <p>Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut, dignissim elementum mauris. Sed dapibus auctor scelerisque. Aenean at leo tellus. Morbi eu leo sapien. Fusce libero dolor, venenatis eget enim sed, commodo efficitur arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce justo ipsum, placerat vitae erat ac, porttitor tincidunt lacus. In fermentum nulla nec fermentum tempus.</p>
                    <div className='buttons'>
                        <Link to='/sign_in_choose'> <button  className='dark_button'>Signup</button></Link>
                      
                       <button  className='light_button right'>Learn More</button>
                    </div>
                   
               </div>
            </Col>
            <Col sm={12} lg={6}>
                <div className='mask_group'> </div>
           
            </Col>
          </Row>

             
        
         </div>
        </>
    )
}
export default   Car_care_center