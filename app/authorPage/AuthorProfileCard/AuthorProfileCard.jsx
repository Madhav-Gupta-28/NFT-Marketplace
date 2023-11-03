"use client"
import React , {useState} from 'react'

// External Imports 
import { MdVerified , MdCloudUpload , MdOutlineReportProblem } from 'react-icons/md';
import {FiCopy} from "react-icons/fi";
import {TiSocialFacebook, TiSocialLinkedin , TiSocialTwitter  , TiSocialYoutube , TiSocialInstagram, } from "react-icons/ti";
import { BsThreeDots } from 'react-icons/bs';
import Button from '@/components/Button/Button';

// Internal Imports 
import Style from "./authorprofilecard.module.css"
import images from "../../img";
import Image from 'next/image';


const AuthorProfileCard = () => {

  const [share , setshare] = useState(false);
  const [report , setreport] = useState(false);

  const copyAddress = () => {
    const copyText = document.getElementById("address");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  }


  const openShare = () => {
    if(!share){
      setshare(true);
      setreport(false)
    }else{
      setshare(false);
    }
  }

  const openReport = () => {
    if(!report){
      setreport(true);
      setshare(false)
    }else{
      setreport(false);
    }
  }



  return (
    <div className={Style.AuthorProfileCard} >
      <div className={Style.AuthorProfileCard_box} >

          {/* Image Start  */}  
        <div className={Style.AuthorProfileCard_box_img}  >
         <Image src={images.nft_image_1} className={Style.AuthorProfileCard_box_img_img} 
          width={220} height={220} />
        </div>
        {/* Image End   */}

      {/* INFO Div Start */}
      <div className={Style.AuthorProfileCard_box_info} >
        {/* INFO DIV Left Side Start */}
        <div className={Style.AuthorProfileCard_box_info_LEFT} >

          <div className={Style.AuthorProfileCard_box_info_LEFT_heading} >
          <h2>Dony Herrara
           <span>
           <MdVerified className={Style.AuthorProfileCard_box_info_LEFT_heading_icon} />
           </span>
           </h2>
          </div>

        <div className={Style.AuthorProfileCard_box_info_address} >    
          <input type='input' value="0x34747479274927592" id='address' />
            <FiCopy onClick={() => copyAddress()} className={Style.AuthorProfileCard_box_info_address_icon} />
        </div>

          <div>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Libero, aliquam atque quia et blanditiis reiciendis in ea culpa cum consequatur.
            </p>
          </div>

          <div className={Style.AuthorProfileCard_box_info_social}  >
          <a href='#' >
              <TiSocialInstagram/>
            </a>
            <a href='#' >
              <TiSocialLinkedin/>
            </a>
            <a href='#' >
              <TiSocialFacebook/>
            </a>
            <a href='#' >
              <TiSocialTwitter/>
            </a>
            <a href='#' >
              <TiSocialYoutube/>
            </a>

          </div>
        </div>
         {/* INFO DIV Left Side Start */}


         {/* INFO Div Right Side Start */}
        <div className={Style.AuthorProfileCard_box_share} >
        <Button btnName="Follow" handleClick={() => {}} />
        <MdCloudUpload onClick={() => openShare()} className={Style.AuthorProfileCard_box_share_icon} />

        {
                 share && (
                   <div className={Style.AuthorProfileCard_box_share_upload} >
                     <p>
                       <span>
                         <TiSocialFacebook  />
                       </span> {" "} Facebook
                     </p>

                     <p>
                       <span>
                         <TiSocialInstagram/>
                       </span> {" "} Instagram
                     </p>

                     <p>
                       <span>
                         <TiSocialLinkedin/>
                       </span> {" "} Linkedin
                     </p>

                     <p>
                       <span>
                         <TiSocialTwitter/>
                       </span> {" "} Twitter
                     </p>
                   </div>
                 )
               }

<BsThreeDots onClick={() => openReport()} className={Style.AuthorProfileCard_box_share_icon} />

              {
                report && (
                  <p className={Style.AuthorProfileCard_box_share_report} >
                    <span>
                      <MdOutlineReportProblem/>
                    </span> {" "}
                    Report Abuse
                  </p>
                )
              }

        </div>
      </div>
       {/* INFO Div End */}

        </div>
      </div>

  )
}

export default AuthorProfileCard



