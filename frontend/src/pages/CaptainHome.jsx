import React from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";

const CaptainHome = () => {
  return (
    <div className="h-screen">
      <div className="w-screen fixed p-6 top-0 flex items-center justify-between">
        <img
          className="w-16 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/home"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full "
        >
          <i className=" text-lg font-medium  ri-logout-box-r-line"></i>
        </Link>
      </div>

      {/**map  */}
      <div className="h-3/5 ">
        <img
          className="h-full w-full object-cover"
          src="https://cdn.prod.website-files.com/5c29380b1110ec92a203aa84/66e5ce469b48938aa34d8684_Google%20Maps%20-%20Compressed.jpg"
          alt=""
        />
      </div>

      {/**captain details */}
      <div className="2/5 p-6">
    <CaptainDetails/>
        {/* <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">Make a payment</button> */}
      </div>

      <div
          //  ref={waitingForDriverRef}
          className="rounded-3xl fixed w-full z-10 bottom-0 bg-white px-3 py-6"
        >
          <RidePopUp/>
          {/* <WaitingForDriver waitingForDriver={waitingForDriver} setVehicleFound={setVehicleFound} setConfirmRidePanel={setConfirmRidePanel}/> */}
        </div>

    </div>
  );
};

export default CaptainHome;
//     <img
// className="h-full w-full object-cover"
// src="https://cdn.prod.website-files.com/5c29380b1110ec92a203aa84/66e5ce469b48938aa34d8684_Google%20Maps%20-%20Compressed.jpg"
// alt=""
// />
