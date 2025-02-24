import React from 'react'

const DisplayTodo = ({todos,setTodos}) => {
    const deletetodo=(index)=>{
        const filterTodos=todos.filter((todos,i)=>i!=index)
        setTodos(filterTodos)
    }
    const updateTodo=(index)=>{
        const updated=[...todos]
        updated[index].status= !todos[index].status
        setTodos(updated)
    }
    return (
        <div>
            {todos.map((todos,i)=>
                <div key={i} className='container d-flex gap-2 align-items-center'>
                    <p style={{textDecoration:todos.status?"line-through":"None"}}>{todos.content}</p>
                    <input type='checkbox' onChange={()=> updateTodo(i)} checked={todos.status} />  
                    <button className='btn btn-danger' onClick={()=>deletetodo(i)}>X</button>
                </div>
                
            )}
        </div>
    )
}

export default DisplayTodo