import {RiTimer2Fill} from "react-icons/ri"
import {GiSandsOfTime} from "react-icons/gi"
import {BsCheckCircleFill} from "react-icons/bs"
import {MdPayment} from "react-icons/md"
import {FaSearch} from "react-icons/fa"
import {RiCarFill} from "react-icons/ri"
import {AiFillPlusCircle} from "react-icons/ai"
import {FaUsers} from "react-icons/fa"
import {RiFileCopy2Fill} from "react-icons/ri"
import { Row,Col } from "react-bootstrap"

import BoxInfo from "./BoxInfo"
import IconBox from "./IconBox"
const GrageOwnerDashbord = () => {
    return (
        <>
        
          
            <div className="grage_owner_dashbord">
            <Row>
                  <Col sm={12}>
                  <div className="right">
                      <span>Your Free Trail Will Expire in 7 Days</span>
                      <span className="blue">ACTIVATE NOW</span>
                  </div>
                  </Col>
               
                 
                      <Col sm={9}>
                          <Row className="justify-content-md-center">
                            <Col sm={3}>
                                <BoxInfo icon={<RiTimer2Fill />} title='Created' number='120' bacGroundColor="#71A43F"/>
                            </Col>
                            <Col sm={3}>
                                <BoxInfo icon={<GiSandsOfTime />} title='In Progress' number='2' bacGroundColor="#F2A911"/>
                            </Col>
                            <Col sm={3}>
                                <BoxInfo icon={<BsCheckCircleFill />} title='Completed' number='2' bacGroundColor="#4094EB"/>
                            </Col>
                            <Col sm={3}>
                                <BoxInfo icon={<MdPayment />} title='Payment Due' number='120 $' bacGroundColor="#51459D"/>
                            </Col>
                         </Row> 
                         <Row className="secoond_row">
                             <Col sm={6}>
                                <div className="tools_image">
                               <img  src='/images/cycle one/Group 24.svg' />
                               </div> 
                             </Col>
                             <Col sm={6}>
                                 <div className="title">QUICK PROCESSES</div>
                                 <Row className="icon_row">
                                     <Col>
                                       <IconBox color='#BF054BCF' icon={<FaSearch />}/>
                                     </Col>
                                     <Col>
                                       <IconBox color='#BF054BCF' icon={  <> <AiFillPlusCircle  />
                                            <RiFileCopy2Fill/> </>}/>
                                     </Col>
                                 </Row>
                                 <Row className="icon_row">
                                     <Col>
                                       <IconBox color='#71A43F' icon={<FaSearch />}/>
                                     </Col>
                                     <Col>
                                       <IconBox color='#71A43F' icon={  <> <AiFillPlusCircle />
                                        <FaUsers /> </>}/>
                                     </Col>
                                 </Row>
                                 <Row className="icon_row">
                                     <Col>
                                       <IconBox color='#F2A911' icon={<FaSearch />}/>
                                     </Col>
                                     
                                     <Col>
                                       <IconBox color='#F2A911' icon={  <> <AiFillPlusCircle />
                                        <RiCarFill /> </>}/>
                                     </Col>
                                 </Row>
                                 <Row className="icon_row">
                                     <Col sm={6}>
                                       <IconBox color='#152F55' icon={<FaSearch />}/>
                                     </Col>
                                   
                                 </Row>


                             </Col>
                         </Row>
                      </Col>
                      <Col sm={3}></Col>
                  
                
                  </Row>
            </div>
        
        
            
        </>
    )
}

export default GrageOwnerDashbord
