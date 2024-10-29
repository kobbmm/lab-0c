import React from "react"


export default function websitelayout({
    children,
} :{
    children:React.ReactNode
}
){
    return(
        <>
           <div className="w-full h-16 bg-red-500">Navbar</div>
           <div className="">{children}</div>
        </>
    )
}    

   
