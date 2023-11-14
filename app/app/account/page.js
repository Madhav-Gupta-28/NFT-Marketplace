"use client"
import React , {useState  , useMemo, useCallback , useContext} from 'react'
import { useDropzone } from 'react-dropzone'
import Style from "./account.module.css"
import Image from 'next/image'
import images from "../../img";
import Form from '@/accountPage/Form/Form';
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

const Account = () => {
    const [fileurl , setfileurl] = useState(null);
    const [filename , setfilename] = useState("user1")

    const onDrop = useCallback(acceptedFiles => {
        setfileurl(acceptedFiles[0]);
        console.log(acceptedFiles[0]);
        setfilename(acceptedFiles[0].name)
      }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop , accept:"image/*",maxSize:5000000, maxFiles:1})

  return (
    <>
    <Navbar/>

    <div className={Style.Account}>
        <div className={Style.Account_info} >
            <h1>Profile settings</h1>
            <p>You can set preferred display name, create your profile URL and manage other personal settings.</p>
        </div>

        <div  className={Style.Account_box} >
            <div  className={Style.Account_box_img} {...getRootProps()} >
                <input {...getInputProps()} />
                <Image src={images.user4} width={150} height={150} alt='image' className={Style.Account_box_img_img} />
                <p className={Style.Account_box_img_p} >Change Image</p>
            </div>

            <div className={Style.Account_box_form} >
                <Form/>
            </div>
        </div>

    </div>

    <Footer/>


    </>
  )
}

export default Account