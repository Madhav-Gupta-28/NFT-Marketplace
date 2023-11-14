"use client"
import React , {useState  , useMemo, useCallback , useContext} from 'react'
import { useDropzone } from 'react-dropzone'
import images from "../../img"
import Image from 'next/image'
import { CiImageOn } from "react-icons/ci";


import Style from "./dropzone.module.css"

const DropZone = ({title , heading , subHeading , itemName , website , description , royalty , category , filesize }) => {

  const [IsImage , setisimage] = useState("");
  const [fileurl , setfileurl] = useState(null);
  const [filename , setfilename] = useState("user1");

  const onDrop = useCallback(acceptedFiles => {
    setfileurl(acceptedFiles[0]);
    console.log(acceptedFiles[0]);
    setfilename(acceptedFiles[0].name);
    setisimage(true)
  }, []);

const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop , accept:"image/*",maxSize:5000000, maxFiles:1})


  return (
    <div className={Style.DropZone} >

      <div className={Style.DropZone_box} {...getRootProps()}  >  

        <div>
          <CiImageOn  className={Style.DropZone_box_icon} />
        </div>
        <div className={Style.DropZone_box_upload_box} >
          <label  > Upload a file </label>
          <input {...getInputProps()}   />
        </div>
        <div className={Style.DropZone_box_title} >
          {title}
        </div>


        {
          IsImage && (
            <aside>
              <div>
                <Image src={images.creatorbackground10} width={100} height={100} objectFit='contain' alt='image' />
              </div>
            </aside>
          )
        }

      </div>



    </div>
  )
}

export default DropZone