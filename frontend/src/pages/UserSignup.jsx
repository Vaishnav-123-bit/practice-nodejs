import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');
  const[userData, setUserData] = useState({});

  const submitHandler = (e) => {
      e.preventDefault();
      setUserData({ firstName:firstName,lastName :lastName ,email:email, password:password});
      setEmail('');
      setFirstName('');
      setLastName('');
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
    <h3 className="text-lg font-medium mb-2 ">What's your name</h3>
    <div className='flex gap-4 mb-5'>
    <input
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
        type=" text"
        className=" bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-base "
        required
        placeholder="first Name"
      />

<input
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
        type=" text"
        className=" bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-base placeholder:text-base "
        required
        placeholder="last Name"
      />
    </div>
      
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
        Sign Up 
      </button>
      <p className="text-center">Already have an account ? <Link to={'/login'} className="text-blue-600">Login here </Link></p>
    </form>
   </div>
   <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
  </div>
);
}

export default UserSignup