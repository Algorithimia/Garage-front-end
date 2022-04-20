import React , {useEffect, useState} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import {GoTriangleDown,GoTriangleUp} from "react-icons/go"
import {AiFillPlusCircle} from "react-icons/ai"
import {FaSearch} from 'react-icons/fa'
import { useDispatch,useSelector } from 'react-redux'
import {getAssets, editeAsset,clearstate,getAssettypes} from '../../../store/store slices/assetSlice'
import AssetsRow from './AssetsRow'

const EmployAssets = () => {
    const dispatch = useDispatch()
    const {assets, isLoading,created, error} = useSelector((state)=>state.assets)
    const [showAlert, setShowAlert]= useState(true)
    const [entries, setEntries] = useState(0);
    const [date, setDate] =  useState(0);
    const [search , setSearch] = useState('')
   
    const upEntries=()=>{
       setEntries(parseInt(entries)+1)
    }
    const downEntries=()=>{
       setEntries(parseInt(entries)-1)
    }
    const upDate=()=>{
        setDate(parseInt(date)+1)

      
     }
     const downDate=()=>{
        setDate(parseInt(date)-1)
      
     }
     useEffect(() =>{
        dispatch(getAssets());
        const timeId = setTimeout(() => {
            // After 3 seconds set the showAlert value to false
            setShowAlert(false)
             dispatch(clearstate())
          }, 5000)
      
          return () => {
            clearTimeout(timeId)
          }
     
       
    
      },[dispatch])
      const onChange=e=>{setSearch(e.target.value.toLowerCase())}
     
     

      //search 
      const searchResult = assets.filter((el) => {
   
        if (search === '') {
            return el
        }
      
        else {        
            return ( el.title.toLowerCase().includes(search) )           
        }
    })
      const renderedAssets = searchResult.map(asset =>{
          return    <AssetsRow asset={asset}  key={asset.id}/>
      })
    console.log(searchResult)
      
    return (
        <>
            {isLoading ? <img className='loading-img' src="/images/giphy.gif" /> :
            <div className='assets'>
                <div className='header'>
                    ASSIGNED ASSETS
                

                </div>
                <div className='second_row'>
            <div className='inline-block input_block'>
                        <span>
                        Show Entries
                        </span>
                        <input type='number'  onChange={(e)=> setEntries(e.target.value)} value={entries}/>
                        <div className="change_number">
                            <div className='change' onClick={upEntries}>   
                            <GoTriangleUp />
                            </div>
                            <div className="up change" onClick={downEntries}>
                            <GoTriangleDown />
                            </div>
                        </div>
                        
                        </div>
                        
                        <div className='inline-block input_block'>
                            <span>
                            Date
                            </span>
                            <input type='number'  value={date} onChange={(e)=> setDate(e.target.value)}/>
                            <div className="change_number">
                                <div className='change' onClick={upDate}>
                                <GoTriangleUp />
                                </div>
                                <div className="up change" onClick={downDate}>
                                <GoTriangleDown />
                                </div>
                            </div>
                            </div>
                        
                        <div className='search'>
                            <input placeholder='Search Assets'  onChange={(e)=>onChange(e)}/>
                            <span> <FaSearch /> </span>

                        </div>

                            
            </div>
            <table>
                    <thead>
                        <tr>
                            <th> ASSET  <br/> TYPE </th>
                            <th> ASSET <br/> NUMBER</th>
                            <th> ASSET <br/> NAME</th>
                            <th>DATE </th>
                            <th> </th>
                            <th> </th>
                            <th> </th>
                            <th> </th>
                            <th> </th>
                            <th>  </th>
                        </tr>

                        
                    </thead>
                   {renderedAssets}
                    
            </table>     
            
            </div>}
        </>
    )
}

export default EmployAssets