import { Col, Row } from 'react-bootstrap'
import { Route, Routes} from 'react-router-dom'

import SideBar from './SideBar'
import GrageOwnerDashbord from './GrageOwnerDashbord'

const WorkshopRoutes = () => {
    return (
        <div>
            <Row>
                <Col sm={3}>
                    <SideBar />
                </Col>
                <Col sm={9}>
                <Routes>
                    <Route path="/owner/dashbord" element={<GrageOwnerDashbord />} exact  />
                </Routes>
                </Col>
            </Row>

            
        </div>
    )
}

export default WorkshopRoutes
