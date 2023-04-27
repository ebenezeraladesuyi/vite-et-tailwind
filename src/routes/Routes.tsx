// import React from 'react'
import {createBrowserRouter}  from "react-router-dom"
import HomeLayout from "../Layout/HomeLayout/HomeLayout"
import { Home } from "../pages"


export const element = createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            }
        ]
    }
])