import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
const [msg, setMsge] = useState('')
   const navigate = useNavigate()

   {setTimeout(()=>{

      navigate("/")
   },5000)}

   {setTimeout(()=>{
      setMsge('Redirecting to Home....')
   },2000)}

  return (
   <div className="bg-gray-100  ">
   <div className=" flex flex-col justify-center items-center h-screen ">
       <h1 className="text-8xl font-bold text-gray-800">404</h1>
       <p className="text-4xl font-medium text-gray-800">Page Not Found</p>
       <p  className="mt-4 text-xl text-blue-600 hover:underline">{msg}</p>
   </div>
</div>
  )
}

export default Error