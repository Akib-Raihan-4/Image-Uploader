import React from 'react'
import supabase from '../config/supabase'


export const DragAndDrop = () => {

  const handleDrop = (e) => {
    e.preventDefault()
    
  }
  console.log(supabase)

  return (
    <div className="flex flex-col justify-center items-center h-[300px] m-[42px] rounded-[20px] bg-[#f6f8fb] border-[2px] border-dashed border-[#97bef4] gap-[60px]"
    
    onDrop={handleDrop}
    >
        <img src='image.svg'/>
        <h1 className="[font-family:'Poppins-Medium',Helvetica] font-medium text-[#bdbdbd] ">Drag & Drop your image here</h1>
    </div>
  )
}
