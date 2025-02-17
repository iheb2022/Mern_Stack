import React from 'react'

const PersonCard = (props) => {
    const {propt} = props
    return (
    <>
        <div>
            <h2>{propt.firstName} , {propt.lastName}</h2>
            <p>Age : {propt.age}</p>
            <p>Hair Color : {propt.hairColor}</p>
        </div>
    </>
    )
}

export default PersonCard 