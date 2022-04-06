import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import {FaSearch} from'react-icons/fa'



import SparePartInventory from "./SparePartsInventory"
import SelectedSparePart from "./SelectedSpareParts"
import SparePartBuy from "./SparePartBuy"
const BuySpareParts = ({businessName, businessType}) => {
    let  part={
        "id": 7,
        "title": "new",
        "description": "Des ..",
        "type": {
            "id": 1,
            "title": "we"
        },
        "unit_price": 5,
        "quantity": 9,
        "status": "Active",
        "is_available": true,
        "is_purchase": false,
        "created_at": "2022-03-29 09:47:41",
        "updated_at": "2022-03-29 09:54:28",
        "galleries": [
            {
                "id": 11,
                "priority": 212,
                "image": "/media/spare_parts/1027207_9d4bCPD.png"
            },
            {
                "id": 13,
                "priority": 23,
                "image": "/media/spare_parts/ikea1_BkdDUCj.png"
            },
            {
                "id": 12,
                "priority": 0,
                "image": "/media/spare_parts/ss.png"
            },
            {
                "id": 14,
                "priority": 0,
                "image": "/media/spare_parts/ss_vCdfCBj.png"
            }
        ]
    }
    return (
        <div className="select_spareparts buy">
              <div className="first_row">
                <span className="title">BUY SPARE PARTS</span>
              </div>
              <div className="second-row">
                <Row>
                    <Col sm={6}md={8}>
                        <div className='search_div'>
                           <Link to='/workshop/owner/sparepartsgrage'> <input className="search"  type='search'  placeholder="Search Spare Parts"value ={businessName && businessName +'     '+ businessType}/></Link>
                            <div className='icon'><FaSearch /></div>
                        </div>
                    </Col>
                    <Col sm={6}md={4}>
                     <Link to='/workshop/owner/purchase/visa'>
                     <button className="button">PURCHASE ORDER</button> 
                     </Link>   
                    </Col>
                </Row>     
              </div>
              <div className="tables-row">
             <Row>
               
                <Col sm={12} md={6}>
                    <div className='table_div'>
                        <div className="title">SPARE PARTS LIST</div>
                        <table>
                        <thead>
                            <tr>
                                <th> PART NAME</th>
                                <th > QUAN-<br/> TITY</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <SparePartBuy />
                        <SparePartBuy />
                        <SparePartBuy />
                        <SparePartBuy />
                        </table>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                <div className='table_div'>
                        <div className="title">SELECTED PARTS</div>
                        <table>
                        <thead>
                            <tr>
                                <th> PART NAME</th>
                                <th> QUAN-<br/> TITY</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <SelectedSparePart part={part}/>
                        <SelectedSparePart part={part} />
                        <SelectedSparePart part={part} />
                       
                        <tr className="spare_part">
                            <th className="total" >TOTAL  </th>
                            <th className="price">156 $ </th>
                        </tr>
                        </table>
                    </div>
                </Col>
             </Row>
            </div>
              

               

        </div>
    )
}

export default BuySpareParts
