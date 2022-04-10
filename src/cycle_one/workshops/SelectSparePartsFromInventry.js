import { Col, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import {FaSearch} from'react-icons/fa'


import SparePartBuy from "./SparePartBuy"
import SelectedSparePart from "./SelectedSpareParts"
import { useDispatch,useSelector } from 'react-redux'
import { getSpareParts} from '../../store/store slices/InventorySice'
import {React , useEffect, useState } from "react"
import SparePartsInventory from "./SparePartsInventory" 
import {AddSparePart} from "../../store/store slices/workOrderSlices/sparePartForOrder"
import Cookies from "universal-cookie";
const SelectSparePartsFromInventry = () => {
    const cookies = new Cookies();
    let { id }  = useParams();
    const dispatch = useDispatch()
    const {spareParts , isLoading, error}= useSelector((state)=>state.inventory)
    const [showAlert, setShowAlert]= useState(true)
    const [selectedSpareParts,setSelectedSpareParts]=useState([])
    useEffect(() =>{
        dispatch(getSpareParts());
        const timeId = setTimeout(() => {
            // After 3 seconds set the showAlert value to false
            setShowAlert(false)
           
          }, 5000)
      
          return () => {
            clearTimeout(timeId)
          }
      
       
    
      },[dispatch])
      console.log(selectedSpareParts)
      // add spare part to selected list 
      const addToSelectedList=(sparepart,quantity)=>{
     
        let  selectedSparePartExistIndex = selectedSpareParts.findIndex(part => part.id == sparepart.id)
        let  oldQuantity =selectedSparePartExistIndex !== -1 && selectedSpareParts.find(part => part.id == sparepart.id).quantity
       
        console.log('old quantity',oldQuantity)
        console.log(sparepart)
        if (selectedSparePartExistIndex !== -1) 
        {
             const newArray = [...selectedSpareParts];
           
           
          newArray[selectedSparePartExistIndex] =  {id: sparepart.id, title:sparepart.title, quantity:parseInt(quantity)+parseInt(oldQuantity)};
           dispatch(AddSparePart({spare_part_id: sparepart.id, title:sparepart.title,work_order_id:id,workshop_id:cookies.get("workshop").id, quantity:parseInt(quantity) }));
            setSelectedSpareParts(newArray)
            
        
         
        }
        else{   
           
        setSelectedSpareParts([...selectedSpareParts,{ id: sparepart.id, title:sparepart.title, quantity:quantity}])
        dispatch(AddSparePart({spare_part_id: sparepart.id, title:sparepart.title,work_order_id:id,workshop_id:cookies.get("workshop").id, quantity:parseInt(quantity) }));
        }

      }
      // remove spare part from selected list 
      let removeSelected=(sparepart)=>{
        setSelectedSpareParts(selectedSpareParts.filter((part)=>part.id != sparepart.id))
    }
    let renderedSpareParts = isLoading ? <img className="loading" src="/images/giphy.gif" /> : spareParts.map(sparePart=>  <SparePartsInventory key={sparePart.id} sparepart={sparePart} setSelectedSpareParts={addToSelectedList} selectedSpareParts={selectedSpareParts}/>)
    let renderedSelectedSpareParts = selectedSpareParts.map((part)=><SelectedSparePart  part={part} removeSelected={removeSelected} />)
    return (
        <div className="select_spareparts">
            <div className="first_row">
            <Row>
                <Col><span className="title">INVENTORT SPARE PARTS</span></Col>
                <Col>
                    <div className='search_div'>
                        <input className="search"  type='search'  placeholder="Search Spare Parts"/>
                        <div className='icon'><FaSearch /></div>
                    </div>
                </Col>
            </Row>
            </div>
            <div className="tables-row">
             <Row>
               
                <Col md={12} lg={6}>
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
                       {renderedSpareParts}
                        </table>
                    </div>
                </Col>
                <Col md={12} lg={6}>
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
                        {renderedSelectedSpareParts}
                        </table>
                    </div>
                </Col>
             </Row>
            </div>
            <div className="end_row">
            <Row>
               
                <Col>
                 <Link to='/workshop/owner/buyspareparts'>BUY FROM ANOTHER BUSINESS</Link>
                </Col>
                <Col>
                 <Link to=''><button>Add Spare Parts</button></Link>
                </Col>
                

            </Row>
            </div>
        
        </div>
    )
}

export default SelectSparePartsFromInventry
