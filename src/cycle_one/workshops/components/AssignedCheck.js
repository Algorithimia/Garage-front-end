import React,{useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
const AssignedCheck = ({type}) => {
  const [check,setCheck] = useState(false)
  const[show,setShow] = useState(false)
  const[tasks,setTasks] = useState({
    view:false,
    add:false,
    edite:false,
    del:false
  })
  const {view, add, edite, del}=tasks
  const onChange=e=>{
    
    setTasks({...tasks, [e.target.name]: e.target.checked})
    console.log(tasks)
  }
  return (
 
        <div className='checkbox_line'>
            <input type="checkbox"  value={type} onClick={(e)=> { setShow(e.target.checked); setCheck(e.target.checked)}} /> 
            <label > {type}</label>
            {/* show set  Tasks */}
            { check && view && <span className='view-task'>view</span>} { check && add && <span className='add'>Add</span>} {check &&edite && <span className='edite'>Edite</span>} {check && del && <span className='del'>Delete</span>}
          
            <br/> 
           { show && <div className='tasks'>
              <div className='right' onClick={()=>setShow(false)}><AiOutlineClose/></div>
              <span className='task'> 
                <input type="checkbox" name='view' onChange={onChange} checked={view} />
                <span > View </span>
              </span>
             <span className='task'> 
                <input type="checkbox" name='add' onChange={onChange} checked={add} />
                <span > Add</span>
              </span>
              <span className='task'> 
                <input type="checkbox" name='edite'   onChange={onChange}   checked={edite} />
                <span >Edite </span>
              </span>
              <span className='task'> 
                <input type="checkbox" name='del'  onChange={onChange}  checked={del} />
                <span >Delete</span>
 
              </span>
                

                

              
             </div>}
      
        
    </div>
  )
}

export default AssignedCheck