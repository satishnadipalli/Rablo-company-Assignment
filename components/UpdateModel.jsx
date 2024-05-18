import React, { useState } from 'react'
// import "../styles/updateModal.css"
import styles from "../styles/updateModal.css"
import { useDispatch, useSelector } from 'react-redux'
import { updateTodo } from '@/redux/silces/todoSlices';

const UpdateModel = ({setIsOpen}) => {
    const {currentTodo} = useSelector(state=>state.todos);
    const [updateDesc,setUPdateDesc] = useState("");
    const dispatch = useDispatch();

    const handleUPdate = () =>{
      dispatch(updateTodo(updateDesc))
      setIsOpen(false);
    }


  return (
    <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(4, 0, 10, 0.7)', 
        zIndex: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow:"hidden"
      }}  >
      <div className='update-div'>
        <input 
            type="text" 
            value={currentTodo?.desc} 
            className="constant-input"
        />
        <input className='change-input' type="text" placeholder='change here' value={updateDesc} onChange={(event)=>{setUPdateDesc(event.target.value)}} />
        <p className='span'>created on : {currentTodo?.date}</p>
        <div className='buttons-div'>
            <button onClick={()=>setIsOpen(pre=>!pre)}>Cancel</button>
            <button onClick={handleUPdate}>Update</button>
        </div>
      </div>
    </div>
  )
}

export default UpdateModel
