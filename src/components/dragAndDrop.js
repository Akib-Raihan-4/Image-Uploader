import React, { useState, useRef } from 'react'
import supabase from '../config/supabase'
import { v4 as uuidv4 } from 'uuid'


export const DragAndDrop = () => {

  const handleDragOver = (e) =>{
    e.preventDefault()
  }

  const handleDrop = async(e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    // console.log(e.dataTransfer.files[0])
    console.log(file)
    
    const {data, error} = await supabase.storage.from('images').upload("images/" + uuidv4(), file)

    if(data){
      console.log("successfully stored")
    }
    else{
      console.log(error)
    }

  }
  // console.log(supabase)

  return (
    <div className="flex flex-col justify-center items-center h-[300px] m-[42px] rounded-[20px] bg-[#f6f8fb] border-[2px] border-dashed border-[#97bef4] gap-[60px]"
    onDragOver={handleDragOver}
    onDrop={handleDrop}
    >
        <img src='image.svg'/>
        <h1 className="[font-family:'Poppins-Medium',Helvetica] font-medium text-[#bdbdbd] ">Drag & Drop your image here</h1>
    </div>
  )
}
