"use client"
import React, { useState } from 'react'
// import "../styles/AllTodos.css"
const { v4: uuidv4 } = require('uuid');
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, setCurrentTodo, updateIsCompleted, updateTodo } from '@/redux/silces/todoSlices';
import UpdateModel from './UpdateModel';
import { Delete, Update } from '@/HeroIcons';
const AllTodos = () => {
    const [isOpen,setIsOpen] = useState(false);
    const {userTodos,currentTodo} = useSelector(state=>state.todos);
    const dispatch = useDispatch();

    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

    const [todo,setTodo] = useState({
        desc:"",
        isCompleted:false,
        date:formattedDate,
        id:uuidv4()
    });
    const [Alltodos,setAllTodos] = useState([]);

    const handleAdd = () => {
        
        dispatch(addTodo(todo));

        setTodo({ desc: "", isCompleted: false, id: uuidv4(),date:formattedDate}); 
    };


    const handleDelete = (id) =>{
        
        dispatch(setCurrentTodo(id));
        dispatch(deleteTodo(id))
    }   


    const handleCompleted = (todo) =>{
        dispatch(updateIsCompleted(todo))
    }
    
    const hanldeupdate = (id) =>{
        dispatch(setCurrentTodo(id));
        setIsOpen(true)
    }


  return (
    <div className='main-div'>
        <div className='todo-wrapper'>
            <input 
                type="text"  
                name='desc'
                value={todo.desc}
                placeholder='Add your todo'
                onChange={(e)=>setTodo(pre=>{
                    return{
                        ...pre,
                        desc:e.target.value
                    }
                })}
                className='input-todo'
            />
            <button className='button' disabled={!todo.desc.length > 0} onClick={handleAdd}>Add to list</button>
        </div>
        <div className='todo-container'>
            { userTodos.length>0 ?
                userTodos.map((item)=>{
                    return(
                        <div className='todo-holder'>
                            <div className='div-one'>
                                <input 
                                    type="checkbox" 
                                    checked={item.isCompleted} 
                                    onChange={()=>handleCompleted(item.id)}
                                    placeholder="add a list"
                                />
                            </div>
                            <div className='div-two'>
                                <span>{item.desc}</span>
                            </div>
                            <div className='div-three'>
                                <button className='btn' onClick={()=>hanldeupdate(item.id)}>
                                    <Update/>
                                </button>
                                <button className='btn' onClick={()=>handleDelete(item.id,item)}>
                                    <Delete/>
                                </button>
                            </div>
                        </div>
                    )
                }) :
                <h3>NO Todos Found</h3>
            }
        </div>
        {isOpen && <UpdateModel setIsOpen={setIsOpen}/>}
    </div>

  )
}

export default AllTodos


