"use client";
import React from 'react'

import Link from 'next/link';


// CSS File Import
import Style from "./discover.module.css";

const Discover = () => {

  const discover = [
    {
      name:"Collection",
      link:'collection'
    },
    {
      name:"Author Profile",
      link:'author'
    },
    {
      name:"NFT Details",
      link:'NFTDetails'
    },
    {
      name:"Account Setting",
      link:'account-setting'
    },
    {
      name:"Search",
      link:'search'
    },
    {
      name:"Blog",
      link:'blog'
    }
  ]

  return (
    <div>
      {discover.map(( element ,  index  )=> (
      <div key={index + 10} className={Style.DISCOVER} >

        <Link href={{pathname : `${element.link}`}}> {element.name} </Link>

      </div>

      )) }
    </div>
  )
}

export default Discover