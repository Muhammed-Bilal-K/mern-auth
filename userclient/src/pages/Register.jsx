import React, { useState } from 'react'
import './Register.css'
import axios from 'axios';
import { useNavigate ,Link } from 'react-router-dom'

function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(email);
        console.log(password);
        const userDetail = {
            username: username,
            email: email,
            password: password,
        }

        axios.post('http://localhost:3000/admin/create', { ...userDetail }).then(()=>{
            location.reload();
        })
    }

    return (
        <div>
            <div className="container">
                <div className="frame">
                    <div className="nav">
                        <ul>
                            <li className="signup-inactive"><a className="btn">Sign up </a></li>
                        </ul>
                    </div>
                    <div>
                        <form className="form-signin" onSubmit={HandleSubmit} name="form" style={{marginTop:"-50px" , textAlign:"center"}}>
                            <label htmlFor="username">Username</label>
                            <input required className="form-Text-Style" type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder="" width="50px" />
                            <label htmlFor="email">Email</label>
                            <input required className="form-styling" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" placeholder="" />
                            <label htmlFor="password">Password</label>
                            <input required className="form-styling" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="" />
                            <div className="">
                                <button className="btn-signup">Sign Up</button>
                            </div>
                            <div className='Direct_SU'>
                                <p style={{marginBottom:"12px"}}>already have an account</p>
                                <Link to='/login'><h5 className="direct_button">Sign In</h5></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register