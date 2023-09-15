import React, { useState, useRef } from 'react'
import supabase from '../config/supabase'
import { v4 as uuidv4 } from 'uuid'
import { LoadingBar } from './loading'
import { ImageDisplay } from './imageDisplay'


export const DragAndDrop = () => {
  const [drag, setDrag] = useState(false)
  const [loading, setLoading] = useState(false)
  const [imgUrl, setImgUrl] = useState(false)

  const handleDragOver = (e) =>{
    e.preventDefault()
    setDrag(true)
  }
  const handleDragLeave = (e) =>{
    e.preventDefault()
    setDrag(false)
  }

  const handleDrop = async(e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    // console.log(e.dataTransfer.files[0])
    console.log(file)
    setLoading(true);
    let id = uuidv4()
    const {data, error} = await supabase.storage.from('images').upload("images/" + id, file)
    


    if(data){
      console.log("successfully stored")
      const imageURL = supabase.storage.from('images').getPublicUrl("images/"+ id).data.publicUrl
      setImgUrl(imageURL)
      
    }
    else{
      console.log(error)
    }
    setLoading(false);

  }
  // console.log(supabase)

  const UploadImage = async(e) =>{
    let file = e.target.files[0]
    console.log(file)
    setLoading(true);
    let id = uuidv4()

    const {data, error} = await supabase.storage.from('images').upload("images/" + id, file)
    if(data){
      console.log("successfully stored")
      console.log("successfully stored")
      const imageURL = supabase.storage.from('images').getPublicUrl("images/"+ id).data.publicUrl
      setImgUrl(imageURL)
    }
    else{
      console.log(error)
    }
    setLoading(false);
  }

  return (
    <>
      {loading ? (<LoadingBar/>):
      imgUrl ? (<ImageDisplay imageUrl={imgUrl}/>) :
      (
        <>
          <div className="sm:w-[552px] sm:h-[669px] w-[350px] bg-white rounded-[12px] shadow-[0px_0px_40px_#0000001a]">
            <h1 className="flex justify-center pt-[50px] text-[#4f4f4f] [font-family:'Poppins-Medium',Helvetica] font-medium text-[27px] tracking-[-0.63px]">
              Upload your image
            </h1>
            <p1 className="flex justify-center pt-[20px] [font-family:'Poppins-Medium',Helvetica] text-[15px] text-[#828282]">
              File should be Jpeg,Png,...
            </p1>
            <div className={`flex flex-col justify-center items-center h-[300px] sm:m-[42px]
            m-[30px] rounded-[20px] bg-[#f6f8fb] border-[2px] border-dashed border-[#97bef4] gap-[50px] ${drag ? "opacity-100" : "opacity-70"}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            >
                <img src='image.svg' className="w-[150px]" />
                <h1 className="[font-family:'Poppins-Medium',Helvetica] font-medium text-[#bdbdbd] ">Drag & Drop your image here</h1>
            </div>
            <h1 className="flex justify-center [font-family:'Poppins-Medium',Helvetica] font-medium text-[#bdbdbd]">Or</h1>
            <div className=" flex justify-center sm:mt-[50px] my-[20px]">
              <label htmlFor='imageFile' className='bg-[#2f80ed] rounded-[10px] py-[10px] px-[15px] text-white shadow-[0px_4px_12px_#0000001a] cursor-pointer active:bg-[#15335a]'>
                Choose a file
              </label>
              <input type='file' id = "imageFile" accept='image/*'
              onChange={(e) => UploadImage(e)}
              className='hidden'/>
            </div>
          </div>
        </>
      )}
    </>
  )
}
