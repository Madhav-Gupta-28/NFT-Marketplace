"use client"
import React , {useState} from 'react';


// Internal Imports
import Navbar from '@/components/Navbar/Navbar';
import Style from "./createNFT.module.css";
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';
import UploadNFT from '@/createNFTPage/UploadNFT/UploadNFT';
import DropZone from '@/createNFTPage/DropZone/DropZone';



const Account = () => {
  return (
   <>
   <Navbar/>
   <div className={Style.CREATENFT} >
    <div className={Style.CREATENFT_box} >

        <div  className={Style.CREATENFT_box_heading}  >
        <h1>Create New NFT</h1>
        <p>You can set preferred display name, create your profile URL and manage other personal settings.</p>
        </div>

         <div className={Style.CREATENFT_upload_images}>
            <h1>Image, Video, Audio, or 3D Model</h1>   
            <p>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>
        </div>

        <div className={Style.CREATENFT_box_form} >
            <UploadNFT/>

        </div>


    </div>
   </div>

   <Footer/>
   </>
  )
}

export default Account