"use client "
import React , {useState} from 'react'
import Image from 'next/image';


// Internal Imports
import Style from "./nftdesciption.module.css";
import images from "../../img";
import { MdVerified , MdCloudUpload, MdTimer , MdReportProblem , MdOutlineDeleteSweep } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { FaWallet , FaPercentage } from 'react-icons/fa';
import {TiSocialFacebook, TiSocialLinkedin , TiSocialTwitter  ,  TiSocialInstagram, } from "react-icons/ti"
import {BiTransferAlt , BiDollar} from "react-icons/bi";
import Button from '@/components/Button/Button';
import NFTTabs from '../NFTTabs/NFTTabs';


const NFTDescription = () => {

  const [social, setsocial] = useState(false);
  const [NFTMenu , setnftmenu] = useState(false);
  const [history, sethistory] = useState(false)
  const [provanance, setprovanance] = useState(false)
  const [owner, setowner] = useState(false)

  const openSocial = () => {
    if(social){
      setsocial(false);
    }else{
      setsocial(true);
      setnftmenu(false)
    }
  }

  const openNFTMenu = () => {
    if(NFTMenu){
      setnftmenu(false);
    }else{
      setnftmenu(true)
      setsocial(false)
    }
  }

  const openTabs = (e) => {
    const text  = e.target.innerText;

    if(text == "Bid History"){
      sethistory(true);
      setprovanance(false);
      setowner(false)
    }else if (text == "Owner"){
      sethistory(false);
      setprovanance(false);
      setowner(true)
    }else if (text == "Provanance"){
      sethistory(false);
      setprovanance(true);
      setowner(false)
    }

    
  }

  const historyArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ]

  const provananceArray = [
    images.user3,
    images.user5,
    images.user6,
    images.user7,
    images.user1,
  ]

  const ownerArray = [
    images.user3,
  ]


  return (
    <div className={Style.NFTDescription} >
      <div className={Style.NFTDescription_box} >
        {/* Top Div */}
        <div className={Style.NFTDescription_box_share} >
          <p>Virtual Worlds</p>
          <div className={Style.NFTDescription_box_share_icon_box} >
            <MdCloudUpload className={Style.NFTDescription_box_share_icon} onClick={() => openSocial()} />
            {social && (
              <div className={Style.NFTDescription_box_share_icon_box_social} >
            <a href="#"><TiSocialLinkedin className={Style.SOCIAL_ICONS} /></a>
            <a href="#"><TiSocialFacebook   className={Style.SOCIAL_ICONS} /></a>
            <a href="#"><TiSocialTwitter  className={Style.SOCIAL_ICONS}/></a>
            <a href="#"><TiSocialInstagram  className={Style.SOCIAL_ICONS} /></a>
              </div>

            )}
            
            <BsThreeDots className={Style.NFTDescription_box_share_icon} onClick={() => openNFTMenu()} />
            {NFTMenu && (
              <div className={Style.NFTDescription_box_share_icon_box_social_threedots} >
            <a href="#">Change price</a>
            <a href="#">Transfer Token</a>
            <a href="#">Report Abuse</a>
            <a href="#">Delete Item</a>
              </div>

            )}
          </div>
        </div>

        <div className={Style.NFTDescription_box_profile} >
          <h1>Bored Ape #81298</h1>

          <div className={Style.NFTDescription_box_profile_box} >

          
            
            {/* LEFT Profile  */}
          <div>
            <div>
              <Image src={images.nft_image_2} width={20} height={20} className={Style.NFTDescription_box_profile_img}  />
            </div>

            <div>
              <p>Creator</p>
              <h3>Karli Costa  <MdVerified className={Style.ICOn} /> </h3>
             
            </div>
          </div>

                {/* Right Profile */}
          <div>
            <div>
              <Image src={images.creatorbackground9} width={20} height={20} className={Style.NFTDescription_box_profile_img}/>
            </div>

            <div>
              <p>Collection</p>   
              <h3>The Bored Ape    <MdVerified className={Style.ICOn} />  </h3>
            </div>
          </div>

          </div>
        </div>
      
      <div className={Style.NFTDescription_box_profile_bid_timer} >
        <p className={Style.NFTDescription_box_profile_bid_timer_p} >
          <MdTimer className={Style.NFTDescription_box_profile_bid_timer_p_icon} /> <span>Auction Ending in:</span>
        </p>

        <div className={Style.NFTDescription_box_profile_bid_box_timer}  >
          <div className={Style.NFTDescription_box_profile_bid_box_timer_box_item}  >
              <h2>30</h2>
              <p>Days</p>
          </div>

          <div className={Style.NFTDescription_box_profile_bid_box_timer_box_item}  >
              <h2>12</h2>
              <p>Hours</p>
          </div>
          <div className={Style.NFTDescription_box_profile_bid_box_timer_box_item}  >
              <h2>20 </h2>
              <p>Minutes</p>
          </div>
          <div className={Style.NFTDescription_box_profile_bid_box_timer_box_item}  >
              <h2>5</h2>
              <p>Second</p>
          </div>


        </div>


      </div>


      <div className={Style.NFTDescription_box_profile_currentbid} >
        <div className={Style.NFTDescription_box_profile_currentbid_box} >
          <small>Current Bid</small>
          <p>1.2 ETH = $873</p>
        </div>

        <span>98 left in Stock</span>

      </div>


      <div  className={Style.NFTDescription_box_profile_currentbid_button_box} >
              <button> <FaWallet className={Style.NFTDescription_box_profile_currentbid_button_box_icon} /> Place a bid </button>
              <button> <FaPercentage  className={Style.NFTDescription_box_profile_currentbid_button_box_icon}  /> Make Offer </button>

      </div>

      <div className={Style.NFTDescription_box_profile_currentbid_box_tabs} >
        <button  onClick={(e) => openTabs(e)} >Bid History</button>
        <button  onClick={(e) => openTabs(e)} >Provanance</button>
        <button  onClick={(e) => openTabs(e)} >Owner</button>
      </div>

      {
        history && (
          <div className={Style.NFTDescription_box_profile_history_tab}>
            <NFTTabs NFTData={historyArray} />
          </div>
        )
      }

      {
        provanance && (
          <div className={Style.NFTDescription_box_profile_history_tab}>
            <NFTTabs NFTData={provananceArray} />
          </div>
        )
      }

      {
        owner && (
          <div className={Style.NFTDescription_box_profile_history_tab}>
            <NFTTabs NFTData={ownerArray} />
          </div>
        )
      }

      </div>
    </div>
  )
}

export default NFTDescription