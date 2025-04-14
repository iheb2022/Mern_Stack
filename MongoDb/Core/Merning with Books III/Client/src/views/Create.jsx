import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../components/NavBar'
const Create = () => {
    const nav=useNavigate()
    const [title,setTitle]=useState("")
    const [author,setAuthor]=useState("")
    const [pages,setPages]=useState(1)
    const [isAvailable,setIsAvailable]=useState("")
    const [errorHandler,setErrorHandler]=useState({})
    const submitHandler=(e)=>{
        console.log(isAvailable)
        e.preventDefault()
        const newBook={title,author,pages,isAvailable}
        axios.post("http://localhost:5000/api/Book/",newBook)
            .then(res => {
                console.log(res);
                console.log(res.data);
                nav("/");
            })
            .catch((err) => {
				console.log(err);
                setErrorHandler(err.response.data.errors)
			});
    }
    
    return (
    <div>
        <NavBar title={"Add Book"} />
        <div className="container">
        <form onSubmit={submitHandler} style={{display:"flex", flexDirection:"column",alignItems:"center",paddingTop:30}}>
            <div className="col-3">
            <div className='mb-3 d-flex flex-column gap-2'>
            <label>Title</label>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            {errorHandler.title && <p className='alert alert-warning'>{errorHandler.title.message}</p>}
            </div>
            <div className="mb-3 d-flex flex-column gap-2">
            <label>Author Name</label>
            <input type="text" onChange={(e)=>setAuthor(e.target.value)} value={author}/>
            {errorHandler.author && <p className='alert alert-warning'>{errorHandler.author.message}</p>}
            </div>
            <div className="mb-3 d-flex flex-column gap-2 col-4">
            <label>Page Count</label>
            <input type="Number" onChange={(e)=>setPages(e.target.value)} value={pages} />
            </div>
            {errorHandler.pages && <p className='alert alert-warning'>{errorHandler.pages.message}</p>}
            <div className='mb-3 d-flex gap-2'>
            <label>Is it available?</label>
            <input checked={isAvailable} type="checkbox" onChange={(e)=>setIsAvailable(e.target.checked)} />
            </div>
            <div className="d-flex justify-content-center">
            <button className='btn btn-primary'>Add Book!</button>
            </div>
            </div>
        </form>
        </div>
    </div>
    )
}

export default Create