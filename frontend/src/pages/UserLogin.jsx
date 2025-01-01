import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {

  const navigate =useNavigate()
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[userData, setUserData] = useState({});
    const{user,setUser}=useContext(UserDataContext);

    const submitHandler =async (e) => {
        e.preventDefault();
        // setUserData({email:email, password:password});
       const userData={
        email:email,
        password:password
        

       }
       const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)
        if(response.status==200){
          const data=response.data
          setUser(data.user)
          localStorage.setItem('token',data.token);
          navigate('/home')
        }
        setEmail('');
        setPassword('');
        // console.log(userData);

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
        <p className="text-center">New here ? <Link to={'/signup'} className="text-blue-600">Create new Account</Link></p>
      </form>
     </div>
     <div>
        <Link to={"/captain-login"} className="flex items-center justify-center mb-7 bg-[#10b461] text-white font-semibold rounded px-4 py-2 border w-full text-lg placeholder:text-base "> Sign in as Captain </Link>
     </div>
    </div>
  );
};

export default UserLogin;
