import React, { useState } from 'react'

const UserForm = () => {
    const [first, setFirst] = useState("");
    const [firstError, setFirstError] = useState("");

    const [last, setLast] = useState("");
    const [lastError, setLastError] = useState("");

    const [Confirm, setConfirm] = useState("");
    const [ConfirmError, setConfirmError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const [users,setUsers]=useState([])


    const handFirst = (e) => {
        setFirst(e.target.value);
        if(e.target.value.length < 2) {
            setFirstError("First name needs to be more than 2 characters");
        } else {
            setFirstError("");
        }
    }
    const handLast = (e) => {
        setLast(e.target.value);
        if(e.target.value.length < 2) {
            setLastError("Last name needs to be more than 2 characters");
        } else {
            setLastError("");
        }
    }
    const handEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 8) {
            setEmailError("Email  needs to be more than 8 characters");
        } else {
            setEmailError("");
        }
    }
    const handPassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password  needs to be more than 8 characters");
        } else {
            setPasswordError("");
        }
    }
    const handConfirm = (e) => {
        setConfirm(e.target.value);
        if(e.target.value != password ) {
            setConfirmError("Confirm  password dose not match");
        } else {
            setConfirmError("");
        }
    }    

    const SubmitHandler=(e)=>{
        e.preventDefault()
        setUsers([...users,{first,last,email,password,Confirm}])
        setFirst("")
        setLast("")
        setEmail("")
        setPassword("")
        setConfirm("")
        setHasBeenSubmitted(true)
    }


    const formMessage = () => {
        if( hasBeenSubmitted ) {
          return "Thank you for submitting the form!";
	} else {
      return "Welcome. Please submit the form";
	}
    };


    return (
    <div className='form'>
        <h1>{formMessage()}</h1>
        <form onSubmit={SubmitHandler}>
            <div className='label'>
            <div>
            <label> First Name : </label>
            <input type='text' onChange={handFirst} value={first} />
            </div>
            {
                firstError ?
                <p>{ firstError }</p> :
                " "
            }
            </div>
            <div className='label'>
            <div>
            <label> Last Name : </label>
            <input onChange={handLast} value={last} />
            </div>
            {
                lastError ?
                <p>{ lastError }</p> :
                " "
            }
            </div>
            <div className='label'>
            <div>
            <label> Email : </label>            
            <input type='email' onChange={handEmail} value={email} />
            </div>
            {
                emailError ?
                <p>{ emailError }</p> :
                " "
            }
            </div>
            <div className='label'>
            <div>
            <label> Password : </label>
            <input type='password' onChange={handPassword} value={password} />
            </div>
            {
                passwordError ?
                <p>{ passwordError }</p> :
                " "
            }
            </div>
            <div className='label'>
            <div>
            <label> Confirm Password : </label>
            <input type='password' value={Confirm} onChange={handConfirm} />
            </div>
            {
                ConfirmError ?
                <p>{ ConfirmError }</p> :
                " "
            }
            </div>
            <button>Submit</button>
        </form>
        <h3>Users:</h3>
        {
                users.map((users,index)=> <p key={index}>{users.first} {users.last} {users.email}</p> )
        }
    </div>
    )
}

export default UserForm