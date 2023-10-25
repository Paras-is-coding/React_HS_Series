import React, { useEffect, useState } from 'react'
import {TodoProvider} from './context/index'

export default function App() {
  const [todos,setTodos] = useState([])

  // we dont have todo now we'll have it on TodoForm component
  const addTodo = (todo)=>{
    setTodos((prev)=> [...prev,{id:Date.now(),...todo}])
  }

  const updateTodo = (id, todo)=>{
    // if todo with id found in todos update with new todo else put it as it is
    setTodos((prev)=>prev.map((individualTodo)=> (individualTodo.id === id)? todo:individualTodo ))
  }

  const deleteTodo = (id)=>{
    // make new array excluding todo.id === id
    setTodos((prev)=> prev.filter((individualTodo) => individualTodo.id !== id))
  }

  const toggleComplete = (id)=>{
    // find todo with id and overwrite & reverse value of completed
    setTodos((prev)=> prev.map((individualTodo)=> (individualTodo.id === id)?{...individualTodo,completed:!individualTodo.completed}:individualTodo))
  }


  useEffect(()=>{
    const todos = localStorage.getItem('todos');
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])


  return (
        <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
           <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
        </TodoProvider>
          )
}
