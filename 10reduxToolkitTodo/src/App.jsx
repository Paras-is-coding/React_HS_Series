import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

export default function App() {
  return (<main className=' min-h-screen bg-blue-950 text-white'>
            <AddTodo/>
            <Todos/>
          </main>
   
  )
}
