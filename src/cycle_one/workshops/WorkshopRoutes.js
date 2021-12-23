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
import SingleWorkOrder from './SingleWorkOrder'
import ViewCustomer from './ViewCustomer'
import CreateOrEditeCustomer from './CreateOrEditeCustomer'
import AddVehicle from './AddVehicle'
import ViewVehicle from './ViewVehicle'
import Employes from './Employes'
import AddNewEmploy from './AddNewEmploy'
import EpmloysAssignedWorkOrder from './EpmloysAssignedWorkOrder'
import AllOverDue from './AllOverDue'
import SentPayment from './SentPayment'
import FilterSentPayment from './FilterSentPayment'
import ViewSingleItemInventory from './ViewSingleItemInventory'
import Vehicles2 from './Vehicles2'
import Addvehicle2 from './Addvehicle2'
import AddSparePart from './AddSparePart'
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
                    <Route path="/owner/purchase/*" element={<Purchase />} exact  />
                    <Route path="/owner/paginatin" element={<Pagination />} exact  />
                    <Route path="/owner/singleworkorder" element={<SingleWorkOrder />} exact  />
                    <Route path="/owner/viewcustomer" element={<ViewCustomer />} exact  />
                    <Route path="/owner/createoreditecustomer" element={<CreateOrEditeCustomer />} exact  />
                    <Route path="/owner/addvehicle" element={<AddVehicle />} exact  />
                    <Route path="/owner/viewvehicle" element={<ViewVehicle />} exact  />
                    <Route path="/owner/employes" element={<Employes />} exact  />
                    <Route path="/owner/addemploy" element={<AddNewEmploy />} exact  />
                    <Route path="/owner/employassignworkorder" element={<EpmloysAssignedWorkOrder />} exact  />
                    <Route path="/owner/alloverdue" element={<AllOverDue />} exact  />
                    <Route path="/owner/alloverduesentpayment" element={<SentPayment />} exact  />
                    <Route path="/owner/filtersentpayment" element={<FilterSentPayment />} exact  />
                    <Route path="/owner/viewsingleiteminventory" element={<ViewSingleItemInventory />} exact  />
                    <Route path="/owner/vehicle2" element={<Vehicles2 />} exact  />
                    <Route path="/owner/addvehicle2" element={<Addvehicle2 />} exact  />
                    <Route path="/owner/addsparepart" element={<AddSparePart />} exact  />
                    



                    
                    
                </Routes>
                </Col>
            </Row>

            
        </div>
    )
}

export default WorkshopRoutes
