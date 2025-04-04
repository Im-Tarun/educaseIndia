import React, { useState } from 'react' 
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email , setEmail ] = useState('')
  const [password, setPassword] = useState('')
  const [error , setError ] = useState(null)
  const navigate = useNavigate() // Moved useNavigate to the top level

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("userData")) // Parse localStorage data
    console.log(userData)
    if(userData && userData.email === email && userData.password === password){
      navigate("/profile")
    } else {
      setError("Email and password are wrong")
    }
  }

  return (
    <div className='flex w-full h-screen justify-start flex-col p-5 border-2 border-gray-400'>
      <div className='flex gap-1 flex-col'>
        <h1 className='text-4xl font-bold mt-8 pr-8'> Signin to your PopX account</h1>
        <p className='text-gray-400 text-xl pr-4 font-semibold mt-4 mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
        <form onSubmit={handleLogin} className='flex w-full relative flex-col gap-2 '>
          <div className='relative h-fit mb-5'>
            <label
              htmlFor="email"
              className="absolute text-sm font-semibold bottom-8.5 left-3 bg-[#f7f8f9] px-2 text-[#6c25ff]"
            >
              Email Address 
            </label>
            <input
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
                setError(null)
              }}
              type="email"
              id="email"
              placeholder="Enter email address"
              autoComplete='off'
              className="peer w-full border-2 border-gray-300 rounded-md px-5 py-2 focus:border-[#6c25ff] focus:ring-0 outline-none placeholder:text-gray-400 placeholder:text-sm placeholder:font-semibold"
            />
          </div>
          <div className='relative h-fit mb-2'>
            <label
              htmlFor="password"
              className="absolute text-sm font-semibold bottom-8.5 left-3 bg-[#f7f8f9] px-2 text-[#6c25ff]"
            >
              Password 
            </label>
            <input
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
                setError(null)
              }}
              type="password"
              id="password"
              placeholder="Enter password"
              autoComplete='off'
              className="peer w-full border-2 border-gray-300 rounded-md px-5 py-2 focus:border-[#6c25ff] focus:ring-0 outline-none placeholder:text-gray-400 placeholder:text-sm placeholder:font-semibold"
            />
          </div>
          <button type='submit' className='bg-[#cebafb] relative py-2.5 text-center font-semibold rounded-md'>
            Login
          </button>
          {error && <p className='text-red-600 absolute -bottom-6 mt-2 text-sm'>{error}</p>} {/* Moved error message outside button */}
        </form>
      </div>
    </div>
  )
}

export default Login
