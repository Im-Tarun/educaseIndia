import React from 'react'

const Profile = () => {
  const data= JSON.parse(localStorage.getItem("userData")) 
  return ( 
      <div className='w-full flex flex-col h-screen  border-2 border-gray-400'>
        <h1 className='py-7 text-2xl px-5 bg-white'> Account Settings </h1>
        <div className='flex  px-5 gap-4 my-6 items-center'>
          <img src="/myImage.jpg" width={80} height={80} className='rounded-full overflow-hidden' alt="alt" />
          <div>
            <h3 className='font-semibold'>{data.name}</h3>
            <p>{data.email}</p>
          </div>
        </div>
          <p className=' px-5 font-semibold text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, praesentium reprehenderit magni accusamus nulla dolor </p>
      </div> 
  )
}

export default Profile
