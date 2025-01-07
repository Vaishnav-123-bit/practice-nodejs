import React from 'react'

const RidePopUp = () => {
  return (
    <div>
    <h5
   
      className="text-center top-0 absolute p-1 w-[93%]  "
    >
      <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
    </h5>
    <h3 className="text-xl font-bold mb-5">New ride avaiable !</h3>

      <div className='flex items-center justify-between p-3 bg-yellow-300 rounded-lg  mt-4'>
        <div className='flex items-center gap-3'> 
            <img className='h-12 w-10 object-cover rounded-full' src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg" alt="" />
            <h2 className='text-lg font-medium '>AbC XYS</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2km</h5>
      </div>

    <div className='gap-2 flex items-center justify-between flex-col'>
    {/* <img
        className="h-20"
        src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
        alt=""
      /> */}
      <div className='w-full mt-3'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
              <i className='text-lg  ri-map-pin-2-fill'></i>
              <div>
                  <h3 className='text-lg font-medium'>562/A/11</h3>
                  <p className='text-small text-gray-600 -mt-1'>Mumbai , Maharashtra</p>
              </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>
              <i className='text-lg  ri-map-pin-user-fill'></i>
              <div>
                  <h3 className='text-lg font-medium'>562/A/11</h3>
                  <p className='text-small text-gray-600 -mt-1'>Mumbai , Maharashtra</p>
              </div>
          </div>

          <div className='flex items-center gap-5 p-3  '>
              <i className='text-lg  ri-currency-line'></i>
              <div>
                  <h3 className='text-lg font-medium'>Rs193.20</h3>
                  <p className='text-small text-gray-600 -mt-1'>Cash</p>
              </div>
          </div>
      </div>
      <button onClick={()=>{
          props.setVehiclePanelOpen(false);
          props.setConfirmRidePanel(false)
          props.setVehicleFound(true)}} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
              <button className='w-full  bg-gray-300 text-gray-700 font-semibold p-2 rounded-lg'>Ignore</button>
    </div>

</div>
  )
}

export default RidePopUp