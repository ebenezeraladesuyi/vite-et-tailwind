// import React from 'react'

import Card from "../../components/static/Card";

export const Register = () => {
  return (
    <div  className="w-[100%] h-[100vh] flex justify-center items-center"  >

      <Card
        placeholder1="Email"
        placeholder2="Password"
        buttonText="Signin"
        backColor="red"
        info="Don't have an account? Register"
       />

    </div>
  )
}
