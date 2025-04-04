import React from 'react'
import { Link } from 'react-router-dom' 

const Home = () => {
  return (
    <div className='flex w-full h-screen justify-end flex-col p-4 border-2 border-gray-400'>
      <div className='flex gap-1 flex-col'>
        <h1 className='text-2xl font-semibold'> Welcome to PopX</h1>
        <p className='text-gray-600 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum.</p>
        <div className='flex w-full flex-col gap-2 '>
            <Link to={"/signup"} className=' bg-[#6c25ff] py-2.5 text-center text-white font-semibold rounded-md'>Create Account</Link>
            <Link to={"/login"} className='bg-[#cebafb] py-2.5 text-center font-semibold rounded-md'>Already Registered? Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
