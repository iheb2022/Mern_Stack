import { useState } from 'react'
import './app.css'
import TodoForm from './components/TodoForm'
import DisplayTodo from './components/DisplayTodo'

function App() {
  const [todos,setTodos]=useState([])
  const add=(obj)=>{
    setTodos([...todos,obj])
  }
  return (
    <>
      <div className='container p-5 '>
        <TodoForm add={add} />
        <DisplayTodo todos={todos} setTodos={setTodos} />
      </div>
    </>
  )
}

export default App