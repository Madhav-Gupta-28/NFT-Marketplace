"use client"
import React , {useState} from 'react'

// Internal Import
import Style from "./authornftcardbox.module.css";
import images from "../../img";
import NFTCardTwo from '@/collectionPage/NFTCardTwo/NFTCardTwo';
import FollowerTabcard from '@/components/FollowerTab/FollowerTabcard/FollowerTabcard';


const AuthorNFTCardBox = ({collectibles , created , like , follower , following}) => {

    const collectiblesArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_2,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_2
     ]

    const createdArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_2,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3
    ]
    const likeArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_2
    ]

    const followerArray = [
      {
        background:images.creatorbackground1,
        user : images.user1
      },
      {
        background:images.creatorbackground2,
        user : images.user2
      },
      {
        background:images.creatorbackground3,
        user : images.user3
      },      {
        background:images.creatorbackground4,
        user : images.user4
      },
      {
        background:images.creatorbackground2,
        user : images.user5
      }
    ]

    const followingArray = [
        {
          background:images.creatorbackground1,
          user : images.user1
        },
        {
          background:images.creatorbackground2,
          user : images.user2
        },
        {
          background:images.creatorbackground3,
          user : images.user3
        },      {
          background:images.creatorbackground4,
          user : images.user4
        },
        {
          background:images.creatorbackground2,
          user : images.user5
        }
      ]

    
  return (
    <div className={Style.AuthorNFTCardBox} >
        {collectibles && (<NFTCardTwo NFTData={collectiblesArray} /> )}
        {created && (<NFTCardTwo NFTData={likeArray} /> )}
        {like && (<NFTCardTwo NFTData={createdArray} /> )}
        {follower && (
            <div className={Style.follower_box} >
                {followerArray.map((el,i) => (
                    <FollowerTabcard index={i} el={el} />

                ))}
            </div>
       )}

        {following && (
            <div  className={Style.follower_box}  >
                {followingArray.map((el,i) => (
                    <FollowerTabcard index={i} el={el} />

                ))}
            </div>
       
           )}
    </div>
  )
}

export default AuthorNFTCardBox