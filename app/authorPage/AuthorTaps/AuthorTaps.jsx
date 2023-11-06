"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { TiArrowSortedDown , TiArrowSortedUp , TiTick } from 'react-icons/ti'


// Internal imports 
import Style from "./authortaps.module.css"

const AuthorTaps = ({collectibles , created , like , follower , following}) => {

  const [openList , setopenList] = useState(false);
  const [activeBtn , setactivebtn] = useState(0);
  const [selectedMenu , setselectedMenu] = useState("Most Recent");

  const listArray = [
    "Created by Admin ",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed"
  ]

  // Functions
  const openDropDownList = () => {
    if(!openList){
      setopenList(true)
    }else{
      setopenList(false)
    }
  }

  const openTab = (e) => {
    const btnText = e.target.innerText;
    
    switch ( btnText) {
      
      case "Collectibles":
        collectibles(true);
        created(false);
        like(false);
        follower(false);
        following(false);
        setactivebtn(1)
      
      case "Created":
        collectibles(false);
        created(true);
        like(false);
        follower(false);
        following(false);
        setactivebtn(2)

      case "Following":
        collectibles(false);
        created(false);
        like(false);
        follower(false);
        following(true);
        setactivebtn(3)

    
      case "Follower":
        collectibles(false);
        created(false);
        like(false);
        follower(true);
        following(false);
        setactivebtn(4)
      
      
      case "Like":
        collectibles(false);
        created(false);
        like(true);
        follower(false);
        following(false);
        setactivebtn(5)

      default:
        collectibles(false);
        created(false);
        like(false);
        follower(false);
        following(false);
        setactivebtn(0)

    }
  }



  return (
    <div className={Style.AuthorTaps} >
      <div className={Style.AuthorTaps_box} >
        <div className={Style.AuthorTaps_box_left} >
          <div className={Style.AuthorTaps_box_left_btn} >
            <button className={`${activeBtn == 1 ? Style.active : ""}`} onClick={(e) => openTab(e)}>Collectibles</button>
            <button className={`${activeBtn == 2 ? Style.active : ""}`} onClick={(e) => openTab(e)}>Created</button>
            <button className={`${activeBtn == 3 ? Style.active : ""}`} onClick={(e) => openTab(e)}>Following</button>
            <button className={`${activeBtn == 4 ? Style.active : ""}`} onClick={(e) => openTab(e)}>Follower</button>
            <button className={`${activeBtn == 5 ? Style.active : ""}`} onClick={(e) => openTab(e)}>Like</button>
          </div>
        </div>

        <div className={Style.AuthorTaps_box_right} >
          <div className={Style.AuthorTaps_box_right_para} onClick={() => openDropDownList()} >
            <p>{selectedMenu}</p>
            {openList ? <TiArrowSortedUp className={Style.icon} /> : <TiArrowSortedDown  className={Style.icon} /> }
          </div>
        {
          openList && (
            <div className={Style.AuthorTaps_box_right_list} >
              {
                listArray.map((el,i) => (
                  <div key={i+1} onClick={() => setselectedMenu(el)} className={Style.AuthorTaps_box_right_list_items}>
                    <p>{el}</p>
                    <span>
                      {selectedMenu == el && <TiTick/>}
                    </span>
                  </div>
                ))
              }

            </div>
          )
        }
        </div>
      </div>
    </div>
  )
}

export default AuthorTaps