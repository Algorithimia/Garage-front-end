import React,{useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Buisness from './components/Buisness'
import { useDispatch,useSelector } from 'react-redux'
 import {getAllbusiness} from '../../store/store slices/businessesSlice'
const Businesses = () => {
    const {bussinesses, isLoading, error} = useSelector((state)=>state.businesses)
    const dispatch = useDispatch()
    const [search , setSearch] = useState('')
    useEffect(() =>{
        dispatch(getAllbusiness());
      },[dispatch])
      const onChange=e=>{setSearch(e.target.value.toLowerCase())}
      const searchResult = bussinesses.filter((el) => {
   
        if (search === '') {
            return el
        }
      
        else {        
            return ( el.title.toLowerCase().includes(search) )           
        }
    })
      let renderedBusinesses = searchResult.map(business => 
        
       { return  <Col lg={4} md={6}  key={business.id}>
                    <Buisness business={business}/>
                  </Col>
        
        }
        )

    return (
        <>
           {isLoading ? <img className='loading-img' src="/images/giphy.gif" /> :

                    <div className='businesses'>
                    
                        <div className='header'>
                        All Businesses
                        <div className='right'>
                            <input placeholder='Search Businesses' value={search} onChange={e=>onChange(e)}/>
                            <span><FaSearch /></span>

                        </div>
                        </div>
                        <div className='gray_row'>  
                            <Link to='/workshop/owner/businesses'>
                            <div className='left active'>
                                All Businesses
                            </div>
                            </Link>
                            <Link to='/workshop/owner/dealtwithbusinesses'>
                            <div className='center'>
                                Dealt with
                            </div>
                            </Link>
                            <Link to='/workshop/owner/favbusinesses'>
                            <div className='right'>
                                favourite
                            </div>
                            </Link>
                            
                            

                        </div>

                        <div className='body'>
                            <Row>
                                {renderedBusinesses}
                            </Row>
            

                        </div>
                    </div>
                    }
        </>
    )
}

export default Businesses
