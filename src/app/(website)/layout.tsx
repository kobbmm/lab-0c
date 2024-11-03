import React from "react"


export default function websitelayout({
    children,
} :{
    children:React.ReactNode
}
){
    return(
        <>
        <div className="w-full h-16 bg-gray-800 flex items-center justify-between px-6 text-white shadow-md">
        <a href="/" className="text-lg font-bold">MyWebsite</a>
        <nav className="flex space-x-4">
        <a href="/" className="hover:text-gray-400 transition duration-300">Home</a>
        <a href="/login" className="hover:text-gray-400 transition duration-300">Login</a>
        <a href="/register" className="hover:text-gray-400 transition duration-300">Register</a>
        </nav>
        </div>

           <div className="">{children}</div>
        </>
    )
}    

/** dark: '#1F1F1F',           // สีดำ
        darkGray: '#2D2D2D',       // สีเทาเข้ม
        darkBlue: '#3A3A55',       // สีน้ำเงินเข้ม
        emeraldDark: '#2C6E49',    // สีเขียวมรกตเข้ม */ 
