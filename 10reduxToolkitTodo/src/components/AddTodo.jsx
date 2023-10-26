import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import{addTodo} from '../redux/features/todo/todoSlice'

export default function AddTodo() {
    const [input,setInput] = useState('')

    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput("")
    }
  return (
    <div  className=' p-4 text-center'>
        <form onSubmit={handleSubmit}>
            <input
             type='text' 
             value={input}
             onChange={(e)=>setInput(e.target.value)}
             className=' p-3 border outline-none text-black'
             placeholder='add todo here'
        
             />

             <button
              type='submit'
              className=' p-3 text-white bg-green-800'
              >ADD</button>
        </form>
    </div>
  )
}
