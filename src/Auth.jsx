import { useState } from "react";
import {  useNavigate } from "react-router";

export const Auth = () => {
  const Navigate= useNavigate()

    const [islogin, setislogin]= useState(true)
  const [user, setuser]= useState({
    name:'',
    password:'',
    email:'',
    confirmpassword:''
  })
  const handlechange=(evt)=>{
   const {name, value}= evt.target
   setuser((prev)=>(
    {...prev, [name]: value}
   ))
   
   
  }
   const handlesubmit=async(e)=>{
   e.preventDefault()
   if(islogin){
    if(!user.email || !user.password){
      alert('all feilds required')
      return;
    }
    try{
      let response=await fetch('http://localhost:3000/login', {
        method:'POST',
        headers:{'Content-Type':'application/json'
        },
         body:JSON.stringify({
          email:user.email,
          password:user.password
         })
      })
      const data= await response.json()
      alert(data.message)
      console.log(data);
    }
      catch(error){
       return resp.json({error:'internal server error'})
        
      }
      Navigate('/home')
    }else{
      if(!user.name || !user.email || !user.password || !user.confirmpassword){
        alert('alert all feilds required')
        return
      }
      try{
        let response= await fetch('http://localhost:3000/signup',{
          method:'POST',
         headers:{
          'Content-Type':'application/json'
         },
         body: JSON.stringify(user)
        })
        const data= await response.json()
        alert(data.message)
        console.log(data);
        
      }catch(error){
        console.log(error);
        
      }
    }
    
  }
   
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          {islogin ? "Login" : "Sign Up"}
        </h1>
        <p className="text-center text-gray-500 mb-6">
          {islogin
            ? "Welcome back! Please login to continue."
            : "Create your account to get started."}
        </p>

        <form onSubmit={handlesubmit} className="space-y-4">
          {!islogin && (
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                type="text" name="name" onChange={handlechange}
                placeholder="Enter your full name" value={user.name}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          )}

          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email" name="email" value={user.email}
              placeholder="Enter your email" onChange={handlechange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password" name="password" onChange={handlechange}
              placeholder="Enter your password" value={user.password}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {!islogin && (
            <div>
              <label className="block text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password" name="confirmpassword" onChange={handlechange}
                placeholder="Confirm your password" value={user.confirmpassword}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            {islogin ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          {islogin ? "Don’t have an account?" : "Already have an account?"}
          <button
            onClick={() => setislogin(!islogin)}
            className="ml-2 text-purple-600 font-semibold hover:underline"
          >
            {islogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
