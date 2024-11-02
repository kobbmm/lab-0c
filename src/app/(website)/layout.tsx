import React from "react"


export default function websitelayout({
    children,
} :{
    children:React.ReactNode
}
){
    return(
        <>
           <div className="w-full h-16 bg-dark  flex items-center justify-center text-white">
            <p>Navbar</p>
           
            </div>
           <div className="grid grid-flow-col auto-cols-max overflow-x-auto gap-4">{children}</div>
        </>
    )
}    

/** dark: '#1F1F1F',           // สีดำ
        darkGray: '#2D2D2D',       // สีเทาเข้ม
        darkBlue: '#3A3A55',       // สีน้ำเงินเข้ม
        emeraldDark: '#2C6E49',    // สีเขียวมรกตเข้ม */ 
