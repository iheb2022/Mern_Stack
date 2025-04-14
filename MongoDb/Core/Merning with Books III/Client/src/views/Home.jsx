import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
const Home = () => {
    const [Books, setBooks] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/api/Book")
            .then((res)=>{
                console.log(res.data)
                setBooks(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])
    return (
        
        <div>
            <NavBar title={"Cataloge"}/>
            <div className="container pt-5">
            <table className='table table-stirped table-bordered'>
                <thead>
                    <tr className='table-active'>
                        <td>Title</td>
                        <td>Author</td>
                        <td>Page count</td>
                        <td>Available</td>
                        <td>Book Page</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Books.map((book)=>(
                            <tr key={book._id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.pages}</td>
                                <td className='d-flex gap-2'>
                                    {book.isAvailable?<p>Yes</p>:<p>No</p>} | <Link to={"/update/"+book._id}><button className='btn btn-link'> Edit</button></Link>
                                </td>
                                <td><Link to={"/books/"+book._id+"/details"}><button className='btn btn-success'>Book Details</button></Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Home