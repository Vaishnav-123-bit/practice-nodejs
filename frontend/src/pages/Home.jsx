import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';

const Home = () => {
  const data =useContext(UserDataContext);
  console.log(data)
  return (
    <div>
        <div className= 'bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1635755719643-68bc1f231573?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] pt-8 h-screen w-full flex justify-between flex-col '>
            <img className='w-16 ml-8 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='bg-white py-4 px-4 pb-7'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='font-semibold flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home