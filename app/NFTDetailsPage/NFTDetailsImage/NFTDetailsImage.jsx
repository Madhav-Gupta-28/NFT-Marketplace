"use client";
import React , {useState} from 'react'

import Style from "./nftdetailsimage.module.css";
import images from '../../img';
import { BsImage } from 'react-icons/bs';
import { AiFillHeart , AiOutlineHeart } from 'react-icons/ai';
import { TiArrowSortedUp , TiArrowSortedDown } from 'react-icons/ti';
import Image from 'next/image';


const NFTDetailsImage = () => {

  const [description, setdescription] = useState(true);
  const [details , setdetails] = useState(true);
  const [like, setlike] = useState(false);
  const [ likecount , setlikecount] = useState(22)


  const openDescription = () => {
    if(!description){
      setdescription(true);
    }else{
      setdescription(false);
    }
  }

  const openDetails = () => {
    if(!details){
      setdetails(true);
    }else{
      setdetails(false);
    }
  }


  const likeNFT = () => {
    if(!like){
      setlike(true);
      setlikecount(23)
    }else{
      setlike(false)
      setlikecount(22)
    }
  }


  return (
    <div className={Style.NFTDetailsImage} >
      <div className={Style.NFTDetailsImage_box} >
        <div className={Style.NFTDetailsImage_box_nft} >
          <div className={Style.NFTDetailsImage_box_nft_like}>
            <BsImage className={Style.NFTDetailsImage_box_nft_like_icon} />
            <p onClick={() => likeNFT()} >
              {like ? (
              <>
                <AiOutlineHeart className={Style.NFTDetailsImage_box_nft_like_icon_icon} />  
                <span>{likecount}</span>
              </>
            ) : 
              (
                <>
                <AiFillHeart className={Style.NFTDetailsImage_box_nft_like_icon_icon} /> 
                <span>{likecount}</span>
                </>
                
              )
              }
            </p>
               
          </div>

          <div className={Style.NFTDetailsImage_box_nft_img} >
            <Image src={images.nft_image_2} alt='nft image 2 ' className={Style.NFTDetailsImage_box_nft_img_img} width={500} height={600} objectFit='cover' /> 

          </div>
        </div>
        <div className={Style.NFTDetailsImage_box_description}  >
              <h2 onClick={() => openDescription()} >Description</h2>

              {
                description && (
                  <div>
                    <p>
                    Tattooed Kitty Gang (“TKG”) is a collection of 666 badass kitty gangsters, with symbol of tattoos, 
                    living in the Proud Kitty Gang (“PKG”) metaverse. Each TKG is an 1/1 ID as gangster member & all the joint rights.
                    </p>
                  </div>
                )
              }
        </div>


        <div className={Style.NFTDetailsImage_box_details}  >
              <h2 onClick={() => openDetails()} >Details</h2>

              {
                details && (
                  <div>
                    <div>
                    <p>2000 x 2000 px.IMAGE(685KB)</p>
                    </div>

                    <div>
                    <p>Contract Address:</p>
                    <h6>0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a</h6>
                    </div>

                    <div>
                      <p>Token ID:</p>
                      <h6>47927</h6>
                    </div>
                  

                  </div>
                )
              }
        </div>
      </div>

    </div>
  )
}

export default NFTDetailsImage