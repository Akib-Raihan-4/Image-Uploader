import React from 'react'
import './loadingBar.css'
export const LoadingBar = () => {
  return (
    <div className=" flex flex-col  justify-center w-[34.5rem] h-[200px] bg-white rounded-[12px] shadow-[0px_0px_40px_#0000001a]">

        <h1 className="[font-family:'Poppins-Medium',Helvetica] font-medium text-[#4f4f4f] text-[23px] ml-20 mb-4">Uploading...</h1>
       
        <div className="progress-bar ml-20">
            <div className="progress-fill"></div>
        </div>
        
    </div>
  )
}
