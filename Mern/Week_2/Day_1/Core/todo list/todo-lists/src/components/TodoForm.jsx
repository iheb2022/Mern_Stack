import React, { useState } from 'react'

const TodoForm = ({add}) => {
    const [todo,setTodo]=useState({content:"",status:false})
    const SubmitHandler=(e)=>{
        e.preventDefault()
        if (todo.content.length>2){
            add(todo)
        }
        setTodo({content:"",status:false})
    }
    return (
        <div>
            <form onSubmit={SubmitHandler}>
                <div className='col-3'>
                    <input className='form-control' type="text" onChange={(e)=>setTodo({...todo,content:e.target.value})} value={todo.content}/> <br />
                    <button className='btn btn-outline-primary'>Add</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm