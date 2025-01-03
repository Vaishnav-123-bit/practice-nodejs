import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationPanel from "../components/LocationPanel";

const Home = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
const vehiclePanelRef=useRef(null);
  const[vehiclePanelOpen,setVehiclePanelOpen]=useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("submitted");
  };
  // gsap anmation library for animation
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
        });
      }
    },
    [panelOpen]
  );


  useGSAP(
    function () {
      gsap.to(vehiclePanelRef.current, {
        transform: vehiclePanelOpen ? "translateY(0)" : "translateY(100%)",      

      });
    }
    ,[vehiclePanelOpen]
  )
  return (
    // <div>Home</div>
    <>
      <div className="h-screen relative overflow-hidden">
        <img
          className="w-16 left-5 top-5 absolute"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />

        <div className="h-screen w-screen">
          <img
            className="h-full w-full object-cover"
            src="https://cdn.prod.website-files.com/5c29380b1110ec92a203aa84/66e5ce469b48938aa34d8684_Google%20Maps%20-%20Compressed.jpg"
            alt=""
          />
        </div>

        <div className=" flex flex-col justify-end absolute h-screen top-0 w-full  ">
          <div className=" h-[30%] p-6 bg-white relative">
            <h5
              ref={panelCloseRef}
              onClick={() => setPanelOpen(false)}
              className="opacity-0 absolute text-2xl right-6 top-6"
            >
              <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <h4 className="text-2xl font-semibold">Find a trip</h4>

            <form onSubmit={(e) => submitHandler(e)}>
              <div className="rounded-full line absolute h-16 w-1 top-[45%] left-9 bg-gray-700"></div>
              <input
                onClick={() => setPanelOpen(true)}
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="rounded-lg bg-[#eee] px-12 py-2 text-base w-full mt-5"
                type="text"
                placeholder="Add a pick-up location"
              />
              <input
                onClick={() => setPanelOpen(true)}
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="rounded-lg bg-[#eee] px-12 py-2 text-base w-full mt-4 "
                type="text"
                placeholder="Enter your destinaton"
              />
            </form>
          </div>
          <div ref={panelRef} className=" bg-white h-0  ">
            <LocationPanel setPanelOpen={setPanelOpen} vehiclePanelOpen={vehiclePanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
          </div>
        </div>

       
       {/**Bottom fixed panel  for choosing */}
        <div ref={vehiclePanelRef} className="rounded-3xl fixed w-full z-10 bottom-0 bg-white px-3 py-10">
         
         <h5 onClick={()=>{
          setVehiclePanelOpen(false)
         }} className="text-center top-0 absolute p-1 w-[93%]  "><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
          <h3 className="text-2xl font-bold mb-5">Choose a vehicle</h3>
         {/**Car */}
          <div className="mb-2 flex border-2  active:border-black rounded-xl w-full items-center  p-3 justify-between">
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
          <div className="mb-2 flex border-2  active:border-black rounded-xl w-full items-center  p-3 justify-between">
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
          <div className="mb-2 flex border-2 active:border-black rounded-xl w-full items-center  p-3 justify-between">
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
      </div>
    </>
  );
};

export default Home;
