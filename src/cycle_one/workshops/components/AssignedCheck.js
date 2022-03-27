import React,{useState, useEffect , useRef} from 'react'
import {AiOutlineClose} from 'react-icons/ai'

function useOutsideAlerter(ref,setShow) {
  useEffect(() =>{
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShow(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    
  }}, [ref]);
}
const AssignedCheck = ({type, viewId =1, addId=2, EditeId=3, removeId=4  }) => {
  const [check,setCheck] = useState(false)
  const[show,setShow] = useState(false)
  const[tasks,setTasks] = useState({
    view:false,
    add:false,
    edite:false,
    del:false,
    viewId: '', 
    addId:'',
    editeId: '',
    delId:''
  })
  const {view, add, edite, del }=tasks
  const onChange=e=>{
    
    setTasks({...tasks, [e.target.name]: e.target.checked , [e.target.name+'Id']: e.target.id})
    // e.target.checked &&  setTasks({...tasks,  [e.target.name+'Id']: e.target.id})
    console.log(tasks)
  
  }
  // close list when click any where
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef,setShow);
  return (
 
        <div className='checkbox_line'>
            <input type="checkbox"  value={type} onClick={(e)=> { setShow(e.target.checked); setCheck(e.target.checked)}} /> 
            <label > {type}</label>
            {/* show set  Tasks */}
            { check && view && <span className='view-task'>view</span>} { check && add && <span className='add'>Add</span>} {check &&edite && <span className='edite'>Edite</span>} {check && del && <span className='del'>Delete</span>}
          
            <br/> 
           { show && <div className='tasks'  ref={wrapperRef}>
              <div className='right' onClick={()=>setShow(false)}><AiOutlineClose/></div>
              <span className='task'> 
                <input type="checkbox" name='view' id={viewId} onChange={onChange} checked={view} />
                <span > View </span>
              </span>
             <span className='task'> 
                <input type="checkbox" name='add' id={addId} onChange={onChange} checked={add} />
                <span > Add</span>
              </span>
              <span className='task'> 
                <input type="checkbox" name='edite' id={EditeId}  onChange={onChange}   checked={edite} />
                <span >Edite </span>
              </span>
              <span className='task'> 
                <input type="checkbox" name='del'  id={removeId} onChange={onChange}  checked={del} />
                <span >Delete</span>
 
              </span>
                

                

              
             </div>}
      
        
    </div>
  )
}

export default AssignedCheck