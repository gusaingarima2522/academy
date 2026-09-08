import React, { useState } from 'react'
import '../index.css'


const Login = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    return (
        <>
            <form className="custom-form">


                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        placeholder='enter your name'
                        onChange={(e) => { setname(e.target.value) }} />

                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        placeholder='enter your email'
                        onChange={(e) => { setemail(e.target.value) }} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        className="form-control"
                        value={password}
                        placeholder='enter your password'
                        onChange={(e) => { setpassword(e.target.value) }} />
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>

           
       
    )
}

export default Login
