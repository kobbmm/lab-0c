import React from "react"


export default function websitelayout({
    children,
} :{
    children:React.ReactNode
}
){
    return(
        <div className="bg-gradient-to-r from-black via-black to-black">
        <div className="w-full h-16 bg-red-800 flex items-center justify-between px-6 text-white shadow-md">
        <a href="/" className="text-lg font-bold">MyWebsite</a>
        <nav className="flex space-x-4">
        <a href="/profile" className="hover:text-gray-400 transition duration-300">Profile</a>
        <a href="/about" className="hover:text-gray-400 transition duration-300">About</a>
        <a href="/contact" className="hover:text-gray-400 transition duration-300">Contact</a>
        <a href="/blog" className="hover:text-gray-400 transition duration-300">Blog</a>
        <a href="/news" className="hover:text-gray-400 transition duration-300">News</a>
        <a href="/date-selector" className="hover:text-gray-400 transition duration-300">Date-selector</a>
        <a href="/login" className="hover:text-gray-400 transition duration-300">Login</a>
        </nav>
        </div>
        <div className="min-h-screen">{children}</div>
       
        </div>
    )
}    

/** dark: '#1F1F1F',           // สีดำ
        darkGray: '#2D2D2D',       // สีเทาเข้ม
        darkBlue: '#3A3A55',       // สีน้ำเงินเข้ม
        emeraldDark: '#2C6E49',    // สีเขียวมรกตเข้ม */ 
