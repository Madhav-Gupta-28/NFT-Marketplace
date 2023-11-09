"use client";

import React from 'react'

// Internal Imports 
import Style from "./nftdetails.module.css";

import Button from '@/components/Button/Button';
import Category from '@/components/Category/Category';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import NFTDescription from '@/NFTDetailsPage/NFTDescription/NFTDescription';
import NFTDetailsImage from '@/NFTDetailsPage/NFTDetailsImage/NFTDetailsImage';
import NFTTabs from '@/NFTDetailsPage/NFTTabs/NFTTabs';

const NFTDetails = () => {
  return (
    <>
    <Navbar/>
    <div className={Style.NFTDetails}>
      <div className={Style.NFTDetails_box} >
        <NFTDetailsImage/>
        <NFTDescription/>
      </div>  
    </div>

    <Footer/>
    </>
  )
}

export default NFTDetails