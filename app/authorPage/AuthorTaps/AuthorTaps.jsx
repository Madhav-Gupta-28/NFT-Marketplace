"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { TiArrowSortedDown , TiArrowSortedUp , TiTick } from 'react-icons/ti'


// Internal imports 
import Style from "./authortaps.module.css"

const AuthorTaps = ({collectibles , created , like , follower , following}) => {

  const [openList , setopenList] = useState(false);
  const [activeBtn , setactivebtn] = useState(1);
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
    console.log('Inner text',btnText);

    if(btnText == "Collectibles"){
      collectibles(true);
      created(false);
      like(false);
      follower(false);
      following(false);
      setactivebtn(1)
    }else if(btnText == "Created"){
      collectibles(false);
      created(true);
      like(false);
      follower(false);
      following(false);
      setactivebtn(2)
    }
    else if(btnText == "Following"){
      collectibles(false);
      created(false);
      like(false);
      follower(false);
      following(true);
      setactivebtn(3)
    }
    else if(btnText == "Follower"){
      collectibles(false);
      created(false);
      like(false);
      follower(true);
      following(false);
      setactivebtn(4)
    }else if(btnText == "Like"){
      collectibles(false);
        created(false);
        like(true);
        follower(false);
        following(false);
        setactivebtn(5);
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