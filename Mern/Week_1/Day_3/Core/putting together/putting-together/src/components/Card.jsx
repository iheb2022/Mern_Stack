import React, { useState } from 'react'

const PersonCard = (props) => {
    const [ageDisplay,setAgeDisplay]=useState(props.propt.age)
    const {propt} = props
    const InCreaseAge = () => {
        setAgeDisplay(ageDisplay + 1)
    }
    return (
        <div>
            <h2>{propt.firstName} , {propt.lastName}</h2>
            <p>Age : {ageDisplay}</p>
            <p>Hair Color : {propt.hairColor}</p>
            <button onClick={InCreaseAge}>Brithday Button for {propt.firstName} {propt.lastName}</button>
        </div>
    )
}

export default PersonCard 