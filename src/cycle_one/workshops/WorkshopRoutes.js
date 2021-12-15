import { Col, Row } from 'react-bootstrap'
import { Route, Routes} from 'react-router-dom'

import SideBar from './SideBar'
import GrageOwnerDashbord from './GrageOwnerDashbord'
import AllWorkOrders from './AllWorkOrders'
import CreateWorkOrder from './CreateWorkOrder'
const WorkshopRoutes = () => {
    return (
        <div className='workshop-background'>
            <Row>
                <Col sm={6} md={3}>
                    <SideBar />
                </Col>
                <Col sm={12} md={9} style={{ backgroundColor:'#F8F8F8'}}>
                <Routes>
                    <Route path="/owner/dashbord" element={<GrageOwnerDashbord />} exact  />
                    <Route path="/owner/allworkorders/*" element={<AllWorkOrders />} exact  />
                    <Route path="/owner/createworkeorder/*" element={<CreateWorkOrder />} exact  />
                    
                    
                </Routes>
                </Col>
            </Row>

            
        </div>
    )
}

export default WorkshopRoutes
