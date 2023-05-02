// import React from 'react'
import {createBrowserRouter}  from "react-router-dom"
import HomeLayout from "../Layout/HomeLayout/HomeLayout"
import { Home } from "../pages"
import { Register } from "../pages/Auth/Register"


export const element = createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path:"signup",
                element: <Register />
            }
        ]
    }
])