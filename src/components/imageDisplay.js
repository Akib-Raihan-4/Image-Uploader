import { useState } from "react"
import React  from 'react'


export const ImageDisplay = ({imageUrl}) => {
    const handleCopy = () =>{
        navigator.clipboard.writeText(imageUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    const [copied, setCopied] = useState(false)
  return (
    <div className="sm:w-[552px] sm:h-[669px] w-[350px] bg-white rounded-[12px] shadow-[0px_0px_40px_#0000001a]">
        <div className={`flex flex-col items-center h-full 
             rounded-[20px]  gap-[20px]`}
            >
                <img src='check.png' className='w-[52px] h-[52px] mt-10'/>
                <h1 className="[font-family:'Poppins-Medium',Helvetica] font-medium text-[#4f4f4f] text-[25px]">Uploaded successfully</h1>

                <img src={imageUrl} className="h-[300px] w-[500px] sm:m-[25px] m-[10px] rounded-[20px]" />
                <div className='flex justify-evenly h-[44px] w-[500px] border bg-[#f6f8fb] rounded-[12px] border-solid border-[#e0e0e0]'>
                    <div className="[font-family:'Poppins-Medium',Helvetica] font-medium text-[#4f4f4f] text-[7px] flex items-center">
                        {imageUrl}
                    </div>
                    <button
                        className="bg-[#2f80ed] rounded-[8px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white px-[15px] my-[1.5px] hover:opacity-80"
                        onClick={handleCopy}
                    >
                        {copied ? 'Copied!' : 'Copy Link'}
                    </button>
                </div>
        </div>
    </div>
  )
}
