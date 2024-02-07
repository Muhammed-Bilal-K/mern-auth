import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData ,deleteData } from './reduxToolkit/TodoReducer'

function Todo() {
    const [newData, setNewData] = useState('')
    const dispatch =  useDispatch()
   const { Todo } = useSelector((state)=>{
            return state
         })   
         console.log(Todo.todo);
    return (
    <div>
        <input type="text" onChange={(e)=>{
            setNewData(e.target.value)
        }}/>

        {
            Todo.todo.map((value,index)=>(
                <p onClick={()=>{
                    dispatch(deleteData(index))
                }}>
                    {value}
                </p>
            ))
        }

        <button onClick={()=>{
            dispatch(addData(newData))
        }}>add</button>
    </div>
  )
}

export default Todo