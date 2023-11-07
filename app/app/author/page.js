"use client"
import React , {useState , useEffect} from 'react'

import Style from "./author.module.css";
import AuthorProfileCard from '@/authorPage/AuthorProfileCard/AuthorProfileCard';
import AuthorTaps from '@/authorPage/AuthorTaps/AuthorTaps';
import NFTCardTwo from '@/collectionPage/NFTCardTwo/NFTCardTwo';
import Title from '@/components/Title/Title';
import Navbar from '@/components/Navbar/Navbar';
import FollowerTabcard from '@/components/FollowerTab/FollowerTabcard/FollowerTabcard';
import images from "../../img";
import AuthorNFTCardBox from '@/authorPage/AuthorNFTCardBox/AuthorNFTCardBox';
import Footer from '@/components/Footer/Footer';

const Author = () => {

    //  use state 
    const [collectibles, setcollectibles] = useState(true);
    const [like, setlike] =  useState(false);
    const [created, setcreated] = useState(false);
    const [follower, setfollower] = useState(false);
    const [following , setfollowing] = useState(false);

    const popularArray = [
        images.user1,
        images.user2,
        images.user1,
        images.user2,
        images.user1,
        images.user2,
        images.user1,
        images.user2,
        images.user1,
        images.user2
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

    <>
    <div className={Style.Author} >
    <Navbar/>
    <AuthorProfileCard/>
    <AuthorTaps collectibles={setcollectibles} created={setcreated} like={setlike} follower={setfollower} following={setfollowing} />
    <Title heading="Popular NFTs" paragraph="Click on Music Icon and Enjoy NFTs Music or Audio" />
    <AuthorNFTCardBox collectibles={collectibles} created={created} like={like} follower={follower} following={following} />

    <Title heading="Popular Creators" paragraph="Click on Music Icon and Enjoy NFTs Music or Audio" />
   
            <div  className={Style.follower_box}  >
                {followingArray.map((el,i) => (
                    <FollowerTabcard index={i} el={el} />

                ))}
            </div>
       
          
    <Footer/>
    </div>
    
    </>
  
  )
}

export default Author