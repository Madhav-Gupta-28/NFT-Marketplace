"use client "
import React  from 'react'
import {HiOutlineMail} from "react-icons/hi";
import { MdOutlineHttp , MdOutlineContentCopy } from 'react-icons/md';
import {TiSocialFacebook , TiSocialInstagram , TiSocialTwitter} from "react-icons/ti"
import Button from '@/components/Button/Button';

import Style from "./Form.module.css"
const Form = () => {

  const copyAddress = () => {
    const copyText = document.getElementById("walletAddress");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  }

  return (
    <div className={Style.Form} >
      <div className={Style.Form_box} >
        <form action="" className={Style.Form_box_form} >
          <div className={Style.Form_box_input} >
            <label htmlFor="name" className={Style.Form_box_input_name} >Username</label>
            <input type='text' placeholder='John Smith' className={Style.Form_box_input_name_input} />
          </div>

          <div className={Style.Form_box_input} >
            <label htmlFor="email" className={Style.Form_box_input_email} >Email</label>
            <div className={Style.Form_box_input_email_box} >
              <HiOutlineMail className={Style.Form_box_input_email_icon} />
              <input type='email' placeholder='example@gmail.com' className={Style.Form_box_input_email_input} />
            </div>
          </div>

          <div className={Style.Form_box_input} >
            <label htmlFor="description"className={Style.Form_box_input_bio}  >Bio</label>
           <textarea name="description" id="1" cols="40" rows="6" placeholder="Something about Yourself in few Words"
           className={Style.Form_box_input_bio_textarea} ></textarea>
          </div>

          <div className={Style.Form_box_input} >
            <label htmlFor="website" className={Style.Form_box_input_bio} >Website</label>
            <div className={Style.Form_box_input_website} >
              <MdOutlineHttp className={Style.Form_box_input_website_icon} />
              <input type='email' placeholder='yourwebsite.com' className={Style.Form_box_input_website_input} />
            </div>
          </div>


          <div className={Style.Form_box_input_socials} >

          <div className={Style.Form_box_input_socials_item} >
            <div>
            <label htmlFor="facebook">Facebook</label>
            </div>

            
            <div className={Style.Form_box_input_socials_item_box} >
              <TiSocialFacebook className={Style.Form_box_input_social_icon} />
              <input type='text' placeholder='yourfacebook' className={Style.Form_box_input_social_input} />
            </div>
          </div>

          <div className={Style.Form_box_input_socials_item} >
            <div> 
            <label htmlFor="Twitter">Twitter</label>
            </div>
           
            <div className={Style.Form_box_input_socials_item_box} >
              <TiSocialTwitter className={Style.Form_box_input_social_icon} />
              <input type='text' placeholder='yourtwitter' className={Style.Form_box_input_social_input} />
            </div>
          </div>

          <div className={Style.Form_box_input_socials_item} >
          <div> 
            <label htmlFor="Instagram">Instagram</label>
            </div>
            <div className={Style.Form_box_input_socials_item_box} >
              <TiSocialInstagram className={Style.Form_box_input_social_icon} />
              <input type='text' placeholder='yourInstagram' className={Style.Form_box_input_social_input} />
            </div>
          </div>

          </div>

        <div className={Style.Form_box_input_wallet} >
          <label htmlFor="address">Wallet Address</label>
          <div>
            <input type='text' placeholder='Your Wallet Address' id='walletAddress' />
            <MdOutlineContentCopy className={Style.copyicon} onClick={() => copyAddress()} />
          </div>
        </div>


        <div className={Style.Form_box_input_button} >
         <button className={Style.Form_box_input_button_btn}  >Update Profile</button>
        </div>


        </form>

      </div>

    </div>
  )
}

export default Form