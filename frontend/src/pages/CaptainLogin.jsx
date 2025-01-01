import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[userData, setUserData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({email:email, password:password});
        setEmail('');
        setPassword('');
        console.log(userData);
    }    
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
     <div>
     <img
        className="w-16 mb-10 "
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />

      <form onSubmit={(e)=> submitHandler(e)}>
        <h3 className="text-lg font-medium mb-2 ">What's your email</h3>
        <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
          type=" email"
          className="mb-5 bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base "
          required
          placeholder="email@email.com"
        />
        <h3 className="text-lg font-medium mb-2">Enter Password</h3>
        <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="mb-7 bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base "
          required
          placeholder="password"
        />
        <button className="mb-2 bg-[#111] text-white font-semibold rounded px-4 py-2 border w-full text-lg placeholder:text-base ">
          Login
        </button>
        <p className="text-center">Join our fleet ? <Link to={'/captain-signup'} className="text-blue-600">Register a captain</Link></p>
      </form>
     </div>
     <div>
        <Link to={"/login"} className="flex items-center justify-center mb-7 bg-[#d5622d] text-white font-semibold rounded px-4 py-2 border w-full text-lg placeholder:text-base "> Sign in as User </Link>
     </div>
    </div>
  );
}

export default CaptainLogin