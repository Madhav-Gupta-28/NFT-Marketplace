"use client"
import React , {useState , useMemo  , useCallback , useContext} from 'react';
import { useDropzone } from 'react-dropzone';

// Internal Imports
import Navbar from '@/components/Navbar/Navbar';
import Style from "./createNFT.module.css";
import Form from '@/createNFTPage/Form/Form';
import Image from 'next/image';
import images from "../../img";


const Account = () => {

    const [fileUrl, setfileUrl] = useState(null);


  return (
   <>
   <Navbar/>
   <div className={Style.Account} >
    <div className={Style.Account_info} >
        <h1>Create New Item</h1>
        <p>You can set preferred display name, create your profile URL and manage other personal settings.</p>
    </div>

    <div className={Style.Account_upload_images}>
        <div>
            <h1>Image, Video, Audio, or 3D Model</h1>   
            <p>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>
        </div>

        <div>
            <input type='file' />
            <Image  src={images.user1} alt='account upload' width={150} height={150} className={Style.Account_upload_images_img} />
            <p className={Style.Account_upload_images_img_p} >Change Image</p>
        </div>
    </div>

    <div>
        <Form/>
    </div>

     
   </div>
   </>
  )
}

export default Account