import React from 'react'

import { imageDB } from '../config'
import { DragAndDrop } from './dragAndDrop'
import supabase from '../config/supabase'
import { v4 as uuidv4 } from 'uuid'

export const UploadImage = () => {

  const UploadImage = async(e) =>{
    let file = e.target.files[0]

    const {data, error} = await supabase.storage.from('images').upload("images/" + uuidv4(), file)

    if(data){
      console.log("successfully stored")
    }
    else{
      console.log(error)
    }
  }


  return (
    <div className="w-[552px] h-[669px] bg-white rounded-[12px] shadow-[0px_0px_40px_#0000001a] ">
      <h1 className="flex justify-center pt-[50px] text-[#4f4f4f] [font-family:'Poppins-Medium',Helvetica] font-medium text-[27px] tracking-[-0.63px]">
        Upload your image
      </h1>
      <p1 className="flex justify-center pt-[20px] [font-family:'Poppins-Medium',Helvetica] text-[15px] text-[#828282]">
        File should be Jpeg,Png,...
      </p1>
      
      <DragAndDrop/>

      <h1 className="flex justify-center [font-family:'Poppins-Medium',Helvetica] font-medium text-[#bdbdbd]">Or</h1>
      <div className=" flex justify-center mt-[50px]">
        <label htmlFor='imageFile' className='bg-[#2f80ed] rounded-[10px] py-[10px] px-[15px] text-white shadow-[0px_4px_12px_#0000001a] cursor-pointer active:bg-[#15335a]'>
          Choose a file
        </label>
        <input type='file' id = "imageFile" accept='image/*'
        onChange={(e) => UploadImage(e)}
        className='hidden'/>
      </div>
    </div>
  )
}
