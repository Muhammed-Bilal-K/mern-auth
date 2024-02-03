// import React, { useState } from 'react'
// import './Update.css'

// function Update() {
//     const [username, setUsername] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [role, setRole] = useState('')

//     const HandleSubmit = (e) => {

//     }

//     return (
//         <div>
//             <div className="container">
//                 <div className="frame">
//                     <div className="nav">
//                         <ul>
//                             <li className="signup-inactive"><a className="btn">Update User </a></li>
//                         </ul>
//                     </div>
//                     <div style={{marginTop: "-30px"}}>
//                         <form className="form-signin" onSubmit={HandleSubmit} name="form">
//                             <label htmlFor="email">Name</label>
//                             <input required className="form-styling" type="email" value={username} onChange={(e) => { setUsername(e.target.value) }} name="email" placeholder="" />
//                             <label htmlFor="email">Email</label>
//                             <input required className="form-styling" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" placeholder="" />
//                             <label htmlFor="password">Password</label>
//                             <input required className="form-styling" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="" />
//                             <label htmlFor="password">Password</label>
//                             <input required className="form-styling" type="password" value={role} onChange={(e) => { setRole(e.target.value) }} name="password" placeholder="" />
//                             <div className="">
//                                 <button className="btn-signup">UPDATE</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Update