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
    <div className="sm:w-[552px] sm:h-[669px] w-[350px] h-[400px] bg-white rounded-[12px] shadow-[0px_0px_40px_#0000001a]">
        <div className={`flex flex-col items-center h-full 
             rounded-[20px]  sm:gap-[20px]`}
            >
                <img src='check.png' className='sm:w-[52px] w-[40px] h-[40px] sm:h-[52px] mt-10'/>
                <h1 className="[font-family:'Poppins-Medium',Helvetica] font-medium text-[#4f4f4f] sm:text-[25px]">Uploaded successfully</h1>

                <img src={imageUrl} className="sm:h-[300px] h-[200px] sm:w-[500px] w-[330px] sm:m-[25px] m-[10px] rounded-[20px]" />

                <div className='flex justify-evenly h-[44px] sm:w-[500px] w-[330px] border bg-[#f6f8fb] rounded-[12px] border-solid border-[#e0e0e0]'>
                    <div className="[font-family:'Poppins-Medium',Helvetica] font-medium text-[#4f4f4f] sm:text-[10px] text-[10px]  ml-1  flex items-center" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {imageUrl}
                        
                    </div>
                    <div className="flex items-center mr-[2px]">
                        <div style={{ width: '10px' }}></div>
                        <button
                            className="bg-[#2f80ed] rounded-[8px] [font-family:'Poppins-Medium',Helvetica] font-medium sm:text-[14px] text-[10px] text-white sm:mr-0  px-[15px] my-[1.5px] w-[100px] py-[8px] hover:opacity-80"
                            onClick={handleCopy}
                        >
                            {copied ? 'Copied!' : 'Copy Link'}
                        </button>
                    </div>
                </div>
        </div>
    </div>
  )
}
