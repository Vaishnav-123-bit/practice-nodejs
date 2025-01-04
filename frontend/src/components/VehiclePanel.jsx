import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5
            onClick={() => {
              props.setVehiclePanelOpen(false);
            }}
            className="text-center top-0 absolute p-1 w-[93%]  "
          >
            <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
          </h5>
          <h3 className="text-2xl font-bold mb-5">Choose a vehicle</h3>
          {/**Car */}
          <div onClick={()=>{
            props.setConfirmRidePanel(true)
          }} className="mb-2 flex border-2  active:border-black rounded-xl w-full items-center  p-3 justify-between">
            <img
              className="h-12"
              src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
              alt=""
            />
            <div className="-ml-2 w-1/2">
              <h4 className="font-medium text-base">
                Uber Go{" "}
                <span>
                  <i className="ri-user-3-fill"></i>4
                </span>
              </h4>
              <h5 className="font-medium text-sm ">2 mins away</h5>
              <p className="font-normal text-xs text-gray-600">
                Affordable , compact rides
              </p>
            </div>
            <h2 className="text-lg font-semibold">Rs193.20</h2>
          </div>

          {/**Auto */}
          <div  onClick={()=>{
            props.setConfirmRidePanel(true)
          }}  className="mb-2 flex border-2  active:border-black rounded-xl w-full items-center  p-3 justify-between">
            <img
              className="h-12"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
              // src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
              alt=""
            />
            <div className="-ml-2 w-1/2">
              <h4 className="font-medium text-base">
                Uber Auto{" "}
                <span>
                  <i className="ri-user-3-fill"></i>3
                </span>
              </h4>
              <h5 className="font-medium text-sm ">2 mins away</h5>
              <p className="font-normal text-xs text-gray-600">
                Affordable , auto rides
              </p>
            </div>
            <h2 className="text-lg font-semibold">Rs113.20</h2>
          </div>

          {/**Bike */}
          <div  onClick={()=>{
            props.setConfirmRidePanel(true)
          }}  className="mb-2 flex border-2 active:border-black rounded-xl w-full items-center  p-3 justify-between">
            <img
              className="h-12"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
              // src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png"
              // src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
              alt=""
            />
            <div className="-ml-2 w-1/2">
              <h4 className="font-medium text-base">
                Uber Moto{" "}
                <span>
                  <i className="ri-user-3-fill"></i>1
                </span>
              </h4>
              <h5 className="font-medium text-sm ">4 mins away</h5>
              <p className="font-normal text-xs text-gray-600">
                Affordable , bike rides
              </p>
            </div>
            <h2 className="text-lg font-semibold">Rs63.20</h2>
          </div>
    </div>
  )
}

export default VehiclePanel