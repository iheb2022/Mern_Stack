import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Search = () => {
    const nav=useNavigate()
    const [wantedlist,setWantedlist]=useState("people")
    const[id,setId]=useState(1)
    const search=(e)=>{
        e.preventDefault()
        nav("/"+wantedlist+"/"+id)
        setId(1)
        setWantedlist("people")

    }
return (
    <>
    <div className="container">
        <form onSubmit={search}>
                <label>Search For :</label>
                
                <select value={wantedlist} className='form-select' name="wanted" id="list" onChange={(e)=>{setWantedlist(e.target.value)}}>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                    <option value="starships">starships</option>
                </select>
                <label className='form-label'>ID :</label>
                <input className='form-control' type='number' value={id} onChange={(e)=>{setId(e.target.value)}}></input>
                <button className='btn btn-primary' >Search</button>
            </form>
    </div>
        

    </>
)
}

export default Search