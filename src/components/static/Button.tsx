// import React from 'react'

interface iButton {
    buttonTitle: string;
    back: string;
}

const Button: React.FC<iButton> = ({buttonTitle, back}) => {
  return (
    <button className= {`${ back ? "bg-yellow-700 text-white w-[90%] h-[40px] flex justify-center items-center m-3 border-none hover:bg-yellow-900" : "bg-blue-700 text-white w-[120px] h-[40px]"}`}>
            {buttonTitle}
    </button>
  )
}

export default Button