"use client"
import React , {useState} from 'react'

// Internal Import
import Style from "./Followertab.module.css"
import { RiUserFollowFill , RiUserUnfollowFill , RiAwardLine } from 'react-icons/ri'
import FollowerTabcard from './FollowerTabcard/FollowerTabcard'
import images from "../../img"

const FollowerTab = () => {
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

  const newsArray = [
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



    const [popular , setpopular] = useState(false);
    const [news , setnews] = useState(false);
    const [follower , setfollower] = useState(false);
  
  
    const openPopular = () => {
      if(!popular){
        setpopular(true)
        setnews(false)
        setfollower(false)
      }
    }
  
    
    const openNews = () => {
      if(!news){
        setnews(true)
        setpopular(false)
        setfollower(false)
      }
    }
    
    const openFollower = () => {
      if(!follower){
        setfollower(true)
        setpopular(false)
        setnews(false)
      }
    }
  
    
  
    return (
      <div className={Style.collection}>
  
        <div  className={Style.collection_title}>
  
          <h2>Top List Creators</h2>
  
          <div  className={Style.collection_collections}>
  
            <div  className={Style.collection_collections_btn}>
  
              <button onClick={() => openPopular()}>
                <RiUserFollowFill className={Style.icon} /> Popular
              </button>
  
              <button onClick={() => openFollower()}>
                <RiUserFollowFill/>Following
              </button> 
  
              <button onClick={() => openNews()}>
                <RiAwardLine/>Noteworthy
              </button>
  
            </div>
  
          </div>
  
        </div>
  
        {
          popular && (
            <div className={Style.collection_box}>
              {followerArray.map((el , i) => (
                <FollowerTabcard index={i+1}  el={el} />
              ))}
  
            </div>
          )
        }
  
       {
          follower && (
            <div className={Style.collection_box}>
              {followingArray.map((el , i) => (
                <FollowerTabcard index={i+1}  el={el} />
              ))}
  
            </div>
          )
        }
  
        {
          news && (
            <div className={Style.collection_box}>
              {newsArray.map((el , i) => (
                <FollowerTabcard index={i+1}  el={el}  />
              ))}
  
            </div>
          )
        }
  
      </div>
    )
}

export default FollowerTab