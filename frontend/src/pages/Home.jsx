import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationPanel from "../components/LocationPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LoookingForDriver from "../components/LoookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const[waitingForDriver,setWaitingForDriver]=useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const[confirmRidePanel,setConfirmRidePanel]=useState(false);
const[vehicleFound,setVehicleFound]=useState(false);
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
    },
    [vehiclePanelOpen]
  );

  useGSAP(
    function () {
      gsap.to(confirmRidePanelRef.current, {
        transform: confirmRidePanel ? "translateY(0)" : "translateY(100%)",
      });
    },
    [confirmRidePanel]
  );

  useGSAP(
    function () {
      gsap.to(vehicleFoundRef.current, {
        transform: vehicleFound ? "translateY(0)" : "translateY(100%)",
      });
    },
    [vehicleFound]
  );

  useGSAP(
    function () {
      gsap.to(waitingForDriverRef.current, {
        transform: waitingForDriver ? "translateY(0)" : "translateY(100%)",
      });
    },
    [waitingForDriver]
  );
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
            <LocationPanel
              setPanelOpen={setPanelOpen}
              vehiclePanelOpen={vehiclePanelOpen}
              setVehiclePanelOpen={setVehiclePanelOpen}
            />
          </div>
        </div>

        {/**Bottom fixed panel  for choosing */}
        <div
          ref={vehiclePanelRef}
          className="rounded-3xl fixed w-full z-10 bottom-0 bg-white px-3 py-10"
        >
          <VehiclePanel setVehiclePanelOpen={setVehiclePanelOpen} setConfirmRidePanel={setConfirmRidePanel}/>
        </div>


        <div
          ref={confirmRidePanelRef}
          className="rounded-3xl fixed w-full z-10 bottom-0 bg-white px-3 py-6"
        >
          <ConfirmedRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} setVehiclePanelOpen={setVehiclePanelOpen}/>
        </div>

        <div
          ref={vehicleFoundRef}
          className="rounded-3xl fixed w-full z-10 bottom-0 bg-white px-3 py-6"
        >
          <LoookingForDriver setVehicleFound={setVehicleFound} setConfirmRidePanel={setConfirmRidePanel}/>
        </div>

        <div
           ref={waitingForDriverRef}
          className="rounded-3xl fixed w-full z-10 bottom-0 bg-white px-3 py-6"
        >
          <WaitingForDriver waitingForDriver={waitingForDriver} setVehicleFound={setVehicleFound} setConfirmRidePanel={setConfirmRidePanel}/>
        </div>
      </div>
    </>
  );
};

export default Home;
