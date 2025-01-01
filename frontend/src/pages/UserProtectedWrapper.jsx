import React, { useContext, useEffect } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const UserProtectedWrapper = ({children}) => {
    // const {user}=useContext(UserDataContext)
    const token=localStorage.getItem('token')
    // console.log(token)

    const navigate=useNavigate();
   useEffect(()=>{
    if(!token){
        navigate('/login')
    }
   },[token])
  return (
    // <div>UserProtectedWrapper</div>
    <>
        {children}
    </>

  )
}

export default UserProtectedWrapper