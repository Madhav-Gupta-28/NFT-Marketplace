"use client";
import React from 'react'

// Internal Imports 
import Style from "./search.module.css";
import Navbar from '@/components/Navbar/Navbar';
import SearchBar from '@/searchPage/SearchBar/SearchBar';
import Slider from '@/components/Slider/Slider';
import Filter from '@/components/Filter/Filter';
import NFTCardTwo from '@/collectionPage/NFTCardTwo/NFTCardTwo';
import Banner from '@/collectionPage/Banner/Banner';
import images from "../../img";
import Footer from '@/components/Footer/Footer';
import Title from '@/components/Title/Title';


const Search = () => {


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

  return (
   <>
   <Navbar/>

   <div className={Style.Search}>
    <Banner bannerImage={images.creatorbackground1} />  
    <SearchBar/>
    <Filter/> 
    <NFTCardTwo NFTData={collectiblesArray} />
    <Title heading={"Top collections "}  paragraph={"Discover the new creative economy"} />
    <Slider/>  
   </div>
   <Footer/>
   </>
  )
}

export default Search;