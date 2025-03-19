import React from 'react'
import { useParams } from 'react-router-dom'

const Color = () => {
    const{word,coll,col}=useParams()
    return (
        <div style={{backgroundColor:col ,color:coll }}>
            <h1>The word is : {word}</h1>
        </div>
    )
}

export default Color
