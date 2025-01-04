import React from "react";

const WaitingForDriver = (props) => {
  return (
    // <div>WaitingForDriver</div>
    <div>
      <h5
        onClick={() => {
          props.setWaitingForDriver(false);
          // props.setVehicleFound(false);
        }}
        className="text-center top-0 absolute p-1 w-[93%]  "
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
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
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg  ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/A/11</h3>
              <p className="text-small text-gray-600 -mt-1">
                Mumbai , Maharashtra
              </p>
            </div>
          </div>
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
    </div>
  );
};

export default WaitingForDriver;
