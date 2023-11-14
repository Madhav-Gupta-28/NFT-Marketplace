"use client"
import React , {useState , useCallback} from 'react'

// Interna; imports
import { MdOutlineHttp , MdOutlineAttachFile } from 'react-icons/md';
import { FaPercent } from 'react-icons/fa';
import { AiTwotonePropertySafety } from 'react-icons/ai';
import {TiSocialFacebook , TiSocialInstagram , TiSocialTwitter} from "react-icons/ti"

import { TiTick } from 'react-icons/ti';
import images from "../../img";
import Button from '@/components/Button/Button';
import DropZone from '../DropZone/DropZone';

import Image from 'next/image';

import Style from "./uploadnft.module.css";
import formStyle from "../../accountPage/Form/Form.module.css"

const UploadNFT = () => {
    const [active, setactive] = useState(0);
    const [itemName , setitemname] = useState("");
    const [website , setwebsite] = useState("");
    const [description , setdescription] = useState("");
    const [royalty , setroyalty] = useState(0)
    const [category , setcategory] = useState("");
    const [filesize , setfilesize] = useState(0);
    const [ property , setProperty] = useState("")
    
    const categoryArray = [
        {
            image : images.nft_image_1,
            category:"Sports"
        },
        {
            image : images.nft_image_2,
            category:"AI"
        },
        {
            image : images.nft_image_3,
            category:"Entertainment"
        }, {
            image : images.nft_image_2,
            category:"Nature"
        }
    ]


  return (
    <div className={Style.Upload} >
        <DropZone title={"PNG, JPG, GIF up to 10MB"} heading={"Drag and Drop file"} subHeading={"or Browse media"} itemName={   itemName}
        website={website} description={description} royalty={royalty} category={category} filesize={filesize} 
        />

    <div className={Style.Upload_box}  >
            <div className={formStyle.Form_box_input} >
                <label htmlFor="itemname" className={formStyle.Form_box_input_name} >Item Name</label>
                <input type='text' placeholder='Name of Item' className={formStyle.Form_box_input_name_input} onChange={(e) => setitemname(e.target.value) } />
            </div>

            <div className={formStyle.Form_box_input} >
                <label htmlFor="website" className={formStyle.Form_box_input_bio} >External Link</label>
                <div className={formStyle.Form_box_input_website} >
                <MdOutlineHttp className={formStyle.Form_box_input_website_icon} />
                <input type='email' placeholder='ace.com' className={formStyle.Form_box_input_website_input} onChange={(e) => setwebsite(e.target.value)} />
                </div>
            </div>

            <div className={formStyle.Form_box_input} >
                <label htmlFor="description" className={formStyle.Form_box_input_bio}  >Description</label>
                <textarea name="description" id="1" cols="40" rows="6" placeholder="Something about NFT"
                className={formStyle.Form_box_input_bio_textarea} onChange={(e) => setdescription(e.target.value)} ></textarea>
                <p>The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</p>
            </div>


        <div className={formStyle.Form_box_input} >
            <label htmlFor='collection'  className={formStyle.Form_box_input_bio} >Choose Collection</label>
            <p  className={Style.chooseCollection_p} >Choose an exiting collection or create a new one</p>  

            <div className={Style.Upload_box_slider_div} >
                {
                    categoryArray.map((el,i) => (
                        <div className={`${Style.Upload_box_slider} ${active == i +  1 ? Style.active : ""} `} key={i + 1} 
                        onClick={() => { setactive(i + 1 ) ,  setcategory(el.category)} }
                        >

                            <div className={Style.Upload_box_slider_box}  >
                                <div  className={Style.Upload_box_slider_box_img}  >
                                    <Image src={el.image}  alt={el.name} width={130} height={130}  className={Style.Upload_box_slider_box_img_img}  />
                                </div>
                            </div>

                            <p>Crypto Legend - Professor</p>
                        </div>
                    )) }

            </div>
        </div>

        <div className={formStyle.Form_box_input_socials} >

        <div className={formStyle.Form_box_input_socials_item} >
        <div>
        <label htmlFor="facebook">Royalties</label>
        </div>

        
        <div className={formStyle.Form_box_input_socials_item_box} >
            <input type='text' placeholder='20%' className={formStyle.Form_box_input_social_input}  onChange={(e) => setroyalty(e.target.value)} />
        </div>
        </div>

        <div className={formStyle.Form_box_input_socials_item} >
        <div> 
        <label htmlFor="Twitter">Size</label>
        </div>
        
        <div className={formStyle.Form_box_input_socials_item_box} >
            <input type='text' placeholder='165 Mb' className={formStyle.Form_box_input_social_input} onChange={(e) => setfilesize(e.target.value)} />
        </div>
        </div>

        <div className={formStyle.Form_box_input_socials_item} >
        <div> 
        <label htmlFor="Instagram">Propertie</label>
        </div>
        <div className={formStyle.Form_box_input_socials_item_box} >
            <input type='text' placeholder='Propertie' className={formStyle.Form_box_input_social_input} onChange={(e) => setProperty(e.target.value)} />
        </div>
        </div>

        </div>
      
        <div className={formStyle.Form_box_input_button} >
         <button className={formStyle.Form_box_input_button_btn}  >Upload Item</button>
        </div>

    </div>

    </div>
  )
}

export default UploadNFT