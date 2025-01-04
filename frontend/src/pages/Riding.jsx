import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <>
      <div className="h-screen">
        <Link to="/home" className="right-2  top-2 fixed h-10 w-10 bg-white flex items-center justify-center rounded-full ">
            <i className=" text-lg font-medium  ri-home-5-line"></i>
        </Link>
        <div className="h-1/2">
          <img
            className="h-full w-full object-cover"
            src="https://cdn.prod.website-files.com/5c29380b1110ec92a203aa84/66e5ce469b48938aa34d8684_Google%20Maps%20-%20Compressed.jpg"
            alt=""
          />
        </div>
        <div className="h-1/2 p-4">
        <div className="flex items-center justify-between ">
        <img
          className="h-12"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className="text-right ">
          <h2 className="text-lg font-medium">ABC</h2>
          <h4 className="text-xl font-semibold -my-1">AB 01 AB 1234</h4>
          <p className="text-sm text-gray-600 ">Suzuki alto</p>
        </div>
      </div>
      {/* <h3 className="text-2xl font-bold mb-5">Confirm your Ride</h3> */}

      <div className="gap-2 flex items-center justify-between flex-col">
        <div className="w-full mt-3">
          {/* <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg  ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/A/11</h3>
              <p className="text-small text-gray-600 -mt-1">
                Mumbai , Maharashtra
              </p>
            </div>
          </div> */}
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg  ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/A/11</h3>
              <p className="text-small text-gray-600 -mt-1">
                Mumbai , Maharashtra
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3  ">
            <i className="text-lg  ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">Rs193.20</h3>
              <p className="text-small text-gray-600 -mt-1">Cash</p>
            </div>
          </div>
        </div>
        {/* <button onClick={()=>{
                props.setConfirmRidePanel(false)
                props.setVehicleFound(true)}} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button> */}
      </div>
            <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">Make a payment</button>
        </div>
      </div>
    </>
  );
};

export default Riding;
