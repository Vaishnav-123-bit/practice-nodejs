import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const { captain, setCaptain } = useContext(CaptainDataContext);
const navigate=useNavigate()
  const submitHandler = async(e) => {
    e.preventDefault();
    const captainData = {
      fullName:{
        firstName:firstName,
        lastName:lastName
      } ,
 
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };
    setVehicleCapacity("");
    setVehicleType("");
    setVehicleColor("");
    setVehiclePlate("");
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");

    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
    // console.log(userData);
    if(response.status===201){
      setCaptain(response.data.captain)
      localStorage.setItem('token',response.data.token)
      navigate('/captain-home')
    }
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-16 mb-10 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />

        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2 ">What's your name</h3>
          <div className="flex gap-4 mb-5">
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

          <h3 className="text-lg font-medium mb-2 ">Vehicle Information</h3>
          <div className="flex gap-4 mb-5">
            <input
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              type=" text"
              className=" bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-base "
              required
              placeholder="Vehicle Color"
            />

            <input
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              type=" text"
              className=" bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-base placeholder:text-base "
              required
              placeholder="Vehicle Plate"
            />
          </div>

          <div className="flex gap-4 mb-5">
            <input
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              type=" number"
              className=" bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-base "
              required
              placeholder="Vehicle Captacity"
            />

            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className=" bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-base placeholder:text-base "
              required
              placeholder="Vehicle Plate"
            >
              <option value="" disabled >Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>
          <button className="mb-2 bg-[#111] text-white font-semibold rounded px-4 py-2 border w-full text-lg placeholder:text-base ">
            Sign Up as Captain
          </button>
          <p className="text-center">
            Already have an account ?{" "}
            <Link to={"/captain-login"} className="text-blue-600">
              Login here{" "}
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
