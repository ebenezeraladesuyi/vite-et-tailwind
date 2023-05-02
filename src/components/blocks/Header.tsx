// import React from 'react'

const Header = () => {
  return (
    <div className="w-full h-16 bg-gray-800 flex justify-between items-center text-white">

        <div className="font-bold text-[25px] mx-[30px]">LOGO</div>

        <div className="flex ">
            <div className="mx-[15px] font-semibold cursor-pointer hover:via-yellow-500">Home</div>
            <div className="mx-[15px] font-semibold cursor-pointer hover:via-yellow-500">About</div>
            <div className="mx-[15px] font-semibold cursor-pointer hover:via-yellow-500">Contact</div>
        </div>

        <div className="flex mx-[30px]">
            <button className="mx-[10px] w-[100px] h-[40px] bg-white rounded text-gray-800 font-semibold flex justify-center items-center cursor-pointer hover:scale-75 ease-in-out duration-300">Sign in</button>
            
            <button className="mx-[10px] w-[130px] h-[40px] bg-transparent border-white rounded text-white font-semibold flex justify-center items-center cursor-pointer hover:scale-75 ease-in-out duration-300">Get Started</button>
        </div>
        
    </div>
  )
}

export default Header