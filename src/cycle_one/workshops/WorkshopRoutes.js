import { Col, Row } from 'react-bootstrap'
import { Route, Routes} from 'react-router-dom'

import SideBar from './SideBar'
import GrageOwnerDashbord from './GrageOwnerDashbord'
import AllWorkOrders from './AllWorkOrders'
import CreateWorkOrder from './CreateWorkOrder'
import SelectSparePartsFromInventory from './SelectSparePartsFromInventry'
import BuySpareParts from './BuySpareParts'
import Purchase from './Purchase'
import Pagination from './Pagination'
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
                    <Route path="/owner/selectinventory" element={<SelectSparePartsFromInventory />} exact  />
                    <Route path="/owner/buyspareparts" element={<BuySpareParts />} exact  />
                    <Route path="/owner/purchase" element={<Purchase />} exact  />
                    <Route path="/owner/paginatin" element={<Pagination />} exact  />


                    
                    
                </Routes>
                </Col>
            </Row>

            
        </div>
    )
}

export default WorkshopRoutes
