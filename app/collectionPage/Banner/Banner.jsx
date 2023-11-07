"use client"
import React from 'react'

import Style from "./Banner.module.css"
import Image from 'next/image'

const Banner = ({bannerImage}) => {
  return (
    <>
    
   
    <div className={Style.Banner}>
        <div>
            <Image src={bannerImage} objectFit='cover' alt='bg' className={Style.Banner_img}  />

        </div>

        <div  className={Style.Banner_img_mobile} >
        <Image src={bannerImage} objectFit='cover' alt='bg'  />
        </div>

    </div>
    </>
  )
}

export default Banner