// import React from 'react'

import Button from "./Button";

interface iCard {
  placeholder1: string;
  placeholder2: string;
  buttonText: string;
  backColor: string;
  info: string;
}

const Card: React.FC<iCard> = ({placeholder1, placeholder2, buttonText, backColor, info}) => {
  return (

      <div className="h-[300px] w-[280px] border-gray-800 rounded p-2 bg-black flex-col justify-center items-center">

        <input className="h-[40px] w-[90%] border-gray-800 bg-gray-200 m-3 rounded p-2" type="text" placeholder={placeholder1}/>

        <input className="h-[40px] w-[90%] border-gray-800 bg-transparent bg-gray-200 m-3 rounded p-2" type="password" placeholder={placeholder2}/>

        <Button buttonTitle={buttonText} back={backColor} />

        <p className="text-yellow-400 text-[10px] cursor-pointer m-4 hover:text-white" >{info}</p>

      </div>
  )
}

export default Card