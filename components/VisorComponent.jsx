import React from "react"

export default function Visor({input}){
    return(
        <>
        <div className=" py-4">
            <input className="block bg-slate-300 w-full border border-black rounded-md py-2 pl-1 pr-1 shadow-sm sm:text-sm" value={input}  disabled/>
        </div>
        </>
    )
}