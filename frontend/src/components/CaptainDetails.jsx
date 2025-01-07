import React from 'react'

const CaptainDetails = () => {
  return (
    <>
            <div className="flex items-center justify-between ">
          <div className="flex items-center gap-3 justify-start">
            <img
              className="h-10 w-10 object-cover rounded-full"
              src="https://e7.pngegg.com/pngimages/442/477/png-clipart-computer-icons-user-profile-avatar-profile-heroes-profile.png"
              alt=""
            />
            <h4 className="text-lg font-medium">aBC efg</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Rs295.2</h4>
            <p className="text-sm font-medium text-gray-600">Earned</p>
          </div>
        </div>

        <div className="flex p-3 mt-6 bg-gray-100 rounded-xl justify-center gap-5 items-start">
          <div className="text-center">
            <i className="ri-timer-2-line  text-3xl mb-2 font-thin "></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="ri-speed-up-line  text-3xl mb-2 font-thin"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="ri-booklet-line text-3xl  mb-2 font-thin "></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
        </div>
    
    </>
  )
}

export default CaptainDetails