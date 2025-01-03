import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CaptainLogout = () => {
    const navigate=useNavigate()
    const token=localStorage.getItem('token')
    axios.get(`${import.meta.VITE_BASE_URL}/captains/logout`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then((response=>{
        navigate('/captain-login')
        localStorage.removeItem('token')
    }))
  return (
    <div>CaptainLogout</div>
  )
}

export default CaptainLogout