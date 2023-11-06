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

const Author = () => {

    // useStates
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
        images.user2,

    ]

  return (

    <>
    <div className={Style.Author} >
    <Navbar/>
    <AuthorProfileCard/>
    <AuthorTaps collectibles={setcollectibles} created={setcreated} like={setlike} follower={setfollower} following={setfollowing} />
    <Title heading="Popular Creators" paragraph="Click on Music Icon and Enjoy NFTs Music or Audio" />
    {/* {popularArray.map((el , i) => (
      <FollowerTabcard key={i+6} index={i} el={el} />
    ))} */}
    </div>
    
    </>
  
  )
}

export default Author