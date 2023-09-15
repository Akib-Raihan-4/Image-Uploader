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

                <div className='flex justify-evenly sm:h-[44px] h-[48px] sm:w-[500px] w-[330px] border bg-[#f6f8fb] rounded-[12px] border-solid border-[#e0e0e0]'>
                    <div className="[font-family:'Poppins-Medium',Helvetica] font-medium text-[#4f4f4f] sm:text-[7.1px] text-[6px]  ml-1  flex items-center ">
                        {/* {imageUrl} */}
                        https://huqxornsvjuktkebfjzd.supabase.co/storage/v1/object/public/images/images/61029465-0d1c-4d12-9b04-a963ec64dd03
                    </div>
                    <button
                        className="bg-[#2f80ed] rounded-[8px] [font-family:'Poppins-Medium',Helvetica] font-medium sm:text-[14px] text-[8px] text-white sm:mr-0 mr-[2px] px-[15px] my-[1.5px]  hover:opacity-80"
                        onClick={handleCopy}
                    >
                        {copied ? 'Copied!' : 'Copy Link'}
                    </button>
                </div>
        </div>
    </div>
  )
}
