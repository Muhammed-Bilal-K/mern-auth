import React, { useState } from 'react'
import './UserTable.css'
import { useEffect } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'

function UserTable() {
    const [userDetail, setUserDetail] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/admin').then((result) => {
            setUserDetail(result.data.allUser)
        })
    }, [])

    const HandleDelete = (id) => {
        axios.delete(`http://localhost:3000/admin/delete/${id}`).then((result) => {
            if (result.data.resultInfo) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Item has been removed.",
                    icon: "success"
                }).then(() => {
                    location.reload();
                })
            }
        })
    }

    const HandleDeleteConfirm = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                HandleDelete(id);
            }
        });
    }

    return (
        <main>
            <div className="content">
                <section className="main-header grid">
                    <h1>Users</h1>
                </section>

                <div className="card">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                userDetail.map((value, index) => (

                                    <tr className="" key={index}>
                                        <td>{index + 1}</td>
                                        <td>{value.username}</td>
                                        <td>{value.email}</td>
                                        
                                        <td>
                                            <button onClick={() => {
                                                HandleDeleteConfirm(value._id)
                                            }} className='DeleteItem'>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}

export default UserTable