import React from "react";

const LocationPanel = (props) => {
  const locations=[
    "24B, Near Kp cafe,Sheryrains Coding School, Mumbai",
    "24C, Near Kp cafe,Sheryrains Coding School, Mumbai",
    "24D, Near Kp cafe,Sheryrains Coding School, Mumbai",
    
  ]
  // console.log(props)
  return (
    <div>

      {locations.map((location)=>(
        <div onClick={()=>{
          props.setPanelOpen(false)
          props.setVehiclePanelOpen(true)} 
        }key={location} className="border-2 p-3 rounded-xl  border-gray-100 active:border-black  my-3 flex items-center justify-start gap-4">
        <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
          <i className="ri-map-pin-fill "></i>
        </h2>
        <h4 className="font-medium">
          {location}
        </h4>
      </div>
      )
      )}
    
    </div>
  );
};

export default LocationPanel;
