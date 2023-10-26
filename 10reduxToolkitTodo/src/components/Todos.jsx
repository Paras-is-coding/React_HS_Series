import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {removeTodo} from '../redux/features/todo/todoSlice'

export default function Todos() {
const todos = useSelector(state => state.todos)
const dispatch = useDispatch()
  return (
    <div className=' text-center p-4'>
    <div className=' text-center p-4 text-lg'>Todos</div>
    <ul className='w-full flex items-center flex-col gap-3'>
    {
    todos.map((todo)=>{
      return(
        <li
         key={todo.id}
         className=' w-1/2 border p-4 flex justify-between'
         >
            <span>{todo.text}</span>
            <button
            className='border px-4 bg-red-800 rounded-lg'
            onClick={()=>{dispatch(removeTodo(todo.id))}}
            >X</button>
        </li>
        
      )
    })}
    </ul>
    </div>
  )
}
